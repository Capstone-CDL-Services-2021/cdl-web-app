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

<template>
  <div>

    <!-- Displays the header and the Navigation bar-->
    <cdl_header/>
    <navbar/>

    <!-- Background that encases everything inside it  -->
    <b-jumbotron bg-variant="dark" text-variant="white" border-variant="dark">

      <!-- Header that has a underline -->
      <h1 style="text-decoration: underline">Contact Us!</h1>

      <template>
        <div>
          <div class="col-sm-20">

            <b-form @submit.prevent="onSubmit">
              <!--Displays alert if message was successful or not-->
              <div v-if="message" class="alert alert-success" role="alert">
                {{ message }}
              </div>
              <error v-if="error" :error="error"></error>

              <!-- Form Groups and form inputs that create the form needed for customers to fill out-->
              <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                <b-form-input
                    id="input-1"
                    v-model="form.name"
                    placeholder="Enter Full Name"
                    required></b-form-input>
              </b-form-group>

              <!-- Form Groups and form inputs that create the form needed for customers to fill out-->
              <b-form-group
                  id="input-group-1"
                  label="Email address:"
                  label-for="input-1"
                  description="We'll never share your email with anyone else.">

                <!-- Form Groups and form inputs that create the form needed for customers to fill out-->
                <b-form-input
                    id="input-2"
                    v-model="form.email"
                    type="email"
                    placeholder="Enter email"
                    required></b-form-input>
              </b-form-group>


              <!-- Form Groups and form inputs that create the form needed for customers to fill out-->
              <b-form-group
                  id="input-group-2"
                  label="Question"
                  label-for="input-2"
                  description="Please put your Question Below!">
              </b-form-group>

              <!-- Text area that allows customers to fill out their inquiry -->
              <b-form-textarea
                  id="input-3"
                  v-model="form.question"
                  placeholder="Enter Question Here!"
                  rows="4"
                  max-rows="8"
                  required></b-form-textarea>
              <br/>

              <!--Submit button that sends the email-->
              <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
          </div>
        </div>
      </template>

      <!-- Used this to push the jumbotron to fill the page so there wouldn't be white space -->
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </b-jumbotron>
  </div>
</template>


<script>
/**
 * import components, views and dependencies
 */
import navbar from "@/components/navbar";
import cdl_header from "@/components/cdl_header";
import axios from "axios";

/**
 * export components, views and methods from the imports
 */
export default {
  name: "Service",
  components: {
    navbar,
    cdl_header,
    Error
  },

  /**
   * return data to declared and instantiated variables
   */
  data() {
    return {
      message: '',
      error: '',
      form: {
        name: '',
        email: '',
        question: '',
      },
    }
  },

  //Methods needed
  methods: {

    /**
     * onSubmit is used when the form "submit" button is being clicked it will then call this method which will
     * take in the values for name, email and the question to be used my mailcatcher to send the email
     * after which will display alert indicating whether or not the email was sent successfully or not
     * @returns {Promise<void>}
     */
    async onSubmit() {
      try {
        await axios.post('contactUs', {
          name: this.form.name,
          email: this.form.email,
          question: this.form.question
        });
        this.message = 'Your question has been sent'
        this.error = ''
      } catch (e) {
        this.error = 'Error occurred'
        this.message = '';
      }
    },

    /**
     * this method is to redirect based on the id parameter input
     * @param id a String value that is a path
     */
    redirect(id) {
      this.$router.push(id)
    }
  },
}
</script>

<!--CSS Style Script-->
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

#input-1 {
  width: 25%;
  margin-left: auto;
  margin-right: auto;
}

#input-2 {
  width: 25%;
  margin-left: auto;
  margin-right: auto;
}

#input-3 {
  width: 25%;
  margin-left: auto;
  margin-right: auto;
}
</style>