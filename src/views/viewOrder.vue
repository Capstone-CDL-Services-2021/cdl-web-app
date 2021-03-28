<template>

  <div>
    <cdl_header/>
    <div v-if="user">
      <div v-if="user.email == 'manager@cdlservices.com'">{{ redirect('/managerHome') }}</div>
    </div>
    <h3 v-if="user">
      Hello, {{ user.first_name }} {{ user.last_name }}
    </h3>
    <div v-if="error" class="alert alert-danger" role="alert">
      {{ error }}
    </div>
    <navbar/>

    <b-jumbotron bg-variant="dark" border-variant="dark">
      <div style="justify-content: center;display: flex">
        <b-jumbotron style="text-align:center" text-variant="black" border-variant="dark" class="sizing">
          <h2 style="text-decoration: underline">Order History</h2>
          <div class="column">
            <p>
              things to be auto filled by the database for their orders if they have any previous orders
              eg: <br/>

              Order #: {Date, ServiceType, Cost} <br/>
              Order #: {Date, ServiceType, Cost} <br/>
              Order #: {Date, ServiceType, Cost} <br/>
              Order #: {Date, ServiceType, Cost} <br/>
              Order #: {Date, ServiceType, Cost} <br/>
              Order #: {Date, ServiceType, Cost} <br/>
              Order #: {Date, ServiceType, Cost} <br/>
            </p>

            <br/>

            <p>
              if customer does not have any prior orders eg: <br/>

             You have not yet had a service done my CDL yet! Why not request a service by
              <b-button variant="primary" size="sm" v-on:click="redirect('/services')">Clicking Here!</b-button>
            </p>

          </div>
        </b-jumbotron>
      </div>
      <div class="test">
        <contact-us/>
      </div>
    </b-jumbotron>
  </div>


</template>

<script>
import navbar from "@/components/navbar"
import cdl_header from "@/components/cdl_header"
import {mapGetters} from 'vuex'
import ContactUs from "@/components/contactUs";


export default {
  name: "viewOrder",
  components: {
    ContactUs,
    cdl_header,
    navbar
  },
  methods: {
    redirect(id) {
      this.$router.push(id)
    }
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style scoped>
.sizing {
  width: 50%;
  padding: 20px 0px 20px 0px;
}

.test {
  color: white;
}
</style>
