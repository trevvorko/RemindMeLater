<template>
    <div class="card">
      <div class="card-body">
      </div>
    </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    data: Object,
    title: String
  },
  data: function(){
    return{
      name: String,
      due: Date
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>

</style>
