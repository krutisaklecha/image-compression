<template>
  <div id="app">
    <div id="nav">
      <image-list></image-list>
    </div>
  </div>
</template>

<script>
import ImageList from "./components/ImageList";
export  default {
  components:{ImageList}
}
</script>
<style>
#app {
  font-family:Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
