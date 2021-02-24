<template>
  <div class="auth-wrapper">
    <div class="auth-inner">
  <form @submit.prevent="resetpassHandler">
    <h3>Reset Password</h3>
    <div class="form-group">
      <label>Password</label>
      <input type="password" v-model="password" class="form-control" placeholder="Password"/>
    </div>
    <div class="form-group">
      <label>Password Confirm</label>
      <input type="password" v-model="password_confirm" class="form-control" placeholder="Password Confirm">
    </div>

    <button class="btn-primary btn-block">Submit</button>
  </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Reset",
  data(){
    return{
      password: '',
      password_confirm:''
  }
  },
  methods: {
    async resetpassHandler(){
      const response = await axios.post('reset',{
        password: this.password,
        password_confirm: this.password_confirm,
        token: this.$route.params.token
      });
      console.log(response);
      this.$router.push('/');
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