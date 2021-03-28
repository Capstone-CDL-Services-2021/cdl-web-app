<template>
  <form @submit.prevent="equipmentHandler">
    <error v-if="error" :error="error"></error>

    <h1>Add a Equipment</h1>

    <div class = "form-group">
      <label>Name</label>
      <input type="text" class="form-control" v-model="equip_name" placeholder="Name of equipment"/>
    </div>

    <div class = "form-group">
      <label>Owned</label>
      <input type="text" class="form-control" v-model="equip_owned" placeholder="Is equipment owned?"/>
    </div>

    <div class = "form-group">
      <label>Cost</label>
      <input type="text" class="form-control" v-model="equip_cost" placeholder="Cost of rented equipment"/>
    </div>

    <div class = "form-group">
      <label>Date rented</label>
      <input type="email" class="form-control" v-model="date_rented" placeholder="If rented, when was it rented?"/>
    </div>

    <div class = "form-group">
      <label>Date returned</label>
      <input type="password" class="form-control" v-model="date_returned" placeholder="If rented, when was it returned?"/>
    </div>

    <div class = "form-group">
      <label>Rented from?</label>
      <input type="password" class="form-control" v-model="rented_from" placeholder="Where was the equipment rented from?"/>
    </div>

    <button class="btn-primary btn-block">confirm</button>
  </form>
</template>

<script>
import Error from '@/components/Error.vue'
import axios from 'axios'
export default {
  name: "EquipmentForm",
  components:{
    Error
  },
  data() {
    return {
      equip_name: '',
      equip_owned: '',
      equip_cost: '',
      date_rented: '',
      date_returned: '',
      rented_from:''

    }
  },
  methods: {
    async equipmentHandler(){
      try {
        const response = await axios.post('managerEquipment', {
          equip_name: this.equip_name,
          equip_owned: this.equip_owned,
          equip_cost: this.equip_cost,
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