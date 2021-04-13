<template>
  <div>

    <cdl_header/>
    <userCheck/>
    <b-jumbotron bg-variant="dark" text-variant="white" border-variant="dark">
      <div style="padding:30px">
        <h1 style="text-decoration: underline">Testimonials</h1>
        <b-button v-on:click='hidden=!hidden'>Submit a Testimonial</b-button>
        <TestimonialForm v-if="!hidden"></TestimonialForm>
        <div class="row" style="margin-top: 2rem">
          <div class="col-sm-20" style="padding: 0px 10px 0px 10px">
          </div>

          <div hidden> {{ loadTestimonials }}</div>

          <div v-for="card in testimonialsList" :key="card.id">
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
        <div v-if="user">
          <div v-if="user.email !== 'manager@cdlservices.com'">
            <ContactUs/>
          </div>
        </div>
        <div v-else>
          <ContactUs/>
        </div>
      </div>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

    </b-jumbotron>
  </div>
</template>

<script>
import cdl_header from "@/components/cdl_header";
import {mapGetters} from "vuex";
import ContactUs from "@/components/contactUs";
import TestimonialForm from "@/components/TestimonialForm";
import axios from "axios";
import testimonialCard from "@/components/testimonialCard";


export default {
  name: "Testimonials",
  components: {
    ContactUs,
    cdl_header,
    TestimonialForm,
    testimonialCard
  },
  methods: {
    redirect(id) {
      this.$router.push(id)
    }
  },
  data() {
    return {
      testimonialsList: [],
      hidden: true
    }
  },
  computed: {
    ...mapGetters(['user']),
    loadTestimonials() {
      // eslint-disable-next-line vue/no-async-in-computed-properties
      return (axios.post('getAllTestimonials')).then(response => this.testimonialsList = response.data)
    }
  }
}

</script>

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


</style>