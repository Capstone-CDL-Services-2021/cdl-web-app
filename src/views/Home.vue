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

.btn:link,
.btn:visited{
  text-decoration: none;
  text-transform:uppercase;
  position:relative;
  top:0;
  left:0;
  color: white;
  /*padding:20px 40px;*/
  border-radius:100px;
  display:inline-block;
  transition: all .5s;
  font-family: "Corbel Light";
}

.btn-white{
  background:green;
  color:#000;
}

.btn:active{
  box-shadow:0px 5px 10px rgba(0,0,0,0.2);
  transform:translateY(-1px);
}

.btn-bottom-animation-1{
  animation:comeFromBottom 1s ease-out .8s;
}

.btn::after{
  content:"";
  text-decoration: none;
  text-transform:uppercase;
  position:absolute;
  width:100%;
  height:100%;
  top:0;
  left:0;
  border-radius:100px;
  display:inline-block;
  z-index:-1;
  transition: all .5s;
}

.btn-white::after {
  background: green;
}

.btn-animation-1:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}

@keyframes comeFromBottom{
  0%{
    opacity:0;
    transform:translateY(40px);
  }
  100%{
    opacity:1;
    transform:translateY(0);
  }
}



</style>