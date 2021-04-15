<!--Component is called when a manager wants to add a project-->
<template>
  <div class="container-sm">
<!--    Calls ProjectHandler when submitting this form-->
    <form @submit.prevent="ProjectHandler">

      <br/>

      <div class = "form-group">
        <label>Type of Service</label>
        <input type="text" class="form-control" v-model="Type_Of_Service" placeholder="Type of service"/>
      </div>

      <div class = "form-group">
        <label>Customer Name</label>
        <input type="text" class="form-control" v-model="Customer_Name" placeholder="Customer full name"/>
      </div>

      <div class = "form-group">
        <label>Customer Email</label>
        <input type="email" class="form-control" v-model="Customer_Email" placeholder="customer email"/>
      </div>

      <div class = "form-group">
        <label>Customer Address</label>
        <input type="text" class="form-control" v-model="Customer_Address" placeholder="customer address"/>
      </div>

      <div class = "form-group">
        <label>Date Requested</label>
        <input type="date" class="form-control" v-model="Date_Requested" placeholder="Date service requested for"/>
      </div>

      <div class = "form-group">
        <label>Date Completed</label>
        <input type="date" class="form-control"  v-model="date_completed" placeholder="Date service was completed"/>
      </div>

      <div class = "form-group">
        <label>Total Cost</label>
        <input type="number" step=".01" min="0" class="form-control" v-model="total_cost" placeholder="Total Cost of Project"/>
      </div>

      <div class = "form-group">
        <label>Invoice Paid</label>
        <input type="checkbox" class="form-control" v-model="invoice_paid" placeholder="Invoice paid for"/>
      </div>

      <div class = "form-group">
        <label>Completed</label>
        <input type="checkbox" class="form-control" v-model="Completed" />
      </div>

      <button class="btn-primary btn-block">Confirm</button>
    </form>
  </div>
</template>

<script>
/**
 * import components, views and dependencies
 */
import axios from 'axios'
/**
 * export components, views and methods from the imports
 */
export default {
  name: "ProjectForm",
  components:{
  },
  /**
   * return data to declared and instantiated variables
   * @returns {{Customer_Name: string, total_cost: string, Date_Requested: string, Type_Of_Service: string, Completed: number, date_completed: string, invoice_paid: number, Customer_Email: string, Customer_Address: string}}
   */
  data() {
    return {
      Type_Of_Service: '',
      Customer_Name: '',
      Customer_Email: '',
      Customer_Address: '',
      Date_Requested: '',
      date_completed: '',
      total_cost: '',
      invoice_paid: 0,
      Completed:0

    }
  },
  methods: {
    /**
     * This is called whenever the manager submits the data for the project. It will add the project to the projects table.
     *
     * 
     */
    async ProjectHandler(){
      try {
        const response = await axios.post('addProject', {
          Type_Of_Service: this.Type_Of_Service,
          Customer_Name: this.Customer_Name,
          Customer_Email: this.Customer_Email,
          Customer_Address: this.Customer_Address,
          Date_Requested: this.Date_Requested,
          date_completed: this.date_completed,
          total_cost: this.total_cost,
          invoice_paid: this.invoice_paid,
          Completed: this.Completed

        });
        console.log(response);
        alert("Project successfully added");
        setTimeout(location.reload.bind(location), 0);
      }catch(e){
        this.error ='Error occurred';
      }
    }
  }}
</script>

<style scoped>
.container-sm {
  max-width: 400px;
}

</style>