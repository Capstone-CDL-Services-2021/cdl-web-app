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

    <!-- Calls CDL_header component -->
    <cdl_header/>

    <!-- This checks to see if current user is logged in, and if the user is NOT blocked from logging in-->
    <h3 v-if="user && user.blocked === 0">
      Hello, {{ user.first_name }} {{ user.last_name }}
    </h3>
    <h3 v-if="user && user.blocked === 1">
      {{ block() }}
    </h3>

    <!-- Displays alert messages for any errors-->
    <div v-if="error" class="alert alert-danger" role="alert">
      {{ error }}
    </div>

    <!-- Calls the navigation bar component-->
    <navbar/>

    <!-- Used to encase everything and give the dark background color-->
    <b-jumbotron bg-variant="dark" text-variant="white" border-variant="dark" size="auto">
      <h1>Welcome to CDL Services</h1>
      I am a handyman that does any commercial and residential job for an affordable price!!!!<br/>
      Services include: Eavestrough cleaning & repair, window cleaning, roof & siding repair, gutter guard
      installation
      House renovation, Car detail, furniture assembling, house cleaning and painting, lawn mowing, make firewood,
      Top soil, fertilizing the soiling, and any other handyman work. <br/>Go to services to see more info!

      <!-- Creating of rows and the columns -->
      <b-row>

        <!--Empty column to use the second one to be in the middle-->
        <b-col></b-col>
        <b-col>
          <!-- Making of the carousel -->
          <b-carousel

              id="carousel-fade"
              no-animation
              indicators
              img-width=1024
              img-height=480
          >
            <!-- creates the carousel slides and assigns the image -->
            <b-carousel-slide
                class="img-size"
                img-src="http://diggerodell.com/wp-content/uploads/2017/08/AdobeStock_102051247-1080x675.jpeg"
            ></b-carousel-slide>

            <!-- creates the carousel slides and assigns the image -->
            <b-carousel-slide
                class="img-size"
                img-src="https://inoutcarwash.com/wp-content/uploads/2018/07/car-detailing-1080x675.jpg"
            ></b-carousel-slide>

            <!-- creates the carousel slides and assigns the image -->
            <b-carousel-slide
                class="img-size"
                img-src="https://landscapingcalgary.org/wp-content/uploads/2018/10/IMG_0722.jpg"
            ></b-carousel-slide>

            <!-- creates the carousel slides and assigns the image -->
            <b-carousel-slide
                class="img-size"
                img-src="https://images.immediate.co.uk/production/volatile/sites/10/2018/02/875d867d-e22c-4041-92c0-fc6862263aee-956c556.jpg?quality=90&resize=768%2C574"
            ></b-carousel-slide>
          </b-carousel>
        </b-col>
        <b-col></b-col>
      </b-row>
      <br/>

      <!-- Contact Us Component called to display the button -->
      <contact-us/>

      <!-- Used to get rid of whitespace at the bottom of the page -->
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

    </b-jumbotron>
  </div>
</template>

<script>
/**
 * import components, views and dependencies
 */
import navbar from "@/components/navbar"
import cdl_header from "@/components/cdl_header"
import {mapGetters} from 'vuex'
import ContactUs from "@/components/contactUs";


/**
 * export components, views and methods from the imports
 */
export default {
  name: "Home",
  components: {
    ContactUs,
    cdl_header,
    navbar
  },

  /**
   * return data to declared and instantiated variables
   */
  data() {
    return {
      message: ''
    }
  },

  methods: {

    /**
     * this method is to redirect based on the id parameter input
     * @param id a String value that is a path
     */
    redirect(id) {
      this.$router.push(id)
    },

    /**
     * this is called when the current account that is trying to
     * login or access the website is blocked which then it will
     * display a message.
     */
    block() {
      localStorage.removeItem('token');
      this.$store.dispatch('user', null);
      this.$forceUpdate();
      alert("Your account has been suspended. Please contact Administrator.");
    }
  },

  //any computed values needed
  computed: {
    /**
     * maps if user is found
     */
    ...mapGetters(['user']),
  }
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

.img-size{
  width: 100%;
  height: 400px;
  max-height: 400px;
}
</style>