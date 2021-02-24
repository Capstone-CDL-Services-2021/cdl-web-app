<template>
  <div class="auth-wrapper">
    <div class="auth-inner">
  <form @submit.prevent="forgotpassHandler">
    <h2>Forgot Password</h2>
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
import axios from 'axios'
export default {
  name: "Forgot",
  data(){
    return{
      email:''
    }
  },
  methods: {
    async forgotpassHandler(){
      const response = await axios.post('forgot',{
        email: this.email
      });

      console.log(response);
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