<template>
  <div>

    <manager-header/>
    <manager-navbar/>

    <div class="services" style="margin-left: 5rem">

      <br/>
      <!--      <b-button variant="primary" v-on:click="redirect('/managerCardEdit')">Add</b-button>-->
      <b-jumbotron bg-variant="dark" text-variant="black" border-variant="dark">
        <b-form style="width: 300px; margin: auto" @reset="onReset">
          <b-form-group
              id="input-group-1"
              label="Service Name:"
              label-for="input-1"
              style="color:white"
          >
            <b-form-input
                id="input-1"
                v-model="service.name"
                type="text"
                placeholder="Enter Service Name"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group
              id="input-group-2"
              label="Service Description:"
              label-for="input-2"
          >
            <b-form-textarea
                id="input-2"
                v-model="service.desc"
                type="text"
                placeholder="Enter Service Description"
                required
            ></b-form-textarea>
          </b-form-group>

          <b-form-group
              id="input-group-3"
              label="Service Image:"
              label-for="input-3"
              placeholder="Enter image link"
          >
            <b-form-input
                id="input-3"
                v-model="service.img"
            ></b-form-input>
          </b-form-group>

          <b-button class="spacing"  v-b-modal.accept variant="primary">Add</b-button>
          <b-button class="spacing" type="reset" variant="danger">Reset</b-button>
          <b-button class="spacing" variant="secondary" v-on:click="redirect('managerHome')">Back</b-button>

          <b-modal id="accept" size="sm" title="Service" ok-only>
            <p>Service has been Added</p>
          </b-modal>

          <div class="row" style="margin-top: 2rem">
            <div v-for="service in services"
                 :key="service.name">
              <div class="col-sm-20" style="padding: 0px 10px 0px 10px">

                <manager-service-card :card-img="service.image"
                                      :card-title="service.name"
                                      :card-desc="service.description"
                                      :card-id="service.cardId"
                >
                </manager-service-card>
              </div>
            </div>

          </div>



        </b-form>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
import managerNavbar from "@/components/managerNavbar";
import managerHeader from "@/components/managerHeader";
import managerServiceCard from "@/components/managerServiceCard";
import store from "@/store";
import {mapGetters} from "vuex";


export default {
  name: "Service",
  components: {
    managerNavbar,
    managerHeader,
    managerServiceCard,
  },
  data() {
    return {
      service: {},
      services: store.state.services,
    }
  },
  computed: {
    ...mapGetters({
      services: "getServices"
    })
  },
  methods: {
    redirect(id) {
      this.$router.push(id)
    },
    addService() {
      let s = this.service;
      this.$store.dispatch('addService', s);
    },
    removeService(cardId) {
      let index = parseInt(cardId) -1;
      this.$store.dispatch('removeService', index);
    },
    onReset(event) {
      event.preventDefault()
      this.service.name = ''
      this.service.desc = ''
      this.service.img = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
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