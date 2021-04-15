<template>

  <!-- Used to encase everything and give background color -->
  <b-jumbotron bg-variant="dark" border-variant="dark">

    <!-- Div classes to make the container for the form to be inside -->
    <div class="container-sm">
      <div class="auth-wrapper">
        <div class="auth-inner">

          <!-- Creates the form for the user -->
          <form @submit.prevent="forgotpassHandler">

            <!-- This div is used to display any alert messages dependent whether it was successful or there was an error-->
            <div v-if="message" class="alert alert-success" role="alert">
              {{ message }}
            </div>
            <error v-if="error" :error="error"></error>

            <!-- Label and header for the form -->
            <h2>Change Password</h2>
            <div class="form-group">
              <label>Email</label>
              <!-- Input for the email address of the user whom forgot their password -->
              <input type="email" v-model="email" class="form-control" placeholder="enter your email">
            </div>

            <button class="btn btn-dark btn-block">Submit</button>
          </form>
        </div>
      </div>
    </div>

    <!-- Used to fill empty white spaces-->
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br><br>
  </b-jumbotron>

</template>

<script>
//All imports needed
import Error from '@/components/Error'
import axios from 'axios'

export default {
  name: "Forgot",

  //Any components needed
  components: {
    Error
  },

  //Data that is needed
  data() {
    return {
      email: '',
      message: '',
      error: ''
    }
  },

  //All methods that will be used
  methods: {

    /**
     * method is when the submit button is clicked, this will then take the email of the
     * user input and send an email to change their password. If there are any errors an alert
     * message will display if not a success message will display instead
     *
     * @returns {Promise<void>}
     */
    async forgotpassHandler() {
      try {
        const response = await axios.post('forgot', {
          email: this.email
        });
        this.message = 'The email was sent!';
        this.error = '';
        console.log(response);
      } catch (e) {
        this.error = 'Error occurred';
        this.message = '';
      }
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