<template>
  <form @submit.prevent="EquipmentHandler">
    <h1>Add a Equipment</h1>

    <div class = "form-group">
      <label>Name</label>
      <input type="text" class="form-control" v-model="name" placeholder="Name of ment"/>
    </div>

    <div class = "form-group">
      <label>Owned</label>
      <input type="text" class="form-control" v-model="owned" placeholder="Is ment owned?"/>
    </div>

    <div class = "form-group">
      <label>Cost</label>
      <input type="number" class="form-control" v-model="cost" placeholder="Cost of rented ment"/>
    </div>

    <div class = "form-group">
      <label>Date rented</label>
      <input type="text" class="form-control" v-model="date_rented" placeholder="If rented, when was it rented?"/>
    </div>

    <div class = "form-group">
      <label>Date returned</label>
      <input type="text" class="form-control" v-model="date_returned" placeholder="If rented, when was it returned?"/>
    </div>

    <div class = "form-group">
      <label>Rented from?</label>
<<<<<<< HEAD
      <input type="text" class="form-control" v-model="rented_from" placeholder="Where was the ment rented from?"/>
=======
      <input type="text" class="form-control" v-model="rented_from" placeholder="Where was the equipment rented from?"/>
>>>>>>> 6159c49ee6ecaabfbfbdbe8de8ca99c570707a9a
    </div>

    <button class="btn-primary btn-block">confirm</button>
  </form>
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

</style>