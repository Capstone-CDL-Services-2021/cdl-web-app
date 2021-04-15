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
    <b-jumbotron bg-variant="dark" border-variant="dark">
      <div>
        <b-jumbotron>
          <h1 style="text-align: center">Equipment</h1>

          <!-- Add Equipment Button -->
          <b-button v-on:click='hidden=!hidden'>Add Equipment</b-button>
          <br><br><br>

          <!-- Check to see if the hidden value is true -->
          <EquipmentForm v-if="!hidden"></EquipmentForm>

          <!-- Hidden load equipment method call -->
          <div hidden> {{ loadEquipment }}</div>

          <!-- Equipment Table -->
          <div class="table-responsive-md">
            <table class="minimalistBlack">
              <thead>
              <tr>
                <th>Name</th>
                <th>Owned</th>
                <th>Cost</th>
                <th>Date Rented</th>
                <th>Date Returned</th>
                <th>Rented From</th>
                <th>Delete equipment</th>
              </tr>
              </thead>
              <tbody>

              <!-- For loop that checks the equipList array and is used to print values from the database -->
              <tr v-for="equipment in EquipmentList" :key="equipment.id">
                <td>{{ equipment.name }}</td>
                <td>{{ equipment.owned }}</td>
                <td> {{ equipment.cost }}</td>
                <td> {{ equipment.date_rented }}</td>
                <td> {{ equipment.date_returned }}</td>
                <td> {{ equipment.rented_from }}</td>
                <td>
                  <b-button v-on:click="deleteEquipment(equipment.id)">Delete</b-button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </b-jumbotron>
      </div>

      <!-- Used to add extra space at the bottom to get rid of white spaces -->
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

    </b-jumbotron>
  </div>
</template>

<script>
/**
 * import components, views and dependencies
 */
import managerHeader from "@/components/managerHeader";
import managerNavbar from "@/components/managerNavbar";
import EquipmentForm from "@/components/EquipmentForm"
import axios from "axios";
import {mapGetters} from "vuex";

/**
 * export components, views and methods from the imports
 */
export default {
  name: "managerEquipment",
  components: {
    managerHeader,
    managerNavbar,
    EquipmentForm
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
     * deleteEquipment - Sends a post request to the backend deleteEquipment Function
     * This will delete the equipment with the specified ID
     * @param id - The specified equipment id
     * @returns {Promise<void>} - Returns the response from the backend
     */
    async deleteEquipment(id) {
      try {
        const response = await axios.post('deleteEquipment', {
              id: id
            }
        );
        console.log(response);
        alert("equipment deleted");
        setTimeout(location.reload.bind(location), 0);
      } catch
          (e) {
        this.error = 'Error occurred';
      }
    }
  },

  /**
   * return data to declared and instantiated variables
   */
  data() {
    return {
      EquipmentList: [], // Equipmentlist Array
      hidden: true // Hidden Boolean
    }
  },
  computed: {

    /**
     * maps if user is found
     */
    ...mapGetters(['user']),

    /**
     * Retrieves all the current equipment stored in the database
     *
     */
    loadEquipment() {
      // eslint-disable-next-line vue/no-async-in-computed-properties
      return (axios.post('getAllEquipment')).then(response => this.EquipmentList = response.data)
    }
  }
}
</script>

<!-- CSS style script -->
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