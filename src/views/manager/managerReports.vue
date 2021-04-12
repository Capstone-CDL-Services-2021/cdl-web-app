<template>
  <div>
    <manager-header/>
    <manager-navbar/>

    <b-jumbotron bg-variant="dark" border-variant="dark">
      <div>
        <b-jumbotron>
          <h1 style="text-align: center">Reports</h1>
          <div hidden> {{ loadAllProjects }} </div>
          <br><br>

          <table class="minimalistBlack">
            <thead>
            <tr>
              <th>Order #</th>
              <th>Service Offered</th>
              <th>Customer Name</th>
              <th>Customer Email</th>
              <th>Customer Address</th>
              <th>Start Date</th>
              <th>Date Completed</th>
              <th>Completed</th>
              <th>Payment Status</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="project in ProjectList" :key="project.id">
              <td> {{ project.id }} </td>
              <td> {{ project.Type_Of_Service }}</td>
              <td> {{ project.Customer_Name }}</td>
              <td> {{ project.Customer_Email }}</td>
              <td> {{ project.Customer_Address }}</td>
              <td> {{ project.Date_Requested }}</td>
              <td> {{ project.date_completed}}</td>
              <td>
                <div v-if="project.Completed == 0"> No</div>
                <div v-if="project.Completed == 1"> Yes</div>
              </td>
              <td>
                <div v-if="project.invoice_paid == 0"> Pending Payment</div>
                <div v-if="project.invoice_paid == 1"> Payment Received</div>
              </td>
            </tr>
            </tbody>
          </table>
        </b-jumbotron>
      </div>
    </b-jumbotron>


  </div>
</template>

<script>
import managerNavbar from "@/components/managerNavbar";
import managerHeader from "@/components/managerHeader";
import axios from "axios";


export default {
  name: "managerProjects",
  components: {
    managerHeader,
    managerNavbar
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
    loadAllProjects() {
      // eslint-disable-next-line vue/no-async-in-computed-properties
      return (axios.post('getAllProjects')).then(response => this.ProjectList = response.data)
    },
    printProjects() {
      // eslint-disable-next-line vue/no-async-in-computed-properties
      return (axios.post('printProjects')).then(response => this.ProjectList = response.data)
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