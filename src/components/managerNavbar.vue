<!--
*******************************************
*                                         *
* Application: Front-end of CDL_Services  *
*                                         *
* Author: Alejandro Pena Canelon          *
*         Daniel Tran                     *
*         David Do                        *
*         Jimmy Lam                       *
*         Jordan Banh                     *
*         Justin Serrano                  *
*                                         *
* Date: April 16, 2021                    *
*                                         *
******************************************* -->


<!-- Component called whenever a manager is logged in. -->
<template>
  <b-navbar toggleable="lg" class="navbar navbar-light" style="background-color: green;" sticky>
    <!-- Used for mobile friendliness -->
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- The redirection based on which button is pushed -->
      <b-navbar-nav>
        <b-button variant="outline-light" v-on:click="redirect('/managerProjects')">Projects</b-button>
        <b-button variant="outline-light" v-on:click="redirect('/managerService')">Services</b-button>
        <b-button variant="outline-light" v-on:click="redirect('/managerReports/')">Reports</b-button>
        <b-button variant="outline-light" v-on:click="redirect('/managerUserAccounts')">Manage User Accounts</b-button>
        <b-button variant="outline-light" v-on:click="redirect('/managerEquipment')">Equipment</b-button>
        <b-button variant="outline-light" v-on:click="redirect('/managerTestimonials')">Testimonials</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>

/**
 * export components, views and methods from the imports
 */
export default {
  name: "navbar",

  /**
   * return data to declared and instantiated variables
   */
  data() {
    return {

    }
  },

  /**
   * this method is to redirect based on the id parameter input
   * @param id a String value that is a path
   */
  methods: {

    /**
     * this method is to redirect based on the id parameter input
     * @param id a String value that is a path
     */
    redirect(id) {
      this.$router.push(id)
    }
  }
}
</script>

<!-- CSS Style Script -->
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
}

.btn:link,
.btn:visited {
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  top: 0;
  left: 0;
  color: green;
  border-radius: 100px;
  display: inline-block;
  transition: all .5s;
  font-family: "Corbel Light";
  margin-left: 84rem;
}

.btn-white {
  background: white;
  color: #000;


}

.btn:active {
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  transform: translateY(-1px);
}

.btn-bottom-animation-1 {
  animation: comeFromBottom 1s ease-out .8s;
}

.btn::after {
  content: "";
  text-decoration: none;
  text-transform: uppercase;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 100px;
  display: inline-block;
  z-index: -1;
  transition: all .5s;
}

.btn-white::after {
  background: white;
}

.btn-animation-1:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}

@keyframes comeFromBottom {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>