<!--  Component for the Equipment Form on the Manager page. This is populated whenever the manager wants to add a new equipment-->
<template>
  <div class="container-sm">
    <form @submit.prevent="EquipmentHandler">
      <h1>Add an Equipment</h1>
<!--form group for name of equipment-->
      <div class = "form-group">
        <label>Name</label>
        <input type="text" class="form-control" v-model="name" placeholder="Name of equipment"/>
      </div>
<!--form group for if the equipment is owned or not-->
      <div class = "form-group">
        <label>Owned</label>
        <input type="text" class="form-control" v-model="owned" placeholder="Is equipment owned?"/>
      </div>
<!--Cost of rented equipment -->
      <div class = "form-group">
        <label>Cost</label>
        <input type="number" step=".01" class="form-control" v-model="cost" placeholder="Cost of rented equipment"/>
      </div>
<!-- Date of when equipment rented. Used if manager rents an equipment that they don't have-->
      <div class = "form-group">
        <label>Date rented</label>
        <input type="date" class="form-control" v-model="date_rented"/>
      </div>
<!-- Date of when equipment is returned-->
      <div class = "form-group">
        <label>Date returned</label>
        <input type="date" class="form-control" v-model="date_returned"/>
      </div>
<!--If the manager rented from someone or a place-->
      <div class = "form-group">
        <label>Rented from?</label>
        <input type="text" class="form-control" v-model="rented_from" placeholder="Where was the equipment rented from?"/>
      </div>

      <br/>
<!--confirm button-->
      <button class="btn-primary btn-block">Confirm</button>

      <br/>

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
    /**
     *This method is called whenever a manager wants to add equipment to the equipments table
     *
     */
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