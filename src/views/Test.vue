<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hello From Test</h1>
    <navbar/>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar";

export default {
  name: 'Home',
  components: {
  navbar
  }
}
</script>
