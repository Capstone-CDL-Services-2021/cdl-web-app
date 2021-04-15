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

    <!-- Displays the header and the Navigation bar -->
    <cdl_header/>
    <navbar/>

    <!-- Background encases everything inside it -->
    <b-jumbotron bg-variant="dark" text-variant="white" border-variant="dark">
      <div>
        <h1 style="text-decoration: underline">Testimonials</h1>

        <!-- Button that if clicked will display the form to submit a new testimonial -->
        <b-button v-on:click='hidden=!hidden'>Submit a Testimonial</b-button>
        <TestimonialForm v-if="!hidden"></TestimonialForm>

        <div class="row" style="margin-top: 2rem">

          <!-- Method that will load all testimonials by calling it from the backend  -->
          <div hidden> {{ loadTestimonials }}</div>

          <!-- Will do a loop for each card in the testimonial list and display accordingly -->
          <div v-for="card in testimonialsList" :key="card.id">

            <!-- Columns used for the testimonial card to fill -->
            <div class="col-sm-20" style="padding: 0px 10px 0px 10px">
              <div v-if="card.id % 3 === 0 && card.toggle === 1">
                <div class="col-sm-20" style="padding: 0 10px 20px 10px;">
                  <testimonial-card :card-title="card.title"
                                    :card-testimonial="card.testimonial"
                                    :card-rating="card.rating"
                                    :card-name="card.name"
                                    :card-id="card.id"
                                    :card-toggle="card.toggle"/>
                </div>
              </div>
            </div>

            <div class="col-sm-20" style="padding: 0px 10px 0px 10px">
              <div v-if="card.id % 3 === 1 && card.toggle === 1">
                <div class="col-sm-20" style="padding: 0 10px 20px 10px;">
                  <testimonial-card :card-title="card.title"
                                    :card-testimonial="card.testimonial"
                                    :card-rating="card.rating"
                                    :card-name="card.name"
                                    :card-id="card.id"
                                    :card-toggle="card.toggle"/>
                </div>
              </div>
            </div>

            <div class="col-sm-20" style="padding: 0px 10px 0px 10px">
              <div v-if="card.id % 3 === 2 && card.toggle === 1">
                <div class="col-sm-20" style="padding: 0 10px 20px 10px;">
                  <testimonial-card :card-title="card.title"
                                    :card-testimonial="card.testimonial"
                                    :card-rating="card.rating"
                                    :card-name="card.name"
                                    :card-id="card.id"
                                    :card-toggle="card.toggle"/>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Checks to see if current user logged in is manager or not displays the ContactUs button using the ContactUs component-->
        <div v-if="user">
          <div v-if="user.email !== 'manager@cdlservices.com'">
            <ContactUs/>
          </div>
        </div>

        <div v-else>
          <ContactUs/>
        </div>
      </div>

      <!-- Used this to push the jumbotron to fill the page so there wouldn't be white space -->
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </b-jumbotron>
  </div>
</template>

<script>
/**
 * import components, views and dependencies
 */
import cdl_header from "@/components/cdl_header";
import navbar from "@/components/navbar";
import {mapGetters} from "vuex";
import ContactUs from "@/components/contactUs";
import TestimonialForm from "@/components/TestimonialForm";
import axios from "axios";
import testimonialCard from "@/components/testimonialCard";

/**
 * export components, views and methods from the imports
 */
export default {
  name: "Testimonials",
  components: {
    ContactUs,
    cdl_header,
    TestimonialForm,
    testimonialCard,
    navbar
  },

  //Any methods needed
  methods: {

    /**
     * this method is to redirect based on the id parameter input
     * @param id a String value that is a path
     */
    redirect(id) {
      this.$router.push(id)
    }
  },

  /**
   * return data to declared and instantiated variables
   */
  data() {
    return {
      testimonialsList: [],
      hidden: true
    }
  },

  computed: {

    /**
     * maps if user is found
     */
    ...mapGetters(['user']),

    /**
     * Used to get all testimonials from the backend
     * @returns {Promise<AxiosResponse<any>>}
     */
    loadTestimonials() {
      // eslint-disable-next-line vue/no-async-in-computed-properties
      return (axios.post('getAllTestimonials')).then(response => this.testimonialsList = response.data)
    }
  }
}
</script>

<!-- CSS Style Script -->
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

h1 {
  color: white;
}

.col-sm-20 {
  color: black;
}

</style>