<template>
  <b-navbar class="navbar navbar-light" style="background-color: green;">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>

        <b-button-group size="lg">

          <!--            <b-button variant="outline-light" @click=redirect>Home</b-button>-->
          <b-button variant="outline-light" v-on:click="redirect('/test')" >Home</b-button>
          <b-button variant="outline-light">Services</b-button>
          <b-button variant="outline-light">Schedule</b-button>
          <b-button variant="outline-light">Testimonials</b-button>

        </b-button-group>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "navbar",
  data(){
    return {

    }
  },
  methods: {
    redirect(id) {
      this.$router.replace({ path: id }).catch(()=>{})
    }
  }
}

</script>

<style scoped>

</style>