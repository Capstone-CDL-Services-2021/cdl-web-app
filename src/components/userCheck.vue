<!--This component is called whenever a user is logged in, it will go through a check if it's a manager or not.-->
<template>
  <div v-if="user">
<!--    if user is a manager, it will redirect to the manager home page-->
    <div v-if="user.email == 'manager@cdlservices.com'">{{ redirect('/managerHome')}}<manager-navbar/></div>
    <div v-else> <navbar/></div></div>
  <div v-else> <navbar/>
  </div>
</template>

<script>
/**
 * import components, views and dependencies
 */
import managerNavbar from "@/components/managerNavbar";
import navbar from "@/components/navbar";
import {mapGetters} from "vuex";

/**
 * export components, views and methods from the imports
 */
export default {
  name: "userCheck",
  components: {
        navbar,
        managerNavbar
  },  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    /**
     * this method is to redirect based on the id parameter input
     * @param id a String value that is a path
     */
    redirect(id) {
      this.$router.push(id)
    }},
  }
</script>

<style scoped>

</style>