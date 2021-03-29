<template>
  <div>

    <manager-header/>
    <manager-navbar/>
    <div hidden>{{loadServiceCard}}</div>
    <div class="services">
      {{loadServiceCard()}}
      <b-jumbotron bg-variant="dark" text-variant="black" border-variant="dark" fluid>
        <b-button v-on:click="redirect('managerAddService')">Add a New Service Card</b-button>

        <div class="row" style="margin-top: 2rem;">
          <div v-for="card in serviceCardInfo" :key="card.id">
            <div class="col-sm-20" style="padding: 0 10px 20px 10px;">
              <manager-service-card :card-img="card.imageUrl"
                                    :card-title="card.title"
                                    :card-desc="card.description"
                                    :card-id="card.id"/>
            </div>
          </div>
        </div>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
import managerNavbar from "@/components/managerNavbar";
import managerHeader from "@/components/managerHeader";
import managerServiceCard from "@/components/managerServiceCard";
import axios from "axios";


export default {
  name: "Service",
  components: {
    managerNavbar,
    managerHeader,
     managerServiceCard
  },
  data(){
    return{
      serviceCardInfo: []
    }
  },
  data(){
    return{
      serviceCardInfo: []
    }
  },
  computed: {
    loadServiceCard() {
      // eslint-disable-next-line vue/no-async-in-computed-properties
      return axios.get('getAllServiceCards')
          .then(response => this.serviceCardInfo = response.data)
    }
  },
  methods: {
    loadServiceCard(){
      axios.get('getAllServiceCards')
          .then(response => this.serviceCardInfo = response.data)
    },
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