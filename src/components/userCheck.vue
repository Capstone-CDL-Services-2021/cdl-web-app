<template>
  <div v-if="user">
    <div v-if="user.email == 'manager@cdlservices.com'">{{ redirect('/managerHome')}}<manager-navbar/></div>
    <div v-else> <navbar/></div></div>
  <div v-else> <navbar/>
  </div>
</template>

<script>
import managerNavbar from "@/components/managerNavbar";
import navbar from "@/components/navbar";
import {mapGetters} from "vuex";


export default {
  name: "userCheck",
  components: {
        navbar,
        managerNavbar
  },  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    redirect(id) {
      this.$router.push(id)
    }},
  }
</script>

<style scoped>

</style>