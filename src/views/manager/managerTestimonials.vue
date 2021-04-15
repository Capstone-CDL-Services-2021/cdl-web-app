<template>
  <div>
    <!--    manager header-->
    <manager-header/>
    <!--    manager navbar-->
    <manager-navbar/>
    <!--jumbotron containing content-->
    <b-jumbotron bg-variant="dark" border-variant="dark">
      <div style="padding:30px">
        <h1 style="text-decoration: underline">Testimonials</h1>
        <div class="row" style="margin-top: 2rem">
          <!--          function that loads all testimonials onto the page-->
          <div hidden> {{ loadTestimonials }}</div>
          <!--          for loop that iterates and creates cards for each testimonial-->
          <div v-for="card in testimonialsList" :key="card.id">
            <div class="col-sm-20" style="padding: 0px 10px 0px 10px">
              <!--              if card-id modulo 3 = 0, add to first column-->
              <div v-if="card.id % 3 === 0">
                <div class="col-sm-20" style="padding: 0 10px 20px 10px;">
                  <!--                  creates card instance-->
                  <manager-testimonial-card :card-title="card.title"
                                            :card-testimonial="card.testimonial"
                                            :card-rating="card.rating"
                                            :card-name="card.name"
                                            :card-id="card.id"
                                            :toggle="card.toggle"/>
                </div>
              </div>
            </div>
            <div class="col-sm-20" style="padding: 0px 10px 0px 10px">
              <!--              if card-id modulo 3 = 1, add to second column-->
              <div v-if="card.id % 3 === 1">
                <div class="col-sm-20" style="padding: 0 10px 20px 10px;">
                  <!--                  creates card instance-->
                  <manager-testimonial-card :card-title="card.title"
                                            :card-testimonial="card.testimonial"
                                            :card-rating="card.rating"
                                            :card-name="card.name"
                                            :card-id="card.id"
                                            :toggle="card.toggle"/>
                </div>
              </div>
            </div>
            <div class="col-sm-20" style="padding: 0px 10px 0px 10px">
              <!--              if card-id modulo 3 = 2, add to third column-->
              <div v-if="card.id % 3 === 2">
                <div class="col-sm-20" style="padding: 0 10px 20px 10px;">
                  <!--                  creates card instance-->
                  <manager-testimonial-card :card-title="card.title"
                                            :card-testimonial="card.testimonial"
                                            :card-rating="card.rating"
                                            :card-name="card.name"
                                            :card-id="card.id"
                                            :toggle="card.toggle"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

    </b-jumbotron>
  </div>
</template>

<script>
/**
 * import components, views, and dependencies
 */
import managerHeader from "@/components/managerHeader";
import {mapGetters} from "vuex";
import managerNavbar from "@/components/managerNavbar";
import axios from "axios";
import managerTestimonialCard from "@/components/managerTestimonialCard";

/**
 * export components, views, and methods from the imports
 */
export default {
  name: "Testimonials",
  components: {
    managerHeader,
    managerNavbar,
    managerTestimonialCard
  },
  /**
   * data() - returns the testimonials from the database, formatted into an array list
   * @returns {{testimonialsList: [], hidden: boolean}}
   */
  data() {
    return {
      testimonialsList: [],
      hidden: true
    }
  },
  computed: {

    ...mapGetters(['user']),
    /**
     * loadTestimonials() - loads the testimonials from the mySQL database
     * @returns {Promise<AxiosResponse<any>>}
     * returns the testimonials into an arraylist to be read
     */
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

h1 {
  color: white;
}

</style>