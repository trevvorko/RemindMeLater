<template>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ data.title }}</h5>
        <button data-toggle="dropdown" class="btn btn-putline-primary my-2 mh-sm-0">Add Task</button>
        <form class="dropdown-menu p-4">
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
        <ul id="TaskList">
            <li v-for='(reminder, index) in reminders' :key="index">{{ reminder.name }}, Due: {{ formatDate(reminder.due) }}
              <button v-on:click="removeTask(index)" class="btn btn-outline-danger my-2 mh-sm-0">Remove Task</button>
            </li>
        </ul>
      </div>
    </div>
</template>

<script>
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
    addTask: function(){
      var name = this.taskName
      var date = this.taskDate
      this.reminders.push({name:name,due:date})
    },
    removeTask: function(index){
      this.reminders.splice(index, 1)
    },
    formatDate: function(dueDate){
      const d = new Date(dueDate)
      return d.toDateString()
    }
  }
}
</script>

<style scoped>
  #TaskList{
    list-style:none;
  }
</style>
