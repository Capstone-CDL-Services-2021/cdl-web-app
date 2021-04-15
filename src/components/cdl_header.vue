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


<!--  This component is called for creating columns for the header: left side has the home image, login/logout/register/forgot password, right side has contact information -->
<template>
  <div class="column">
    <div class="row">

      <!--  This column is for the logo and picture. If clicking on the picture, it will redirect you to the home page -->
      <div class="col-sm-200">
        <img alt="CDL Services" width="150px" src="../assets/cdlservices.jpg" align="left" style="padding-left:20px"
             v-on:click="redirect('/')">
      </div>

      <!--  This column is for the email/password/forgot password/register column is for -->
      <div class="col-sm-20" style="padding:20px">
        <b-form v-if="!user" @submit.prevent="submitHandler">
          <error v-if="error" :error="error"></error>
          <b-input-group size="xs">
            <b-form-input placeholder="Email" v-model="email"></b-form-input>
          </b-input-group>
          <b-input-group size="xs">
            <b-form-input type="password" placeholder="Password" v-model="password"></b-form-input>
            <b-button type="submit" variant="primary">Login</b-button>
          </b-input-group>
          <p class="forgot-password text-left">
            <router-link to="forgot">Forgot password?</router-link>
          </p>
          <a href="/register" v-on:click="redirect('/register')">Register</a>
        </b-form>
        <!-- checks if the user logging in is a manager or not -->
        <div v-if="user">
          <div v-if="user.email == 'manager@cdlservices.com'">{{ redirect('/managerHome') }}
            <manager-navbar/>
          </div>
          <a href="javascript:void(0)" v-on:click="logoutHandler">Logout</a>
        </div>
      </div>
      <!-- column for contact information -->
      <div class="col-sm">
        <p class="text-right" style="padding-right: 20px">T5H 2K3 Edmonton, Alberta, Canada <br> 780-695-5395 <br> Mon-
          Sat 9:00am - 5:00pm<br></p>
      </div>
    </div>
  </div>
</template>


<script>
/**
 * import components, views and dependencies
 */
import Error from '@/components/Error.vue'
import axios from 'axios'
import {mapGetters} from 'vuex'

/**
 * export components, views and methods from the imports
 */
export default {
  name: "cdl_header",
  components: {
    Error
  },

  /**
   * return data to declared and instantiated variables
   */
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {

    /**
     * this method is to redirect based on the id parameter input
     * @param id a String value that is a path
     */
    redirect(id) {
      this.$router.push(id)
    },

    /**
     * It removes the token associated to the user and then it makes the user = null.
     */
    logoutHandler() {
      localStorage.removeItem('token');
      this.$store.dispatch('user', null);
      this.$router.push('/');
    },

    /**
     * Whenever a user logs in, this method is called to submit to check in the database if the email/password matches any in the database.
     *
     */
    async submitHandler() {
      try {
        const response = await axios.post('login', {
          email: this.email,
          password: this.password
        });
        console.log(response);
        localStorage.setItem('token', response.data.token);
        this.$store.dispatch('user', response.data.user);
      } catch (e) {
        this.error = "Invalid username/password";
      }
    }
  },

  computed: {

    /**
     * maps if user is found
     */
    ...mapGetters(['user'])
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
  /*position:relative;*/
}

.btn:link,
.btn:visited {
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  top: 0;
  left: 0;
  color: white;
  /*padding:20px 40px;*/
  border-radius: 100px;
  display: inline-block;
  transition: all .5s;
  font-family: "Corbel Light";
}

.btn-white {
  background: green;
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
  background: green;
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