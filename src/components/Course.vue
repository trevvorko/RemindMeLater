<template>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ data.title }}</h5>
        <button v-on:click="addTask" class="btn btn-putline-primary my-2 mh-sm-0">Add Task</button>
        <ul id="TaskList">
            <li v-for='(reminder, index) in reminders' :key="index">{{ reminder.name }}, Due: {{ formatDate(reminder.due) }}
              <button v-on:click="removeTask(index)" class="btn btn-putline-primary my-2 mh-sm-0">Remove Task</button>
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
      reminders: this.data.reminders
    }
  },
  methods: {
    addTask: function(){
      this.$dialog.prompt("Input task title",Text).then(result=>{
        this.reminders.push({name: result.data, due: Date()})
      })
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
