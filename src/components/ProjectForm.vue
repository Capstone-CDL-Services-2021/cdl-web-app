<template>
  <form @submit.prevent="ProjectHandler">
    <h1>Add a Project</h1>

    <div class = "form-group">
      <label>Type of Service</label>
      <input type="text" class="form-control" v-model="Type_Of_Service" placeholder="Type of service"/>
    </div>

    <div class = "form-group">
      <label>Customer name</label>
      <input type="text" class="form-control" v-model="Customer_Name" placeholder="Customer full name"/>
    </div>

    <div class = "form-group">
      <label>Customer email</label>
      <input type="text" class="form-control" v-model="Customer_Email" placeholder="customer email"/>
    </div>

    <div class = "form-group">
      <label>customer address</label>
      <input type="text" class="form-control" v-model="Customer_Address" placeholder="customer address"/>
    </div>

    <div class = "form-group">
      <label>Date requested</label>
      <input type="date" class="form-control" v-model="Date_Requested" placeholder="Date service requested for"/>
    </div>

    <div class = "form-group">
      <label>Completed</label>
      <input type="int" class="form-control" v-model="Completed" placeholder="Is project complete? (1=yes, 0=no)"/>
    </div>

    <button class="btn-primary btn-block">confirm</button>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  name: "ProjectForm",
  components:{
  },
  data() {
    return {
      Type_Of_Service: '',
      Customer_Name: '',
      Customer_Email: '',
      Customer_Address: '',
      Date_Requested: '',
      Completed:''

    }
  },
  methods: {
    async ProjectHandler(){
      try {
        const response = await axios.post('addProject', {
          Type_Of_Service: this.Type_Of_Service,
          Customer_Name: this.Customer_Name,
          Customer_Email: this.Customer_Email,
          Customer_Address: this.Customer_Address,
          Date_Requested: this.Date_Requested,
          Completed: this.Completed

        });
        console.log(response);
        alert(response.data.message);
        setTimeout(location.reload.bind(location), 0);
      }catch(e){
        this.error ='Error occurred';
      }
    }
  }}
</script>

<style scoped>

</style>