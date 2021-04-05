<template>
  <div>

    <cdl_header/>
    <userCheck/>

    <div style="padding:30px">
      <h1 style="text-decoration: underline">Testimonials</h1>
      <div class="row" style="margin-top: 2rem">
        <div hidden> {{ loadTestimonials }} </div>
<!--        <table>-->
<!--          <thead>-->
<!--          <tr>-->
<!--            <th>Service provided</th>-->
<!--            <th>Testimonial</th>-->
<!--            <th>Rating</th>-->
<!--            <th>Name</th>-->
<!--          </tr>-->
<!--          </thead>-->
<!--          <tbody>-->
<!--          <tr v-for="testimonial in testimonialsList" :key="testimonial.id">-->
<!--            <td>{{ testimonial.title }}</td>-->
<!--            <td> {{ testimonial.testimonial}}</td>-->
<!--            <td> {{testimonial.rating}}</td>-->
<!--            <td> {{testimonial.name}}</td>-->
<!--          </tr>-->
<!--          </tbody>-->
<!--        </table>-->

        <div v-for="card in testimonialsList" :key="card.id">
          <div class="col-sm-20" style="padding: 0px 10px 0px 10px">
            <div v-if="card.id % 3 === 0">
              <div class="col-sm-20" style="padding: 0 10px 20px 10px;">
                <manager-testimonial-card :card-title="card.title"
                                  :card-testimonial="card.testimonial"
                                  :card-rating="card.rating"
                                  :card-clientname="card.name"
                                  :card-id="card.id"
                                  :toggle="card.toggle"/>
              </div>
            </div>
          </div>
          <div class="col-sm-20" style="padding: 0px 10px 0px 10px">
            <div v-if="card.id % 3 === 1">
              <div class="col-sm-20" style="padding: 0 10px 20px 10px;">
                <manager-testimonial-card :card-title="card.title"
                                  :card-testimonial="card.testimonial"
                                  :card-rating="card.rating"
                                  :client-name="card.name"
                                  :card-id="card.id"
                                  :toggle="card.toggle"/>
              </div>
            </div>
          </div>
          <div class="col-sm-20" style="padding: 0px 10px 0px 10px">
            <div v-if="card.id % 3 === 2">
              <div class="col-sm-20" style="padding: 0 10px 20px 10px;">
                <manager-testimonial-card :card-title="card.title"
                                  :card-testimonial="card.testimonial"
                                  :card-rating="card.rating"
                                  :card-clientname="card.name"
                                  :card-id="card.id"
                                  :toggle="card.toggle"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cdl_header from "@/components/cdl_header";
import {mapGetters} from "vuex";
import UserCheck from "@/components/userCheck";
import axios from "axios";
import managerTestimonialCard from "@/components/managerTestimonialCard";


export default {
  name: "Testimonials",
  components: {
    UserCheck,
    cdl_header,
    managerTestimonialCard
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
      return (axios.post('getAllTestimonials')).then(response => this.testimonialsList = response.data).then(response => console.log(response))
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