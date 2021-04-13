<template>
  <div>
    <cdl_header/>
    <navbar/>

    <b-jumbotron bg-variant="dark" border-variant="dark">
      <div>
        <b-jumbotron>
          <h1 style="text-align: center">Order History</h1>
<!--          <div hidden> {{ loadAllProjects }} </div>-->
          <div hidden> {{ printProjects }}</div>
          <br><br>

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
            <tr v-for="project in ProjectList" :key="project.id">
              <td> {{ project.id }} </td>
              <td> {{ project.Type_Of_Service }}</td>
              <td> {{ project.Customer_Email }}</td>
              <td> {{ project.Customer_Address }}</td>
              <td> {{ project.Date_Requested }}</td>
              <td> {{ project.date_completed}}</td>
              <td>
                <div v-if="project.Completed == 0"> No</div>
                <div v-if="project.Completed == 1"> Yes</div>
              </td>
              <td> ${{ project.total_cost }}</td>
            </tr>
            </tbody>
          </table>
        </b-jumbotron>
      </div>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

    </b-jumbotron>
  </div>
</template>

<script>

import cdl_header from "@/components/cdl_header";
import navbar from "@/components/navbar";
import axios from "axios";
import {mapGetters} from "vuex";



export default {
  name: "managerProjects",
  components: {
    cdl_header,
    navbar
  },
  methods: {
  },
  data() {
    return {
      ProjectList: [],
      hidden: true
    }
  },
  computed: {
    ...
        mapGetters(['user']),
    loadAllProjects() {
      // eslint-disable-next-line vue/no-async-in-computed-properties
      return (axios.post('getAllProjects')).then(response => this.ProjectList = response.data)
    },
    printProjects() {
      // eslint-disable-next-line vue/no-async-in-computed-properties
      return (axios.post('printProjects', {email: this.user.email})).then(response => this.ProjectList = response.data)
    }
  }
}

</script>

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