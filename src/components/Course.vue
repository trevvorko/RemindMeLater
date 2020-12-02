<template>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ data.title }}</h5>
        <ul>
            <li v-for='(reminder, index) in data.reminders' :key="index">{{ reminder.name }}, Due: {{ Date(reminder.due) }}</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Course',
  props: {
    data: Object
  }
}
</script>

<style scoped>

</style>
