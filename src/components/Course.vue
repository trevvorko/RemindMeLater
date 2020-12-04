<template>
    <div class="card my-3 bg-light">
      <div class="card-header">
        <div class="row justify-content-between">
          <h3 class="my-auto mx-4" v-bind:style="{color: this.color}">{{ data.title }}</h3>
          <div v-if="editMode" class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Change Color
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button class="btn" v-for="color in possibleColors" :key="color" v-on:click="changeColor(color, mainKey)" v-bind:style="{color: color}">{{color}}</button>
            </div>
          </div>
          <button v-if="editMode" v-on:click="removeFunction(data.created.seconds, mainKey)" class="btn btn-lg btn-danger my-3 mx-2 mh-sm-0">X</button> 
        </div>
      </div>
      <div class="card-body">
        <div class="row text-center">
                <div v-if="editMode" class = "col col-sm">
                </div>
                <div class="col">
                  <h5>Name</h5>
                </div>
                <div class="col">
                  <h5 v-on:click="changeSort">Date<img height="18" width="18" src="@/assets/arrow.svg" v-bind:class="[sortBy==='ascending' ? 'down' : '']"></h5>
                </div>
                <div class="col">
                </div>
        </div>
        <ul id="TaskList" class="container">
            <li v-for='reminder in sortedArray' :key="reminder.created.seconds">
              <div class="row text-center">
                <div v-if="editMode" class = "col col-sm">
                  <button v-if="editMode && !reminder.completed && !taskEditMode" v-on:click="taskEditMode=!taskEditMode;editKey = reminder.created.seconds;editName=reminder.name" class="btn btn-sm btn-outline-success my-3 mx-2 mh-sm-0">Edit</button>
                  <button v-if="editMode && !reminder.completed && taskEditMode" v-on:click="taskEditMode=!taskEditMode" class="btn btn-sm btn-outline-danger my-3 mx-2 mh-sm-0">Cancel</button>
                  <button v-if="taskEditMode && editKey==reminder.created.seconds" v-on:click="editTask(reminder.created.seconds,mainKey);taskEditMode=!taskEditMode;" class="btn btn-sm btn-outline-primary my-3 mx-2 mh-sm-0">Done</button>
                </div>
                <div class="col my-auto">
                  <strike v-if="reminder.completed === true">{{ reminder.name }}</strike>
                  <input v-else-if="taskEditMode && editKey === reminder.created.seconds" v-model="editName" type="text">
                  <span v-else>{{ reminder.name }}</span>
                </div>
                <div class="col my-auto">
                  <strike v-if="reminder.completed === true">Due: {{ formatDate(reminder.due) }}</strike>
                  <input v-else-if="taskEditMode && editKey === reminder.created.seconds" v-model="editDate" type="date">
                  <span v-else>Due: {{ formatDate(reminder.due) }}</span>
                </div>
                <div class="col my-auto">
                  <button v-if="!editMode" v-on:click="completeTask(reminder.created.seconds, mainKey)" class="btn btn-sm btn-outline-success my-3 mx-2 mh-sm-0">
                  <span v-if="reminder.completed">
                    &check;
                  </span>
                  <span v-else>
                    -
                  </span>
                </button>
                <button v-if="editMode" v-on:click="removeTask(reminder.created.seconds, mainKey)" class="btn btn-sm btn-outline-danger my-3 mx-2 mh-sm-0">X</button> 
                </div>
              </div>
            </li>
        </ul>
      </div>
      <div class="col-lg-6 mx-auto">
        <form class="dropdown-menu p-4" autocomplete="off">
          <div class="form-group">
            <label for="taskTitleInput">Task Title</label>
            <input v-model="taskName" type="test" class="form-control" id="taskTitleInput" placeholder="Reminder Name">
          </div>
          <div class="form-group">
            <label for="dueDateInput">Due Date</label>
            <input v-model="taskDate" type="date" class="form-control" id="dueDateInput">
          </div>
          <button type="submit" v-on:click="addTask(mainKey)" class="btn btn-primary">Add Task</button>
        </form>
        <button data-toggle="dropdown" class="btn btn-block btn-outline-primary my-2 mh-sm-0 ">Add Task</button>
      </div>
      
    </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
