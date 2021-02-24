<template>
  <b-navbar toggleable="lg" class="navbar navbar-light" style="background-color: green;" sticky>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-button variant="outline-light" v-on:click="redirect('/')">Home</b-button>
        <b-button variant="outline-light" v-on:click="redirect('/services')">Services</b-button>
        <b-button variant="outline-light" v-on:click="redirect('/test')">Schedule</b-button>
        <b-button variant="outline-light" v-on:click="redirect('/register')">Testimonials</b-button>

       <!-- <a href="/book" class="btn btn-white btn-animation-1" v-on:click="redirect('/book')">Request a Service</a> -->
      </b-navbar-nav>
      <b-navbar-nav class = "ml-auto">

          <b-button variant="outline-light" right>Request a Service</b-button>

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {}
  },
  methods: {
    redirect(id) {
      this.$router.push(id)
    }
  }
}

</script>

<style scoped>
.nav-item.nav-item.nav-item a {
  color: white;
  padding: 20px;
  border: 3px solid white;

}

body {
  background: lightblue;
  text-align: center;
  box-sizing: border-box;
  font-family: "Lato", Sans-serif;
  /*position:relative;*/
}

/*.btn:link,*/
/*.btn:visited {*/
/*  text-decoration: none;*/
/*  text-transform: uppercase;*/
/*  position: relative;*/
/*  top: 0;*/
/*  left: 0;*/
/*  color: green;*/
/*  !*padding:20px 40px;*!*/
/*  border-radius: 100px;*/
/*  display: inline-block;*/
/*  transition: all .5s;*/
/*  font-family: "Corbel Light";*/

/*}*/

/*.btn-white {*/
/*  background: white;*/
/*  color: #000;*/


/*}*/

/*.btn:active {*/
/*  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);*/
/*  transform: translateY(-1px);*/
/*}*/

/*.btn-bottom-animation-1 {*/
/*  animation: comeFromBottom 1s ease-out .8s;*/
/*}*/

/*.btn::after {*/
/*  content: "";*/
/*  text-decoration: none;*/
/*  text-transform: uppercase;*/
/*  position: absolute;*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  top: 0;*/
/*  left: 0;*/
/*  border-radius: 100px;*/
/*  display: inline-block;*/
/*  z-index: -1;*/
/*  transition: all .5s;*/

/*}*/

/*.btn-white::after {*/
/*  background: white;*/
/*}*/

/*.btn-animation-1:hover::after {*/
/*  transform: scaleX(1.4) scaleY(1.6);*/
/*  opacity: 0;*/
/*}*/

/*@keyframes comeFromBottom {*/
/*  0% {*/
/*    opacity: 0;*/
/*    transform: translateY(40px);*/
/*  }*/
/*  100% {*/
/*    opacity: 1;*/
/*    transform: translateY(0);*/
/*  }*/
/*}*/
</style>