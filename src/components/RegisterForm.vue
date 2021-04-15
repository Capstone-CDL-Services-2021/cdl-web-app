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

<!-- Component is called when the register form is being called -->
<template>
  <!-- register form -->
  <form @submit.prevent="registerHandler">

    <error v-if="error" :error="error"></error>

    <!-- header for create new account -->
    <h1>Create New Account</h1>

    <!-- form group for First Name -->
    <div class="form-group">
      <label>First Name</label>
      <input type="text" class="form-control" v-model="first_name" placeholder="First Name"/>
    </div>

    <!-- form group for Last Name -->
    <div class="form-group">
      <label>Last Name</label>
      <input type="text" class="form-control" v-model="last_name" placeholder="Last Name"/>
    </div>

    <!-- form group for Email -->
    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" v-model="email" placeholder="Email"/>
    </div>

    <!-- form group for Password -->
    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" v-model="password" placeholder="Password"/>
    </div>

    <!-- form group for Confirm Password -->
    <div class="form-group">
      <label>Confirm Password</label>
      <input type="password" class="form-control" v-model="password_confirm" placeholder="Password"/>
    </div>

    <!-- button to Create New Account -->
    <button class="btn btn-dark btn-block">Create New Account</button>
  </form>
</template>

<script>

/**
 * import components, views, and dependencies
 */
import Error from '@/components/Error.vue'
import axios from 'axios'

/**
 * export components, views, and methods from the imports
 */
export default {
  name: "RegisterForm",
  components: {
    Error
  },

  /**
   * return data to declared and instantiated variables
   */
  data() {
    return {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirm: '',
      error: ''

    }
  },

  methods: {

    /**
     * registerHandler() - handles the register form and creates an account and stores the information into the database
     * @returns {Promise<void>}
     * returns nothing, returns to page and cancels whole modal event
     */
    async registerHandler() {
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
      } catch (e) {
        this.error = 'Error, invalid or missing fields';
      }
    }
  }
}
</script>

<!-- CSS Style Script -->
<style scoped>
</style>