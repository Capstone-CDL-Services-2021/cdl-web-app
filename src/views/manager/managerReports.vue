<template>
  <div>
    <manager-header/>
    <manager-navbar/>

    <b-jumbotron bg-variant="dark" border-variant="dark">
      <div>
        <b-jumbotron>
          <h1 style="text-align: center">Reports</h1>
          <div hidden> {{ loadAllProjects }}</div>
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
              <th>Send Invoice</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="project in ProjectList" :key="project.id">
              <td> {{ project.id }}</td>
              <td> {{ project.Type_Of_Service }}</td>
              <td> {{ project.Customer_Name }}</td>
              <td> {{ project.Customer_Email }}</td>
              <td> {{ project.Customer_Address }}</td>
              <td> {{ project.Date_Requested }}</td>
              <td> {{ project.date_completed }}</td>
              <td>
                <div v-if="project.Completed == 0"> No</div>
                <div v-if="project.Completed == 1"> Yes</div>
              </td>
              <td>
                <div v-if="project.invoice_paid == 0"> Pending Payment</div>
                <div v-if="project.invoice_paid == 1"> Payment Received</div>
              </td>
              <td>
                <div v-if="project.Completed == 1 && project.invoice_paid == 0">

                  <b-button variant="primary" v-b-modal.modal-test> Send Invoice</b-button>
                  <b-modal
                      id="modal-test"
                      ref="modal"
                      title="Invoice"
                  >
                    <p> <strong>CDL Services</strong> </p>
                    <b-form @submit.prevent="sendInvoice">
                      <b-form-group
                          label="Invoice Number:"
                          label-for="invoice_no"
                          label-cols-sm="4"
                          v-model="invoice_number"
                      >
                        <h5>{{ project.id }}</h5>
                      </b-form-group>

                      <b-form-group
                          label="Billed To:"
                          label-for="bill_to"
                          invalid-feedback="Customer Name Required"
                          label-cols-sm="4"
                      >
                        <b-form-input
                            id="bill_to"
                            placeholder="Enter Customer Full Name"
                            required
                            v-model="bill_to"
                        />
                      </b-form-group>

                      <b-form-group
                          label="Service Offered:"
                          label-for="service_offered"
                          invalid-feedback="Service Required"
                          label-cols-sm="4"

                      >
                        <b-form-input
                            id="service_offered"
                            placeholder="Enter Service Offered"
                            required
                            v-model="service_offered"/>
                      </b-form-group>

                      <b-form-group
                          label="Date Issued:"
                          label-for="issue_date"
                          invalid-feedback="Date Required"
                          label-cols-sm="4"
                      >
                        <b-form-input
                            id="issue_date"
                            type="date"
                            required
                            v-model="issue_date"
                        />
                      </b-form-group>

                      <b-form-group
                          label="Due Date:"
                          label-for="due_date"
                          invalid-feedback="Date Required"
                          label-cols-sm="4"
                      >
                        <b-form-input
                            id="due_date"
                            type="date"
                            required
                            v-model="due_date"/>
                      </b-form-group>

                      <b-form-group
                          label="Cost of Service:"
                          label-for="service_cost"
                          invalid-feedback="Service Cost Required"
                          label-cols-sm="4"
                      >
                        <b-form-input
                            id="service_cost"
                            type="number"
                            min="0"
                            required
                            v-model="service_cost"/>
                      </b-form-group>


                    </b-form>
                  </b-modal>

                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </b-jumbotron>
      </div>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

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
    redirect(id) {
      this.$router.push(id)
    },
    async sendInvoice(){
      try{
        await axios.post('sendInvoice',{
          invoice_number: this.form.invoice_number,
          email: this.form.email,
          bill_to: this.form.bill_to,
          service_offered: this.form.service_offered,
          due_date: this.form.due_date,
          service_cost:this.form.service_cost,
          issue_date:this.form.issue_date
        });
      }catch (e) {
        console.log(e)
      }
    }
  },
  data() {
    return {
      ProjectList: [],
      hidden: true,
      form:{
        invoice_number:'',
        service_cost:'',
        due_date:'',
        issue_date:'',
        service_offered:'',
        bill_to:''
      }
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