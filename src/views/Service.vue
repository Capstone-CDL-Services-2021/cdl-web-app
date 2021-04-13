<template>
  <div>
    <div hidden>{{ loadServiceCard }}</div>
    <cdl_header/>
    <user-check/>
    <h1 style="text-decoration: underline; background-color: #343a40; color: white; padding: 2rem">Services!</h1>
    <div class="services" style="background-color: #343a40">
      <div class="row" style="padding-left: 4rem; margin-top: -1rem">
        <div v-for="card in serviceCardInfo" :key="card.id">
          <div class="col-sm-20" style="padding: 0px 10px 0px 10px">
            <div v-if="card.id % 3 === 0">
              <div class="col-sm-20" style="padding: 0 10px 20px 10px;">
                <service-card :card-img="card.imageUrl"
                              :card-title="card.title"
                              :card-desc="card.description"
                              :card-id="card.id"/>
              </div>
            </div>
          </div>
          <div class="col-sm-20" style="padding: 0px 10px 0px 10px">
            <div v-if="card.id % 3 === 1">
              <div class="col-sm-20" style="padding: 0 10px 20px 10px;">
                <service-card :card-img="card.imageUrl"
                              :card-title="card.title"
                              :card-desc="card.description"
                              :card-id="card.id"/>
              </div>
            </div>
          </div>
          <div class="col-sm-20" style="padding: 0px 10px 0px 10px">
            <div v-if="card.id % 3 === 2">
              <div class="col-sm-20" style="padding: 0 10px 20px 10px;">
                <service-card :card-img="card.imageUrl"
                              :card-title="card.title"
                              :card-desc="card.description"
                              :card-id="card.id"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ContactUs style="background-color: #343a40; color:white; padding-right:1rem; padding-bottom: 1rem"/>
  </div>
</template>

<script>
import cdl_header from "@/components/cdl_header";
import serviceCard from "@/components/serviceCard";
import ContactUs from "@/components/contactUs";
import axios from "axios";
import UserCheck from "@/components/userCheck";

export default {
  name: "Service",
  components: {
    UserCheck,
    ContactUs,
    cdl_header,
    serviceCard
  },
  computed: {
    loadServiceCard() {
      // eslint-disable-next-line vue/no-async-in-computed-properties
      return axios.get('getAllServiceCards')
          .then(response => this.serviceCardInfo = response.data)
    }
  },
  data() {
    return {
      serviceCardInfo: []
    }
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