<template>
  <div>

    <cdl_header/>
    <navbar/>

    <b-jumbotron bg-variant="dark" text-variant="white" border-variant="dark">
      <div class="column">
        <div class="row">
          <div class="col">
            <h1>Welcome to CDL Services</h1>
            I am a handyman that does oddjobs for an affordable price!!!!<br>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum."
          </div>
          <div class="col">

            <b-carousel
                id="carousel-fade"
                style="text-shadow: 0px 0px 2px #000"
                fade
                indicators
                img-width="1024"
                img-height="480"
            >
              <b-carousel-slide
                  caption="Johnny slide"
                  img-src="https://img.mensxp.com/media/content/2020/Jul/image-1-credit-Johnny-Sins-_5f083d57f09b0.png"
              ></b-carousel-slide>
              <b-carousel-slide
                  caption="Bob slide"
                  img-src="https://scontent.fyyc3-1.fna.fbcdn.net/v/t1.0-9/33643_1624307928196_5104357_n.jpg?_nc_cat=109&ccb=3&_nc_sid=de6eea&_nc_ohc=edywfk2sdUYAX_biTMi&_nc_ht=scontent.fyyc3-1.fna&oh=e3ee530fbf2a792fa7f4f00817379763&oe=60538248"
              ></b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </div>
    </b-jumbotron>
  </div>
</template>


<script>
import navbar from "@/components/navbar";
import cdl_header from "@/components/cdl_header";

export default {
  name: "Home",
  components: {
    cdl_header,
    navbar
  },
  data(){
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
.nav-item.nav-item.nav-item a {
  color: white;
  padding: 20px;
  border: 3px solid white;
}

body{
  background:lightblue;
  text-align:center;
  box-sizing:border-box;
  font-family:"Lato",Sans-serif;
  /*position:relative;*/
}

</style>