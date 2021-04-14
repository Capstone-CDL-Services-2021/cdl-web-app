<template>
  <div class="container-sm">
    <form @submit.prevent="EquipmentHandler">
      <h1>Add an Equipment</h1>

      <div class = "form-group">
        <label>Name</label>
        <input type="text" class="form-control" v-model="name" placeholder="Name of equipment"/>
      </div>

      <div class = "form-group">
        <label>Owned</label>
        <input type="text" class="form-control" v-model="owned" placeholder="Is equipment owned?"/>
      </div>

      <div class = "form-group">
        <label>Cost</label>
        <input type="number" class="form-control" v-model="cost" placeholder="Cost of rented equipment"/>
      </div>

      <div class = "form-group">
        <label>Date rented</label>
        <input type="date" class="form-control" v-model="date_rented"/>
      </div>

      <div class = "form-group">
        <label>Date returned</label>
        <input type="date" class="form-control" v-model="date_returned"/>
      </div>

      <div class = "form-group">
        <label>Rented from?</label>
        <input type="text" class="form-control" v-model="rented_from" placeholder="Where was the equipment rented from?"/>
      </div>

      <br/>

      <button class="btn-primary btn-block">Confirm</button>

      <br/>

    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "EquipmentForm",
  components:{
  },
  data() {
    return {
      name: '',
      owned: '',
      cost: '',
      date_rented: '',
      date_returned: '',
      rented_from:''

    }
  },
  methods: {
    async EquipmentHandler(){
      try {
        const response = await axios.post('addEquipment', {
          name: this.name,
          owned: this.owned,
          cost: this.cost,
          date_rented: this.date_rented,
          date_returned: this.date_returned,
          rented_from: this.rented_from

        });
        console.log(response);
        alert(response.data.message);
        this.$router.push('/');
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