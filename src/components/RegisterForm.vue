<template>
  <form @submit.prevent="registerHandler">
    <error v-if="error" :error="error"></error>

    <h1>Register</h1>

    <div class = "form-group">
      <label>First Name</label>
      <input type="text" class="form-control" v-model="first_name" placeholder="First Name"/>
    </div>

    <div class = "form-group">
      <label>Last Name</label>
      <input type="text" class="form-control" v-model="last_name" placeholder="Last Name"/>
    </div>

    <div class = "form-group">
      <label>Email</label>
      <input type="email" class="form-control" v-model="email" placeholder="Email"/>
    </div>

    <div class = "form-group">
      <label>Password</label>
      <input type="password" class="form-control" v-model="password" placeholder="Password"/>
    </div>

    <div class = "form-group">
      <label>Confirm Password</label>
      <input type="password" class="form-control" v-model="password_confirm" placeholder="Password"/>
    </div>

    <button class="btn-primary btn-block">Sign Up</button>
  </form>
</template>

<script>
import Error from '@/components/Error.vue'
import axios from 'axios'
export default {
  name: "RegisterForm",
  components:{
    Error
  },
  data() {
    return {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirm: '',
      error:''

    }
  },
  methods: {
    async registerHandler(){
      try {
        const response = await axios.post('register', {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          password_confirm: this.password_confirm

        });
        console.log(response);
        alert(response.data.message);
        this.$router.push('/');
      }catch(e){
      this.error ='Error occurred';
    }
    }
}}
</script>

<style scoped>

</style>