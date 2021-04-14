<template>
  <div>

    <!-- Calls CDL_header component -->
    <cdl_header/>
    <!-- calls the user check component, that checks if the user currently logged in is the manager or not -->
    <userCheck/>

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
              fade
              indicators
              img-width="1024"
              img-height="480"
          >
            <!-- creates the carousel slides and assigns the image -->
            <b-carousel-slide
                img-src="https://images.unsplash.com/photo-1483385573908-0a2108937c4a"
            ></b-carousel-slide>

            <b-carousel-slide
                img-src="https://s3.amazonaws.com/greenpal-production/posts/header_images/000/000/139/original/Image_1.jpg?1570548614"
            ></b-carousel-slide>

            <b-carousel-slide
                img-src="http://diggerodell.com/wp-content/uploads/2017/08/AdobeStock_102051247-1080x675.jpeg"
            ></b-carousel-slide>

            <b-carousel-slide
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
//All imports needed to work the web page
import navbar from "@/components/navbar"
import cdl_header from "@/components/cdl_header"
import {mapGetters} from 'vuex'
import ContactUs from "@/components/contactUs";
import userCheck from "@/components/userCheck";


export default {
  name: "Home",

  //Components needed to be called later
  components: {
    userCheck,
    ContactUs,
    cdl_header,
    navbar
  },

  //data to be used later
  data() {
    return {
      message: ''
    }
  },

  //methods that can be called and used
  methods: {
    redirect(id) {
      this.$router.push(id)
    },
    block() {
      localStorage.removeItem('token');
      this.$store.dispatch('user', null);
      //this.$router.push('/');
      this.$forceUpdate();
      alert("Your account has been suspended. Please contact Administrator.");
    }
  },

  //any computed values needed
  computed: {
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

</style>