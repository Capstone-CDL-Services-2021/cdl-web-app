<template>
  <div>
    <!-- Header and Navigation bar display-->
    <cdl_header/>
    <navbar/>

    <!-- Used to encase everything and give background-->
    <b-jumbotron bg-variant="dark" border-variant="dark" class="colorChange">
      <h2>Book Service Page</h2>

      <!-- Container to center everything inside-->
      <b-container class="row1">

        <b-row>

          <b-col>

            <template>

              <div>

                <b-form @submit.prevent="serviceRequestHandler">

                  <!-- Checks to see if form being sent was successful alert will show accordingly-->
                  <div v-if="message" class="alert alert-success" role="alert">
                    {{ message }}
                  </div>
                  <error v-if="error" :error="error"></error>

                  <!-- Form Groups and form inputs that create the form needed for customers to fill out-->
                  <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                    <b-form-input
                        id="input-2"
                        v-model="form.name"
                        placeholder="Enter Full Name"
                        required
                    ></b-form-input>
                  </b-form-group>

                  <!-- Form Groups and form inputs that create the form needed for customers to fill out-->
                  <b-form-group
                      id="input-group-1"
                      label="Email address:"
                      label-for="input-1"
                      description="We'll never share your email with anyone else."
                  >
                    <b-form-input
                        id="input-1"
                        v-model="form.email"
                        type="email"
                        placeholder="Enter email"
                        required
                    ></b-form-input>
                  </b-form-group>

                  <!-- Form Groups and form inputs that create the form needed for customers to fill out-->
                  <b-form-group id="input-group-3" label="Type of Service: " label-for="input-3">
                    <b-form-select
                        id="input-3"
                        v-model="form.service"
                        :options="services"
                        required
                    ></b-form-select>
                  </b-form-group>

                  <!-- Form Groups and form inputs that create the form needed for customers to fill out-->
                  <b-form-group
                      id="input-group-4"
                      label="Start date of service:"
                      label-for="input-1"
                  >
                    <b-form-input
                        id="input-4"
                        v-model="form.date"
                        type="date"
                        required
                    ></b-form-input>
                  </b-form-group>

                  <!-- Form Groups and form inputs that create the form needed for customers to fill out-->
                  <b-form-group
                      id="input-group-5"
                      label="Street Address:"
                      label-for="input-5"
                  >
                    <b-form-input
                        id="input-5"
                        v-model="form.streetAddress"
                        type="address"
                        placeholder="Enter Street Address"
                        required
                    ></b-form-input>
                  </b-form-group>
                  <!-- Submit Button -->
                  <b-button type="submit" variant="primary">Submit</b-button>
                </b-form>
              </div>
            </template>
          </b-col>
        </b-row>
      </b-container>
      <br/>

      <!-- Calls Contact us Component-->
      <contact-us/>

      <!-- Used to fill empty white spaces-->
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </b-jumbotron>
  </div>
</template>

<script>
//All imports needed to run webpage
import cdl_header from "@/components/cdl_header";
import contactUs from "@/components/contactUs";
import navbar from "@/components/navbar";
import axios from "axios";

export default {
  name: "BookPage",

  //components called to be used
  components: {
    navbar,
    cdl_header,
    Error,
    contactUs
  },

  //Data that needs to be used
  data() {
    return {
      message: '',
      error: '',
      form: {
        name: '',
        email: '',
        service: null,
        date: '',
        streetAddress: ''
      },
      services: [{text: 'Select One', value: null}, 'Snow Shoveling', 'Taking out the trash',
        'Home Renovation', 'Window Cleaning', 'Roof & Siding repair', 'Car detailing', 'Gutter Guard Installation', 'Christmas lights install or Removal', 'Eavestough Cleaning & Repair', 'House Cleaning & Painting',
        'Trimming', 'Furniture Assembly', 'Demolition', 'Pruning', 'Junk removal', 'Strong, rock garden, bark install', 'Topping', 'Mow Lawn, Top Soil & fertilizers'],

    }
  },

  //Any methods that are needed
  methods: {
    async serviceRequestHandler() {
      try {
        await axios.post('bookService', {
          name: this.form.name,
          email: this.form.email,
          service: this.form.service,
          date: this.form.date,
          streetAddress: this.form.streetAddress
        });
        this.message = 'Your request has been sent!'
        this.error = '';
      } catch (e) {
        this.error = 'Error occurred';
        this.message = '';
      }
    },
    redirect(id) {
      this.$router.push(id)
    }
  },

  //Computes function
  computed: {
    readonly() {
      return this.state === 'readonly'
    }
  },
}
</script>

<!-- CSS style script -->
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

.btn:link,
.btn:visited {
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  top: 0;
  left: 0;
  color: white;
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

.colorChange {
  color: white;
}
</style>