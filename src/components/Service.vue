<template>
  <div>
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
          <p class="text-right" style="padding-right: 20px">Address <br> Phone number <br> M-F 10:00am - 9:00pm<br>
            <button class="btn btn-primary" type="button">Book a Service</button>
          </p>
        </div>
      </div>
    </div>

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

    <div class="services">
      <div class="row">
        <div class="col-sm-20" style="padding: 0px 10px 0px 10px">
          One of three columns
          <div>
            <b-card no-body class="overflow-hidden" style="max-width: 570px">
              <b-row no-gutters>
                <b-col>
                  <b-card-img
                      src="https://scontent.fyyc3-1.fna.fbcdn.net/v/t1.0-9/21191913_1311368228989588_7540623568967383363_n.jpg?_nc_cat=107&ccb=3&_nc_sid=8bfeb9&_nc_ohc=BuNqzHlIEWgAX9ef3KP&_nc_oc=AQlM096aw8Drq9jFAP7YP81ccpFTjzGxF_WTQyaZyoOjZAtvWBi_dboMG3AumWr30ak&_nc_ht=scontent.fyyc3-1.fna&oh=e8f14ed4a3ae97d1845a0065f520e683&oe=60534F6F"
                      alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col>
                  <b-card-body title="Service Name: ________1">
                    <b-card-text>
                      Service Desc: _______ <br/>
                      Rating: (4.5/5)
                    </b-card-text>
                    <b-button href="#" variant="primary">Request</b-button>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>

          <br/>

          <div>
            <b-card no-body class="overflow-hidden" style="max-width: 570px;">
              <b-row no-gutters>
                <b-col>
                  <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col>
                  <b-card-body title="Service Name: ____2">
                    <b-card-text>
                      This is a wider card with supporting text as a natural lead-in to additional content.
                      This content is a little bit longer.
                    </b-card-text>
                    <b-button href="#" variant="primary">Request</b-button>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>

          <br/>

          <div>
            <b-card no-body class="overflow-hidden" style="max-width: 570px;">
              <b-row no-gutters>
                <b-col>
                  <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col>
                  <b-card-body title="Service Name: ____3">
                    <b-card-text>
                      This is a wider card with supporting text as a natural lead-in to additional content.
                      This content is a little bit longer.
                    </b-card-text>
                    <b-button href="#" variant="primary">Request</b-button>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </div>

        <div class="col-sm-20" style="padding: 0px 10px 0px 10px">
          Two of three columns
          <div>
            <b-card no-body class="overflow-hidden" style="max-width: 570px">
              <b-row no-gutters>
                <b-col>
                  <b-card-img
                      src="https://scontent.fyyc3-1.fna.fbcdn.net/v/t1.0-9/21191913_1311368228989588_7540623568967383363_n.jpg?_nc_cat=107&ccb=3&_nc_sid=8bfeb9&_nc_ohc=BuNqzHlIEWgAX9ef3KP&_nc_oc=AQlM096aw8Drq9jFAP7YP81ccpFTjzGxF_WTQyaZyoOjZAtvWBi_dboMG3AumWr30ak&_nc_ht=scontent.fyyc3-1.fna&oh=e8f14ed4a3ae97d1845a0065f520e683&oe=60534F6F"
                      alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col>
                  <b-card-body title="Service Name: ________4">
                    <b-card-text>
                      Service Desc: _______ <br/>
                      Rating: (4.5/5)
                    </b-card-text>
                    <b-button href="#" variant="primary">Request</b-button>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>

          <br/>

          <div>
            <b-card no-body class="overflow-hidden" style="max-width: 570px;">
              <b-row no-gutters>
                <b-col>
                  <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col>
                  <b-card-body title="Service Name: ____5">
                    <b-card-text>
                      This is a wider card with supporting text as a natural lead-in to additional content.
                      This content is a little bit longer.
                    </b-card-text>
                    <b-button href="#" variant="primary">Request</b-button>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>

          <br/>

          <div>
            <b-card no-body class="overflow-hidden" style="max-width: 570px;">
              <b-row no-gutters>
                <b-col>
                  <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col>
                  <b-card-body title="Service Name: ____6">
                    <b-card-text>
                      This is a wider card with supporting text as a natural lead-in to additional content.
                      This content is a little bit longer.
                    </b-card-text>
                    <b-button href="#" variant="primary">Request</b-button>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </div>

        <div class="col-sm-20" style="padding: 0px 10px 0px 10px">
          Three of three columns
          <div>
            <b-card no-body class="overflow-hidden" style="max-width: 570px">
              <b-row no-gutters>
                <b-col>
                  <b-card-img
                      src="https://scontent.fyyc3-1.fna.fbcdn.net/v/t1.0-9/21191913_1311368228989588_7540623568967383363_n.jpg?_nc_cat=107&ccb=3&_nc_sid=8bfeb9&_nc_ohc=BuNqzHlIEWgAX9ef3KP&_nc_oc=AQlM096aw8Drq9jFAP7YP81ccpFTjzGxF_WTQyaZyoOjZAtvWBi_dboMG3AumWr30ak&_nc_ht=scontent.fyyc3-1.fna&oh=e8f14ed4a3ae97d1845a0065f520e683&oe=60534F6F"
                      alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col>
                  <b-card-body title="Service Name: ________7">
                    <b-card-text>
                      Service Desc: _______ <br/>
                      Rating: (4.5/5)
                    </b-card-text>
                    <b-button href="#" variant="primary">Request</b-button>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>

          <br/>

          <div>
            <b-card no-body class="overflow-hidden" style="max-width: 570px;">
              <b-row no-gutters>
                <b-col>
                  <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col>
                  <b-card-body title="Service Name: ____8">
                    <b-card-text>
                      This is a wider card with supporting text as a natural lead-in to additional content.
                      This content is a little bit longer.
                    </b-card-text>
                    <b-button href="#" variant="primary">Request</b-button>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>

          <br/>

          <div>
            <b-card no-body class="overflow-hidden" style="max-width: 570px;">
              <b-row no-gutters>
                <b-col>
                  <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col>
                  <b-card-body title="Service Name: ____9">
                    <b-card-text>
                      This is a wider card with supporting text as a natural lead-in to additional content.
                      This content is a little bit longer.
                    </b-card-text>
                    <b-button href="#" variant="primary">Request</b-button>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Service"
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
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
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

.services {
  padding-left: 50px;
  padding-right: 50px;
}


</style>