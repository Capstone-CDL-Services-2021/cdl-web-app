<template>
  <div>

    <manager-header/>
    <manager-navbar/>

    <b-jumbotron bg-variant="dark" text-variant="white" border-variant="dark">
      <div class="column">
        <div class="row">
          <div class="col">
            <h1>Manager Home Page</h1>
          </div>
          <div class="col">
          </div>
        </div>
      </div>
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