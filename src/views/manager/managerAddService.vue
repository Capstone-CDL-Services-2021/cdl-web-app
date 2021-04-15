<!--
*******************************************
*                                         *
* Application: Front-end of CDL_Services  *
*                                         *
* Author: Alejandro Pena Canelon          *
*         Daniel Tran                     *
*         David Do                        *
*         Jimmy Lam                       *
*         Jordan Banh                     *
*         Justin Serrano                  *
*                                         *
* Date: April 16, 2021                    *
*                                         *
******************************************* -->

<template>
  <div>

    <!-- calls the manager header and navbar components to be displayed -->
    <manager-header/>
    <manager-navbar/>

<!-- Used to encase everything and give background color -->
    <b-jumbotron bg-variant="dark" text-variant="white" border-variant="dark">
      <div class="column">
        <div class="row">
          <div class="col">
            <h1 style="text-decoration: underline">Adding a New Service</h1>

            <!-- The Add Service Forms -->
            <b-form-group
                id="input-group-1"
                label="Service Name:"
                label-for="input-group-1"
                style="color:white">

              <!-- Service title input -->
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

              <!-- Description input -->
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
              <!-- Image Input -->
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

      <!-- Used to add extra space at the bottom to get rid of white spaces -->
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </b-jumbotron>

    <b-modal id="accept" size="sm" title="Service" ok-only @ok="redirect('/managerService')">
      <p>Service has been Added</p>
    </b-modal>
  </div>
</template>

<script>
/**
 * import components, views and dependencies
 */
import managerNavbar from "@/components/managerNavbar";
import managerHeader from "@/components/managerHeader";
import axios from "axios";

/**
 * export components, views and methods from the imports
 */
export default {
  name: "Edit",
  components: {
    managerHeader,
    managerNavbar
  },

  methods: {

    /**
     * this method is to redirect based on the id parameter input
     * @param id a String value that is a path
     */
    redirect(id) {
      this.$router.push(id)
    },

    /**
     * onReset - Called upon when the form is reset
     * @param event - The event of the form
     */
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

    /**
     * addService - Calls to the backend addService function
     * @returns {Promise<void>} - Returns the response
     */
    async addService() {
      try {
        const response = await axios.post('addServiceCard', {
          title: this.service.title,
          description: this.service.desc,
          imageUrl: this.service.img
        });
        console.log(response);
      } catch (e) {
        this.error = 'Error occurred';
      }
    }
  },

  /**
   * return data to declared and instantiated variables
   */
  data() {
    return {
      service: {} // The service Arraylist containing the input parameters of the service
    }
  }
}
</script>

<!-- CSS style script -->
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