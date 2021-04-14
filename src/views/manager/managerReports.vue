<template>
  <div>
    <!-- Displays the Manager header and navigation bar -->
    <manager-header/>
    <manager-navbar/>

    <!-- Used to encase everything and give the dark background color-->
    <b-jumbotron bg-variant="dark" border-variant="dark">

      <div>

        <!-- Holds the reports table, giving the white background-->
        <b-jumbotron>
          <h1 style="text-align: center">Reports</h1>

          <!-- Message that is displayed if action that is being sent is successful (send invoice)-->
          <div v-if="message" class="alert alert-success" role="alert">
            {{ message }}
          </div>
          <error v-if="error" :error="error"></error>

          <!-- Loads projects table by calling loadAllProjects function -->
          <div hidden> {{ loadAllProjects }}</div>
          <br><br>

          <!-- Creation of tables and all of its rows, headers and data -->
          <div class="table-responsive-md">
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
                <th>Cost</th>
                <th>Completed</th>
                <th>Payment Status</th>
                <th>Send Invoice</th>
                <th>Toggle Payment Status</th>

              </tr>
              </thead>
              <tbody>
              <!-- For loop that checks the projectList array and is used to print values from the database -->
              <tr v-for="project in ProjectList" :key="project.id">
                <td> {{ project.id }}</td>
                <td> {{ project.Type_Of_Service }}</td>
                <td> {{ project.Customer_Name }}</td>
                <td> {{ project.Customer_Email }}</td>
                <td> {{ project.Customer_Address }}</td>
                <td> {{ project.Date_Requested }}</td>
                <td> {{ project.date_completed }}</td>
                <td> ${{ project.total_cost }}</td>
                <td>
                  <!-- Checks for 0's and 1's to change them accordingly -->
                  <div v-if="project.Completed == 0"> No</div>
                  <div v-if="project.Completed == 1"> Yes</div>
                </td>
                <td>
                  <!-- Checks for 0's and 1's to change them accordingly -->
                  <div v-if="project.invoice_paid == 0"> Pending Payment</div>
                  <div v-if="project.invoice_paid == 1"> Payment Received</div>
                </td>
                <td>
                  <!-- Used to check if project is complete and if the invoice hasn't been paid a send invoice button will appear -->
                  <div v-if="project.Completed == 1 && project.invoice_paid == 0">
                    <b-button variant="primary"
                              @click="sendInvoice(project.id,project.Customer_Email,project.Customer_Name,project.Type_Of_Service,project.date_completed,project.total_cost)"
                    > Send Invoice
                    </b-button>
                  </div>
                </td>
                <td>
                  <!-- Used to check if project is complete and if the invoice hasn't been paid a  button will appear to change the payment status -->
                  <div v-if="project.Completed == 1 && project.invoice_paid == 0">
                    <b-button variant="primary" v-on:click="alterInvoiceStatus(project.id)">
                      Change Payment status
                    </b-button>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </b-jumbotron>
      </div>

      <!-- Used to get rid of whitespace at the bottom of the page -->
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </b-jumbotron>
  </div>
</template>

<script>
//All imports needed for webpage to work
import managerNavbar from "@/components/managerNavbar";
import managerHeader from "@/components/managerHeader";
import axios from "axios";


export default {
  name: "managerProjects",

  //components called to be used
  components: {
    managerHeader,
    managerNavbar,
    Error
  },

  //Any methods that are needed
  methods: {
    redirect(id) {
      this.$router.push(id)
    },
    async sendInvoice(index, email, billto, serviceoffered, datecompleted, cost) {
      let date1 = new Date(datecompleted);
      date1.setDate(date1.getDate() + 5);
      try {

        const response = await axios.post('sendInvoice', {

          invoice_number: index,
          email: email,
          bill_to: billto,
          service_offered: serviceoffered,
          due_date: date1.toISOString().slice(0, 10),
          service_cost: cost,
          issue_date: datecompleted
        });
        console.log(response)
        this.message = 'Invoice Sent'
        this.error = ''
      } catch (e) {
        this.error = 'Error occurred'
        this.message = '';
      }
    },
    async alterInvoiceStatus(id) {
      try {
        const response = await axios.post('alterInvoiceStatus', {
              id: id
            }
        );
        console.log(response);
        alert("Payment recevied")
        ;
        setTimeout(location.reload.bind(location), 0);
      } catch
          (e) {
        this.error = 'Error occurred';
      }
    }
  },

  //Data needed for the webpage to use
  data() {
    return {
      ProjectList: [],
      hidden: true,
      message: '',
      error: '',
      form: {
        invoice_number: '',
        service_cost: '',
        due_date: '',
        issue_date: '',
        service_offered: '',
        bill_to: '',
        email: ''
      }
    }
  },

  //Computed functions
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

<!-- CSS style Script -->
<style scoped>
.container-sm {
  max-width: 400px;
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