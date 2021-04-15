<template>
  <!-- Used to encase everything and give the dark background color-->
  <b-jumbotron bg-variant="dark" border-variant="dark">
    <div class="container-sm">
      <div class="auth-wrapper">
        <div class="auth-inner">
<!--          On Submit, calls the resetpassHandler method-->
          <form @submit.prevent="resetpassHandler">
            <h3>Reset Password</h3>
<!--            Password Input-->
            <div class="form-group">
              <label>Password</label>
              <input type="password" v-model="password" class="form-control" placeholder="Password"/>
            </div>
<!--            Confirm Password -->
            <div class="form-group">
              <label>Password Confirm</label>
              <input type="password" v-model="password_confirm" class="form-control" placeholder="Password Confirm">
            </div>

            <button class="btn btn-dark btn-block">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </b-jumbotron>
</template>

<script>
import axios from "axios";

export default {
  name: "Reset",
  data() {
    return {
      password: '',
      password_confirm: ''
    }
  },
  methods: {
    /**
     * resetpassHandler - Post method call to the backend to begin the reset password process
     * @returns {Promise<void>} - Returns the response from the backend
     * @data password - The new password
     * @data password_confirm - The new password confirmation (Comparison)
     * @data token - The token from the resetpassword handler - Compoarison check
     */
    async resetpassHandler() {
      const response = await axios.post('reset', {
        password: this.password,
        password_confirm: this.password_confirm,
        token: this.$route.params.token
      });
      console.log(response);
      this.$router.push('/'); // Push back to the homepage after password reset
    }
  }
}
</script>

<!-- CSS style Script -->
<style scoped>
* {
  box-sizing: border-box;
}

.auth-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  padding-top: 50px;
}

.auth-inner {
  margin: auto;
  background: green;
  padding: 40px 55px 40px 55px;
  border-radius: 15px;
  transition: all .3s;
  color: white;
}
</style>