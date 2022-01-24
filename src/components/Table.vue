<template>
  <div class="center-align">
    <h2 class="title  ">Comparison Table</h2>
    <table class="table table-bordered">
      <thead>
      <tr>
        <th scope="col">Photo</th>
        <th scope="col">ID</th>
        <th scope="col">URL</th>
        <th scope="col">Title</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in items" :key="item">
        <td>
          <img v-bind:src="item.url" width="200px" height="100px" alt=""/>
        </td>
        <td>{{item.id}}</td>
        <td>{{item.url}}</td>
        <td>{{item.title}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props:['items'],
}
</script>

<style scoped>
.title{
  text-align: center;
  color: grey;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
.center-align{
  margin: auto;
  width: 73%;
}
</style>
