<template>
  <div id="app">
    <Service/>
  </div>
</template>

<script>
import Service from "@/components/Service";

export default {
  name: 'App',
  components: {
    Service
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
