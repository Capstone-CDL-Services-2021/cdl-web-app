<template>
  <div>
    <manager-header/>
    <manager-navbar/>

    <b-jumbotron bg-variant="dark" text-variant="white" border-variant="dark">
      <div class="column">
        <div class="row">
          <div class="col">
            <h1 style="text-decoration: underline">Adding a New Service</h1>
            <b-form-group
              id="input-group-1"
              label="Service Name:"
              label-for="input-group-1"
              style="color:white">

              <b-form-input
                  id="input-1"
                  v-model="service.title"
                  type="text"
                  placeholder="Enter Service Name"
                  required/>
            </b-form-group>


            <b-form-group
                id="input-group-2"
                label="Service Description:"
                label-for="input-2">
              <b-form-textarea
                  id="input-2"
                  v-model="service.desc"
                  type="text"
                  placeholder="Enter Service Description"
                  required/>
            </b-form-group>

            <b-form-group
                id="input-group-3"
                label="Service Image:"
                label-for="input-3">
              <b-form-input
                  id="input-3"
                  v-model="service.img"
                  placeholder="Enter Image Link"
                  required/>
            </b-form-group>

            <div class="layout">
              <b-button variant="success" class="button" v-b-modal.accept v-on:click="addService();">Add</b-button>
              <b-button variant="danger" class="button" v-on:click="redirect('/managerService')">Cancel</b-button>
            </div>
          </div>
        </div>
      </div>
    </b-jumbotron>


    <b-modal id="accept" size="sm" title="Service" ok-only @ok="redirect('managerService')">
      <p>Service has been Added</p>
    </b-modal>
  </div>
</template>

<script>
import managerNavbar from "@/components/managerNavbar";
import managerHeader from "@/components/managerHeader";
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  name: "Edit",
  components: {
    managerHeader,
    managerNavbar
  },
  methods: {
    redirect(id) {
      this.$router.push(id)
    },
    onReset(event) {
      event.preventDefault()
      this.service.title = ''
      this.service.desc = ''
      this.service.img = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    async addService() {
      try{
        const response = await axios.post('addServiceCard',{
          title: this.service.title,
          description: this.service.desc,
          imageUrl: this.service.img
        });
        this.$store.dispatch('addService', this.service);
        console.log(response);
      }catch (e){
        this.error = 'error occured';
      }

    }
  },
  data(){
    return{
      service: {}
    }
  },
  computed: {
    ...mapGetters({
      services: "getServices"
    })
  }
}
</script>

<style scoped>

#input-1 {
width: 25%;
  margin-left: auto;
  margin-right: auto;
}
#input-2 {
  width: 25%;
  margin-left: auto;
  margin-right: auto;
}
#input-3 {
  width: 25%;
  margin-left: auto;
  margin-right: auto;
}

.button {
  margin: 10px;
}

.form-control {
  margin: 10px
}

</style>