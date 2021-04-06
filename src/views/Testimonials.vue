<template>
  <div>

    <cdl_header/>
    <userCheck/>

    <div style="padding:30px">
      <h1 style="text-decoration: underline">Testimonials</h1>
      <b-button v-on:click='hidden=!hidden'>Submit a Testimonial</b-button>
      <TestimonialForm v-if="!hidden"></TestimonialForm>
      <div class="row" style="margin-top: 2rem">
        <div class="col-sm-20" style="padding: 0px 10px 0px 10px">

        </div>
        <div hidden> {{ loadTestimonials }} </div>

        <table>
          <thead>
          <tr>
            <th>Service provided</th>
            <th>Testimonial</th>
            <th>Rating</th>
            <th>Name</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="testimonial in testimonialsList" :key="testimonial.id">
            <td>{{ testimonial.title }}</td>
            <td> {{ testimonial.testimonial}}</td>
            <td> {{testimonial.rating}}</td>
            <td> {{testimonial.name}}</td>
          </tr>
          </tbody>
        </table>

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
  </div>
</template>

<script>
import cdl_header from "@/components/cdl_header";
import {mapGetters} from "vuex";
import UserCheck from "@/components/userCheck";
import ContactUs from "@/components/contactUs";
import TestimonialForm from "@/components/TestimonialForm";
import axios from "axios";


export default {
  name: "Testimonials",
  components: {
    ContactUs,
    UserCheck,
    cdl_header,
    TestimonialForm
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

    loadTestimonials(){
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