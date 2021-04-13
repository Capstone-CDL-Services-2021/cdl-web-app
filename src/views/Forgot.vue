<template>
  <div class="auth-wrapper">
    <div class="auth-inner">
  <form @submit.prevent="forgotpassHandler">
    <div v-if="message" class="alert alert-success" role="alert">
      {{message}}
    </div>
    <error v-if="error" :error="error"></error>

    <h2>Change Password</h2>
    <div class="form-group">
      <label>Email</label>
      <input type="email" v-model="email" class="form-control" placeholder="enter your email">
    </div>

    <button class="btn btn-primary btn-block">Submit</button>
  </form>
    </div>
  </div>
</template>

<script>
import Error from '@/components/Error'
import axios from 'axios'
export default {
  name: "Forgot",
  components:{
    Error
  },
  data(){
    return{
      email:'',
      message:'',
      error: ''
    }
  },
  methods: {
    async forgotpassHandler(){
      try{
      const response = await axios.post('forgot',{
        email: this.email
      });
      this.message= 'The email was sent!';
      this.error='';
      console.log(response);
    }catch(e){
      this.error= 'Error occurred';
      this.message ='';}
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.auth-wrapper{
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  padding-top: 50px;
}

.auth-inner{
  width: 450px;
  margin: auto;
  background: aqua;
  padding: 40px 55px 40px 55px;
  border-radius: 15px;
  transition: all .3s;
}
</style>