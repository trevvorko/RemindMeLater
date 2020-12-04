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
              <button class="btn" v-for="color in possibleColors" :key="color" v-on:click="changeColor(color)">{{color}}</button>
            </div>
          </div>
          <button v-if="editMode" v-on:click="removeFunction(mainIndex)" class="btn btn-lg btn-danger my-3 mx-2 mh-sm-0">X</button> 
        </div>
      </div>
      <div class="card-body">
        <div class="row text-center">
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
            <li v-for='(reminder, index) in sortedArray' :key="reminder.created.seconds">
              <div class="row text-center">
                <div class="col my-auto">
                  <strike v-if="reminder.completed === true">{{ reminder.name }}</strike>
                  <span v-else>{{ reminder.name }}</span>
                </div>
                <div class="col my-auto">
                  <strike v-if="reminder.completed === true">Due: {{ formatDate(reminder.due) }}</strike>
                  <span v-else>Due: {{ formatDate(reminder.due) }}</span>
                </div>
                <div class="col my-auto">
                  <button v-if="!editMode" v-on:click="completeTask(index)" class="btn btn-sm btn-outline-success my-3 mx-2 mh-sm-0">
                  <span v-if="reminder.completed">
                    &check;
                  </span>
                  <span v-else>
                    -
                  </span>
                </button>
                <button v-if="editMode" v-on:click="removeTask(index)" class="btn btn-sm btn-outline-danger my-3 mx-2 mh-sm-0">X</button> 
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
          <button type="submit" v-on:click="addTask(mainIndex)" class="btn btn-primary">Add Task</button>
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
    mainIndex: Number
  },
  data: function(){
    return{
      color: this.data.color,
      reminders: this.data.reminders,
      taskName: '',
      taskDate: '',
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
      sortBy: 'ascending'
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
    changeColor: function(newColor) {
      this.color = newColor;
    },
    completeTask: function(index) {
      this.reminders[index].completed = !this.reminders[index].completed
    },
    addTask: function(mainIndex){
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
      let date = firebase.firestore.Timestamp.fromDate(new Date(this.taskDate));
      var reminder = {name:this.taskName, due:date, completed:false, created: firebase.firestore.Timestamp.now()}
      this.reminders.push(reminder)
      var idToken = firebase.auth().currentUser.uid;
      var userRef = firebase.firestore().collection("users").doc(idToken);
     userRef.get().then(function(doc) {
        var data = doc.data();
        var oldCourses = data["courses"];
        var oldReminders = oldCourses[mainIndex];
        oldReminders["reminders"].push(reminder);
        userRef.set(data);
      });
      this.taskName = ''
      this.taskDate = ''
    },
    removeTask: function(index){
      this.reminders.splice(index, 1)
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