<template>
<div>
  <manager-header/>
  <manager-navbar/>

  <b-jumbotron bg-variant="dark" border-variant="dark">
    <div>
      <b-jumbotron>
        <h1 style="text-align: center">Equipment</h1>
        <b-button v-on:click='hidden=!hidden'>Add Equipment</b-button><br><br><br>
        <EquipmentForm v-if="!hidden"></EquipmentForm>

        <div hidden> {{ loadEquipment }} </div>

        <table class="minimalistBlack">
          <thead>
          <tr>
            <th>Name</th>
            <th>Owned</th>
            <th>Cost</th>
            <th>Date Rented</th>
            <th>Date Returned</th>
            <th>Rented From</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="equipment in EquipmentList" :key="equipment.id">
            <td>{{ equipment.name }}</td>
            <td>{{ equipment.owned }}</td>
            <td> {{ equipment.cost }}</td>
            <td> {{ equipment.date_rented }}</td>
            <td> {{ equipment.date_returned }}</td>
            <td> {{ equipment.rented_from }}</td>
          </tr>
          </tbody>
        </table>
      </b-jumbotron>
    </div>
  </b-jumbotron>


</div>
</template>

<script>

import managerHeader from "@/components/managerHeader";
import managerNavbar from "@/components/managerNavbar";
import EquipmentForm from "@/components/EquipmentForm"
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  name: "managerEquipment",
  components: {
    managerHeader,
    managerNavbar,
    EquipmentForm
  },
  methods: {
    redirect(id) {
      this.$router.push(id)
    }
  },
  data() {
    return {
      EquipmentList: [],
      hidden: true
    }
  },
  computed: {
      ...mapGetters(['user']),
    loadEquipment() {
      // eslint-disable-next-line vue/no-async-in-computed-properties
      return (axios.post('getAllEquipment')).then(response => this.EquipmentList = response.data)
    }
  }
}

</script>

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