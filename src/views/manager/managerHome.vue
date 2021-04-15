<template>
  <div>
    <!-- Displays the Manager header and navigation bar by calling the components -->
    <manager-header/>
    <manager-navbar/>

    <!-- Used to encase everything and give the dark background color -->
    <b-jumbotron bg-variant="dark" text-variant="white" border-variant="dark">

      <div class="row">
        <h1 style="text-decoration: underline">Uncompleted and upcoming projects</h1>

        <!-- Calls the loadUpcomingProjects function that calls from the backend -->
        <div hidden> {{ loadUpcomingProjects}} </div>

        <!-- Creation of tables and all of its rows, headers and data -->
        <table class="minimalistBlack">
          <thead>
          <tr>
            <th>Service</th>
            <th>Date requested</th>
            <th>Address</th>
          </tr>
          </thead>
          <tbody>

          <!-- For loop that checks the projectList array and is used to print values from the database -->
          <tr v-for="project in projectList" :key="project.id">
            <td>{{ project.Type_Of_Service }}</td>
            <td>{{ project.Date_Requested }}</td>
            <td> {{ project.Customer_Address }}</td>
          </tr>
          </tbody>
        </table>
      </div>

      <!-- Used to get rid of whitespace at the bottom of the page -->
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </b-jumbotron>
  </div>
</template>


<script>
//All imports needed for webpage to function
import managerNavbar from "@/components/managerNavbar";
import managerHeader from "@/components/managerHeader";
import axios from "axios";

export default {
  name: "Home",

  //components called to be used
  components: {
    managerHeader,
    managerNavbar
  },

  //Any data that may be needed
  data(){
    return {
      projectList: []
    }
  },

  //functions to be used
  computed: {

    /**
     * when called will then load all of the upcoming projects where the date requested is greater than
     * the current date. Which will then be used to print to a table on the home page
     *
     * @returns {Promise<AxiosResponse<any>>}
     */
    loadUpcomingProjects() {
      // eslint-disable-next-line vue/no-async-in-computed-properties
      return (axios.post('getUpcomingProjects')).then(response => this.projectList = response.data)
    }
  }
}
</script>

<!-- CSS style script -->
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
  background: #CFCFCF;
  color: #000000;
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