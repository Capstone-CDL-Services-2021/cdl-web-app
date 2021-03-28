<template>

  <div>
    <cdl_header/>
    <div v-if="user"><div v-if="user.email == 'manager@cdlservices.com'">{{ redirect('/managerHome')}}</div></div>
    <h3 v-if="user">
      Hello, {{ user.first_name }} {{ user.last_name }}
    </h3>
    <div v-if="error" class="alert alert-danger" role="alert">
      {{ error }}
    </div>
    <navbar/>

    <b-jumbotron bg-variant="dark" text-variant="white" border-variant="dark" size="auto">
      <h1>Welcome to CDL Services</h1>
      I am a handyman that does any commercial and residential job for an affordable price!!!!<br/>
      Services include: Eavestrough cleaning & repair, window cleaning, roof & siding repair, gutter guard
      installation
      House renovation, Car detail, furniture assembling, house cleaning and painting, lawn mowing, make firewood,
      Top soil, fertilizing the soiling, and any other handyman work. <br/>Go to services to see more info!

      <b-row>
        <b-col></b-col>
        <b-col>
          <b-carousel
              id="carousel-fade"
              fade
              indicators
              img-width="1024"
              img-height="480"
          >
            <b-carousel-slide
                img-src="https://images.unsplash.com/photo-1483385573908-0a2108937c4a"
            ></b-carousel-slide>
            <b-carousel-slide

                img-src="https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.0-9/21106325_1311368295656248_5714666004206838660_n.jpg?_nc_cat=110&ccb=3&_nc_sid=8bfeb9&_nc_ohc=qzV-kDur4rcAX9UDhZX&_nc_ht=scontent.fyyc2-1.fna&oh=85d3a4c4ae6aa32df76986f3d01f8e6b&oe=6059DC77"
            ></b-carousel-slide>
            <b-carousel-slide

                img-src="https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.0-9/10696191_597175513742200_6232360445896381313_n.jpg?_nc_cat=108&ccb=3&_nc_sid=8bfeb9&_nc_ohc=dl0NMKO2IDQAX91Y78h&_nc_ht=scontent.fyyc2-1.fna&oh=a14ee56aa163f4adae847dc6afb653eb&oe=605744BA"
            ></b-carousel-slide>
            <b-carousel-slide

                img-src="https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.0-9/20881889_1299645000161911_4346000721402873656_n.jpg?_nc_cat=105&ccb=3&_nc_sid=8bfeb9&_nc_ohc=qVjmZleJRo8AX9eJppB&_nc_ht=scontent.fyyc2-1.fna&oh=6ff07e2ca19e2d3aca161a4a503ef71f&oe=605A4607"
            ></b-carousel-slide>
          </b-carousel>
        </b-col>
        <b-col></b-col>
      </b-row>
      <br/>
      <contact-us/>
    </b-jumbotron>
  </div>


</template>

<script>
import Navbar from "@/components/navbar";
import Cdl_header from "@/components/cdl_header";
import ContactUs from "@/components/contactUs";



export default {
  name: "viewOrder",
  components: {
    ContactUs,
    // eslint-disable-next-line vue/no-unused-components
    Cdl_header,
    Navbar
  }
}
</script>

<style scoped>

</style>
