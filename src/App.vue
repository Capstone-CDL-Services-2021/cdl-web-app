<template>
  <!--From main.js, this template gets mounted to the <div id="app"> in the
      index.html and renders it to the main DOM-->
  <div id="app">
    <!--Renders the proper component/view by matching the address bar with
        the path to the component/view-->
    <router-view/>
  </div>
</template>

<script>
/**
 * import components, views and dependencies
 */
import axios from "axios";

/**
 * export components, views and methods from the imports
 */
export default {
  name: 'App',
  /**
   * created - create a session of logged in user
   *           and store values into "user"
   *
   * @returns {Promise<void>}
   * returns and uses the method from the back-end api and
   * stores the values into "user"
   */
  async created() {
    const response = await axios.get('user');
    this.$store.dispatch('user', response.data);
  },
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
