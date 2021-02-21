<template>
  <div>

    <manager-header/>
    <manager-navbar/>

    <b-jumbotron bg-variant="dark" text-variant="white" border-variant="dark">
      <div class="column">
        <div class="row">
          <div class="col">
            <h1>Manager Home Page</h1>
            <b-calendar block locale="en-US"></b-calendar>
          </div>
          <div class="col">
            <h1 style="text-decoration: underline">Upcoming Projects and Due Dates</h1>
            Dates will be filled in here
          </div>
          <b-icon icon="three-dots-vertical" font-scale="2"></b-icon>
        </div>
      </div>
      <br/>
      <br/>
      <b-button variant="outline-primary">
        <b-icon icon="tools"></b-icon> Settings
      </b-button>
      <b-button variant="primary">Edit</b-button>
    </b-jumbotron>

  </div>
</template>


<script>
import managerNavbar from "@/components/managerNavbar";
import managerHeader from "@/components/managerHeader";

export default {
  name: "Home",
  components: {
    managerHeader,
    managerNavbar
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