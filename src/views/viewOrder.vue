<template>
  <div>
    <!-- Displays the header and the Navigation bar by calling the components -->
    <cdl_header/>
    <navbar/>

    <!-- Used to encase everything and give background color -->
    <b-jumbotron bg-variant="dark" border-variant="dark">
      <div>

        <!-- Used to encase the table and have a white background -->
        <b-jumbotron>
          <h1 style="text-align: center">Order History</h1>

          <!-- Calls the printProjects function which comes from the backend-->
          <div hidden> {{ printProjects }}</div>

          <br><br>

          <div class="table-responsive-md">

            <!-- Creation of tables and all of its rows, headers and data -->
            <table class="minimalistBlack">
              <thead>
              <tr>
                <th>Order #</th>
                <th>Service</th>
                <th>Customer Email</th>
                <th>Customer Address</th>
                <th>Start Date</th>
                <th>Date Completed</th>
                <th>Completed</th>
                <th>Total Cost</th>
              </tr>
              </thead>

              <tbody>
              <!-- For loop that checks the projectList array and is used to print values from the database -->
              <tr v-for="project in ProjectList" :key="project.id">
                <td> {{ project.id }}</td>
                <td> {{ project.Type_Of_Service }}</td>
                <td> {{ project.Customer_Email }}</td>
                <td> {{ project.Customer_Address }}</td>
                <td> {{ project.Date_Requested }}</td>
                <td> {{ project.date_completed }}</td>
                <td>
                  <!-- Checks for 0's and 1's to change them accordingly -->
                  <div v-if="project.Completed == 0"> No</div>
                  <div v-if="project.Completed == 1"> Yes</div>
                </td>
                <td> ${{ project.total_cost }}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </b-jumbotron>
      </div>

      <!-- Used to get rid of whitespace at the bottom of the page -->
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </b-jumbotron>
  </div>
</template>

<script>
//All imports needed for webpage to work
import cdl_header from "@/components/cdl_header";
import navbar from "@/components/navbar";
import axios from "axios";
import {mapGetters} from "vuex";


export default {
  name: "managerProjects",

  //components called to be used
  components: {
    cdl_header,
    navbar
  },

  //Any data that is needed
  data() {
    return {
      ProjectList: [],
      hidden: true
    }
  },

  //Functions that are needed
  computed: {

    // calls mapGetters to get all users in the database
    ...
        mapGetters(['user']),

    /**
     * Used to print the projects while sending the email of the currently logged in user
     * to the backend for it to only print rows that contain that certain email
     * @returns {Promise<AxiosResponse<any>>}
     */
    printProjects() {
      // eslint-disable-next-line vue/no-async-in-computed-properties
      return (axios.post('printProjects', {email: this.user.email})).then(response => this.ProjectList = response.data)
    }
  }
}
</script>

<!-- CSS style Script -->
<style scoped>
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