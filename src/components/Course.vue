<template>
    <div class="card my-3 bg-light">
      <h5 class="card-header">{{ data.title }}</h5>
      <div class="card-body">
        <ul id="TaskList" class="container text-center align-middle">
            <li v-for='(reminder, index) in reminders' :key="index" class="row">
              <div class="col-12">
                <strike v-if="reminder.completed == true">{{ reminder.name }}, Due: {{ formatDate(reminder.due) }}</strike>
                <span v-else>{{ reminder.name }}, Due: {{ formatDate(reminder.due) }}</span>
                <button v-on:click="completeTask(index)" class="btn btn-sm btn-outline-success my-3 mx-2 mh-sm-0">
                  <span v-if="reminder.completed">
                    &check;
                  </span>
                  <span v-else>
                    -
                  </span>
                </button>
                <button v-on:click="removeTask(index)" class="btn btn-sm btn-outline-danger my-3 mx-2 mh-sm-0">X</button> 
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
          <button type="submit" v-on:click="addTask" class="btn btn-primary">Add Task</button>
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
    data: Object
  },
  data: function(){
    return{
      reminders: this.data.reminders,
      taskName: '',
      taskDate: ''
    }
  },
  methods: {
    completeTask: function(index) {
      this.reminders[index].completed = !this.reminders[index].completed
    },
    addTask: function(){
      var name = this.taskName
      var date = firebase.firestore.Timestamp.now();
      this.reminders.push({name:name,due:date})
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

</style>
