<template>
  <div v-if="job">
    <h1>Job title -{{job.title}}</h1>
    <p>Job Details - {{job.details}}</p>
  </div>

</template>

<script>
export default {
  props:['id'],
 data(){
  return{
    // id:this.$route.params.id
    job:null
  }
 },
  mounted(){
    fetch("http://localhost:3000/jobs/"+this.id)
    .then((response)=>{
     return  response.json()
    })
    .then((data)=>{
      this.job=data
    })
    .catch((err)=>{
      console.log(err.message());
    })
  }
}
</script>

<style>

</style>