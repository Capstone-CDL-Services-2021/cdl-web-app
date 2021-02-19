<template>
  <div class="column">
    <div class="row">
      <div class="col-sm-200">
        <img alt="CDL Services" width="150px" src="../assets/cdlservices.jpg" align="left" style="padding-left:20px" v-on:click="redirect('/')">
      </div>
      <div class="col-sm-20" style="padding-top:20px">
        <b-input-group size="xs">
          <b-form-input placeholder="Username"></b-form-input>
        </b-input-group>
        <b-input-group size="xs">
          <b-form-input type="password" placeholder="Password"></b-form-input>
          <b-button variant="primary">Login</b-button>
        </b-input-group>
        <a href="" v-on:click="redirect('/register')">Register</a>

      </div>
      <div class="col-sm">
        <!--ALEEEEEEEEE -->
        <p class="text-right" style="padding-right: 20px">Address <br> Phone number <br> M-F 10:00am - 9:00pm<br></p>
        <!--            <button class="testbutton" type="testbutton" id="testbutton">Book a Service</button>-->
        <div align="right" style="float: right">
          <a href="#" class="btn btn-white btn-animation-1" v-on:click="redirect('/book')">Request a Service</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cdl_header",
  data() {
    return {}
  },
  methods: {
    redirect(id) {
      this.$router.push(id)
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

.btn:link,
.btn:visited {
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  top: 0;
  left: 0;
  color: white;
  /*padding:20px 40px;*/
  border-radius: 100px;
  display: inline-block;
  transition: all .5s;
  font-family: "Corbel Light";
}

.btn-white {
  background: green;
  color: #000;
}

.btn:active {
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  transform: translateY(-1px);
}

.btn-bottom-animation-1 {
  animation: comeFromBottom 1s ease-out .8s;
}

.btn::after {
  content: "";
  text-decoration: none;
  text-transform: uppercase;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 100px;
  display: inline-block;
  z-index: -1;
  transition: all .5s;
}

.btn-white::after {
  background: green;
}

.btn-animation-1:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}

@keyframes comeFromBottom {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>