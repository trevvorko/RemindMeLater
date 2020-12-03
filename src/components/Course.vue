<template>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ data.title }}</h5>
        <button v-on:click="addTask" class="btn btn-putline-primary my-2 mh-sm-0">Add Task</button>
        <ul>
            <li v-for='(reminder, index) in data.reminders' :key="index">{{ reminder.name }}, Due: {{ Date(reminder.due) }}</li>
        </ul>
      </div>
    </div>
</template>

<script>

import Vue from 'vue'
import Task from '@/components/Task.vue'

export default {
  name: 'Course',
  props: {
    data: Object,
    title: String
  },
  data: function(){
    return{
      reminders: []
    }
  },
  methods: {
    addTask: function(){
      this.$dialog.prompt("Input task title",Text).then(result=>{
        var ComponentClass = Vue.extend(Task)
        var instance = new ComponentClass()
        instance.name = result.data
        this.$dialog.prompt("Input due date",Date).then(result=>{
          instance.dueDate = result.data
          this.data.reminders.push(instance)
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
