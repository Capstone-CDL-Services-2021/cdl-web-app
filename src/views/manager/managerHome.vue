<template>
  <div>

    <manager-header/>
    <manager-navbar/>

    <b-jumbotron bg-variant="dark" text-variant="white" border-variant="dark">



      <h1>Manager Home Page</h1>
      <br><br>
      <div class="col">
        <b-calendar block locale="en-US" width="500px"></b-calendar>
      </div>
      <br><br>
      <div class="row">
        <h1 style="text-decoration: underline">Upcoming Projects and Due Dates</h1>
        <div hidden> {{ loadUpcomingProjects}} </div>
        <table class="minimalistBlack">
          <thead>
          <tr>
            <th>Service</th>
            <th>Date requested</th>
            <th>Address</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="project in projectList" :key="project.id">
            <td>{{ project.Type_Of_Service }}</td>
            <td>{{ project.Date_Requested }}</td>
            <td> {{ project.Customer_Address }}</td>

          </tr>
          </tbody>
        </table>
      </div>


      <br/>
      <br/>
      <b-button variant="outline-primary" class="button">
        <b-icon icon="tools"></b-icon> Settings
      </b-button>
      <b-button variant="primary" class="button">Edit</b-button>
    </b-jumbotron>

  </div>
</template>


<script>
import managerNavbar from "@/components/managerNavbar";
import managerHeader from "@/components/managerHeader";
import axios from "axios";

export default {
  name: "Home",
  components: {
    managerHeader,
    managerNavbar
  },
  data(){
    return {
      projectList: []
    }
  },
  methods: {

  },
  computed: {
    loadUpcomingProjects() {
      // eslint-disable-next-line vue/no-async-in-computed-properties
      return (axios.post('getUpcomingProjects')).then(response => this.projectList = response.data)
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

body{
  background:lightblue;
  text-align:center;
  box-sizing:border-box;
  font-family:"Lato",Sans-serif;
  /*position:relative;*/
}

.button {
  margin: 10px
}
table.minimalistBlack {
  border: 0px solid #000000;
  width: 100%;
  text-align: center;
  border-collapse: collapse;
}
table.minimalistBlack td, table.minimalistBlack th {
  border: 1px solid #000000;
  padding: 4px 10px;
}
table.minimalistBlack tbody td {
  font-size: 13px;
}
table.minimalistBlack thead {
  background: #CFCFCF;
  background: -moz-linear-gradient(top, #dbdbdb 0%, #d3d3d3 66%, #CFCFCF 100%);
  background: -webkit-linear-gradient(top, #dbdbdb 0%, #d3d3d3 66%, #CFCFCF 100%);
  background: linear-gradient(to bottom, #dbdbdb 0%, #d3d3d3 66%, #CFCFCF 100%);
  border-bottom: 3px solid #000000;
}
table.minimalistBlack thead th {
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  text-align: left;
}
table.minimalistBlack tfoot {
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  border-top: 3px solid #000000;
}
table.minimalistBlack tfoot td {
  font-size: 14px;
}
</style>