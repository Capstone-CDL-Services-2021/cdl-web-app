<template>
  <div>

    <manager-header/>
    <manager-navbar/>

    <b-jumbotron bg-variant="dark" text-variant="white" border-variant="dark">
      <div class="column">
        <div class="row">
          <div class="col">
            <h1 style="text-decoration: underline">Editing Service Card</h1>
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
              <b-button v-b-modal.edited variant="success" class="button" v-on:click="editService();">Update</b-button>
            </div>
          </div>
        </div>
      </div>
      <b-modal id="edited" size="sm" title="Service Response" ok-only @ok="redirect('/managerService')" hide-header-close>
        <p>Service Card has been Updated</p>
      </b-modal>
    </b-jumbotron>

  </div>
</template>


<script>
import managerNavbar from "@/components/managerNavbar";
import managerHeader from "@/components/managerHeader";
import axios from "axios";

export default {
  name: "Home",
  components: {
    managerHeader,
    managerNavbar
  },
  computed: {
    cardId() {
      return this.$route.params.id}
  },
  data(){
    return {
      service: {}
    }
  },
  methods: {
    redirect(id) {
      this.$router.push(id)
    },
    async editService() {
      try {
        const response = await axios.post('editServiceCard', {
          cardID: this.$route.params.id,
          title: this.service.title,
          description: this.service.desc,
          imageUrl: this.service.img
        });
        console.log(response);
      }catch(e){
        this.error ='Error occurred';
      }
    },
  }
}
</script>

<style scoped>
.nav-item.nav-item.nav-item a {
  color: white;
  padding: 20px;
  border: 3px solid white;
}

body{
  background:lightblue;
  text-align:center;
  box-sizing:border-box;
  font-family:"Lato",Sans-serif;
  /*position:relative;*/
}

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