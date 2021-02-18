<template>
  <div>
    <!--column start-->
    <div class="column">
      <div class="row">
        <div class="col-sm">
          <img alt="CDL Services" width="150px" src="../assets/cdlservices.jpg" align="left" style="padding-left:20px">
        </div>
        <div class="col-sm-20" style="padding-top:20px">
          <b-input-group size="xs">
            <b-form-input placeholder="Username"></b-form-input>
          </b-input-group>
          <b-input-group size="xs">
            <b-form-input placeholder="Password"></b-form-input>
            <b-button variant="primary">Login</b-button>
          </b-input-group>

        </div>
        <div class="col-sm">
          <!--ALEEEEEEEEE -->
          <p class="text-right" style="padding-right: 20px">Address <br> Phone number <br> M-F 10:00am - 9:00pm<br>
            <button class="btn btn-primary" type="button">Book a Service</button>
          </p>
        </div>
      </div>
    </div>
    <!--column end-->

    <b-navbar class="navbar navbar-light" style="background-color: green;">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-button-group size="lg">
            <div class="buttonA">
              <div class="navbuttons">
                <a href="@" class="btn effect01" target="_blank"><span>Home</span></a>
              </div>
            </div>

            <div class="buttonA">
              <div class="navbuttons">
                <a href="@" class="btn effect01" target="_blank"><span>Services</span></a>
              </div>
            </div>

            <div class="buttonA">
              <div class="navbuttons">
                <a href="@" class="btn effect01" target="_blank"><span>Schedule</span></a>
              </div>
            </div>

            <div class="buttonA">
              <div class="navbuttons">
                <a href="@" class="btn effect01" target="_blank"><span>Testimonials</span></a>
              </div>
            </div>
          </b-button-group>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>


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
                  caption="NSFW Slide"
                  img-src="https://costumesanduglysweaters.com/wp-content/uploads/2019/10/Cosplayers-Jessica-Nigri.jpg"
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
export default {
  name: "Home"
}
</script>

<style scoped>
.nav-item.nav-item.nav-item a {
  color: white;
  padding: 20px;
  border: 3px solid white;
}


* {
  margin: 0;
  padding: 0;
}

html,
body {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
}

body {
  background: #FFF;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 400;
}

.buttonA {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  /*   padding: 2em 0em; */
}

.navbutton {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #FFF;
  padding: 40px 0px;
  width: 240px;
}

.btn {
  letter-spacing: 0.1em;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
/ / max-width: 120 px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
/ / width: 100 %;
  background-image: linear-gradient(white, green);


}

.btn:hover {
  text-decoration: none;
}

/*btn_background*/
.effect01 {
  color: #FFF;
  border: 2px solid #FFF;
  box-shadow: 0px 0px 0px 1px #000 inset;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease-in-out;
}

.effect01:hover {
  border: 4px solid #666;
  background-color: #FFF;
  box-shadow: 0px 0px 0px 4px #EEE inset;
}

/*btn_text*/
.effect01 span {
  transition: all 0.2s ease-out;
  z-index: 2;
}

.effect01:hover span {
  letter-spacing: 0.13em;
  color: #333;
}

/*highlight*/
.effect01:after {
  background: #FFF;
  border: 0px solid #000;
  content: "";
  height: 155px;
  left: -75px;
  opacity: .8;
  position: absolute;
  top: -50px;
  -webkit-transform: rotate(35deg);
  transform: rotate(35deg);
  width: 50px;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1); /*easeOutCirc*/
  z-index: 1;
}

.effect01:hover:after {
  background: #FFF;
  border: 20px solid #000;
  opacity: 0;
  left: 120%;
  -webkit-transform: rotate(40deg);
  transform: rotate(40deg);
}
</style>