export default {
  name: 'Course',
  props: {
    data: Object,
    editMode: Boolean,
    removeFunction: Function,
    mainKey: Number
  },
  data: function(){
    return{
      color: this.data.color,
      reminders: this.data.reminders,
      taskName: '',
      taskDate: '',
      editName:'',
      editDate:'',
      possibleColors: [
          'blue',
          'indigo',
          'purple',
          'pink',
          'red',
          'orange',
          'green',
          'teal',
          'black'
      ],
      sortBy: 'ascending',
      taskEditMode: false,
      editKey:0
    }
  },
  computed: {
    sortedArray: function() {
      const copy = [...this.reminders];
      function descending(a, b) {
          if (a.due.seconds > b.due.seconds)
            return -1;
          if (a.due.seconds < b.due.seconds)
            return 1;
          return 0;
      }
      function ascending(a, b) {
          if (a.due.seconds < b.due.seconds)
            return -1;
          if (a.due.seconds > b.due.seconds)
            return 1;
          return 0;
      }
      if (this.sortBy === 'ascending') {
        return copy.sort(ascending)
      } else {
        return copy.sort(descending)
      }
    }
  },
  methods: {
    changeSort: function() {
      if (this.sortBy === 'ascending') {
        this.sortBy = 'descending'
      } else {
        this.sortBy = 'ascending'
      }
    },
    changeColor: function(newColor, mainKey) {
      this.color = newColor;
      var idToken = firebase.auth().currentUser.uid;
      var userRef = firebase.firestore().collection("users").doc(idToken);
      userRef.get().then(function(doc) {
        var data = doc.data();
        var oldCourses = data["courses"];
        let mainIndex = oldCourses.findIndex(x => x.created.seconds === mainKey)
        var oldCourse = oldCourses[mainIndex];
        oldCourse["color"] = newColor;
        userRef.set(data);
      });
    },
    completeTask: function(key, mainKey) {
      let index = this.reminders.findIndex(x => x.created.seconds === key);
      this.reminders[index].completed = !this.reminders[index].completed;
      var idToken = firebase.auth().currentUser.uid;
      var userRef = firebase.firestore().collection("users").doc(idToken);
      userRef.get().then(function(doc) {
        var data = doc.data();
        var oldCourses = data["courses"];
        let mainIndex = oldCourses.findIndex(x => x.created.seconds === mainKey)
        var oldTasks = oldCourses[mainIndex];
        var oldReminders = oldTasks["reminders"];
        var oldReminder = oldReminders[index];
        oldReminder.completed = !oldReminder.completed;
        userRef.set(data);
      });
    },
    addTask: function(mainKey){
      if (this.taskName.trim() === '') {
        this.taskName = ''
        this.taskDate = ''
        alert("Task name should not be empty")
        return;
      }
      if (this.taskDate.trim() === '') {
        this.taskName = ''
        this.taskDate = ''
        alert("Task date should not be empty")
        return;
      }
      var parts = this.taskDate.split('-');
      var mydate = new Date(parts[0], parts[1] - 1, parts[2]);
      let date = firebase.firestore.Timestamp.fromDate(mydate);
      var reminder = {name:this.taskName, due:date, completed:false, created: firebase.firestore.Timestamp.now()}
      this.reminders.push(reminder)
      var idToken = firebase.auth().currentUser.uid;
      var userRef = firebase.firestore().collection("users").doc(idToken);
     userRef.get().then(function(doc) {
        var data = doc.data();
        var oldCourses = data["courses"];
        let mainIndex = oldCourses.findIndex(x => x.created.seconds === mainKey)
        var oldReminders = oldCourses[mainIndex];
        oldReminders["reminders"].push(reminder);
        userRef.set(data);
      });
      this.taskName = ''
      this.taskDate = ''
    },
    editTask: function(key,mainKey){
      if (this.editName.trim() === '') {
        this.editName = ''
        this.editDate = ''
        alert("Task name should not be empty")
        return;
      }
      if (this.taskDate.trim() === '') {
        this.editName = ''
        this.editDate = ''
        alert("Task date should not be empty")
        return;
      }
      let index = this.reminders.findIndex(x => key === x.created.seconds);
      var parts = this.editDate.split('-');
      var mydate = new Date(parts[0], parts[1] - 1, parts[2]);
      let date = firebase.firestore.Timestamp.fromDate(mydate);
      this.reminders[index].due = date
      this.reminders[index].name = this.editName
      var newReminder = {name:this.editName, due:date, completed:this.reminders[index].completed,created:this.reminders[index].created}
      var idToken = firebase.auth().currentUser.uid;
      var userRef = firebase.firestore().collection("users").doc(idToken);
     userRef.get().then(function(doc) {
        var data = doc.data();
        var oldCourses = data["courses"];
        let mainIndex = oldCourses.findIndex(x => x.created.seconds === mainKey)
        var oldReminders = oldCourses[mainIndex];
        let backIndex = oldReminders["reminders"].findIndex(x=>key === x.created.seconds)
        oldReminders["reminders"][backIndex]=newReminder
        userRef.set(data);
      });
    },
    removeTask: function(key, mainKey){
      let index = this.reminders.findIndex(x => key === x.created.seconds);
      this.reminders.splice(index, 1)
      var idToken = firebase.auth().currentUser.uid;
      var userRef = firebase.firestore().collection("users").doc(idToken);
     userRef.get().then(function(doc) {
        var data = doc.data();
        var oldCourses = data["courses"];
        let mainIndex = oldCourses.findIndex(x => x.created.seconds === mainKey)
        var oldTasks = oldCourses[mainIndex];
        var oldReminders = oldTasks["reminders"];
        oldReminders.splice(index, 1);
        userRef.set(data);
      });
    },
    formatDate: function(dueDate){
      const d = new firebase.firestore.Timestamp(dueDate.seconds, dueDate.nanoseconds).toDate();
      return d.toDateString()
    }
  }
}
</script>

<style scoped>
  #TaskList{
    list-style: none;
  }
  .card {
    border-width: 2.5px;
  }

  .down {
    transform: rotate(180deg);
  }
</style>