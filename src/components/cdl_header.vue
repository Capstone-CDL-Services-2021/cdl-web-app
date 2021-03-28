<template>
  <div class="column">
    <div class="row">
      <div class="col-sm-200">
        <img alt="CDL Services" width="150px" src="../assets/cdlservices.jpg" align="left" style="padding-left:20px" v-on:click="redirect('/')">
      </div>

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
        </b-form>
        <div v-if="!user">
        <a href="/register" v-on:click="redirect('/register')">Register</a>
        </div>
        <div v-if="user">
          <a href="javascript:void(0)" v-on:click="logoutHandler">Logout</a>
        </div>
      </div>
      <div class="col-sm">
        <p class="text-right" style="padding-right: 20px">T5H 2K3 Edmonton, Alberta, Canada <br> 780-695-5395 <br> Mon- Sat 9:00am - 5:00pm<br></p>
      </div>
    </div>
  </div>
</template>

<script>
import Error from '@/components/Error.vue'
import axios from 'axios'
import {mapGetters} from 'vuex'
export default {
  name: "cdl_header",
  components:{
    Error
  },
  data() {
    return {
      email:'',
      password:'',
      error:''
    }
  },
  methods: {
    redirect(id) {
      this.$router.push(id)
    },
    logoutHandler(){
      localStorage.removeItem('token');
      this.$store.dispatch('user',null);
      this.$router.push('/');
    },

    async submitHandler(){
      try{
      const response = await axios.post('login', {
        email : this.email,
        password : this.password
      });
       console.log(response);
       localStorage.setItem('token',response.data.token);
       this.$store.dispatch('user', response.data.user);
    }catch(e) {
        this.error= "Invalid username/password";
        alert("Invalid Username or password");
    }}
  },
  computed: {
    ...mapGetters(['user'])
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