<template>
  <div>

    <manager-header/>
    <manager-navbar/>

    <b-jumbotron bg-variant="dark" text-variant="white" border-variant="dark">
      <div class="column">
        <h1 style="text-decoration: underline">Manage Booking Requests</h1>

        <br/>
        <br/>

        <div class="row">

          <div class="col">
            <h2 style="text-decoration: underline">New Requests</h2>
            <p>Eg, (Customer Name, Service Type) <b-button variant="primary" @click="$bvModal.show('modal-new')">Details</b-button></p>
            <p>Eg, (Customer Name, Service Type) <b-button variant="primary" @click="$bvModal.show('modal-new')">Details</b-button></p>
            <p>Eg, (Customer Name, Service Type) <b-button variant="primary" @click="$bvModal.show('modal-new')">Details</b-button></p>
            <p>Eg, (Customer Name, Service Type) <b-button variant="primary" @click="$bvModal.show('modal-new')">Details</b-button></p>
            <p>Eg, (Customer Name, Service Type) <b-button variant="primary" @click="$bvModal.show('modal-new')">Details</b-button></p>
            <p>Eg, (Customer Name, Service Type) <b-button variant="primary" @click="$bvModal.show('modal-new')">Details</b-button></p>
          </div>

          <div class="col">
            <h2 style="text-decoration: underline">Current Projects</h2>
            <p>Eg, (Customer Name, Service Type) <b-button variant="primary" @click="$bvModal.show('modal-current')">Details</b-button></p>
            <p>Eg, (Customer Name, Service Type) <b-button variant="primary" @click="$bvModal.show('modal-current')">Details</b-button></p>
            <p>Eg, (Customer Name, Service Type) <b-button variant="primary" @click="$bvModal.show('modal-current')">Details</b-button></p>
            <p>Eg, (Customer Name, Service Type) <b-button variant="primary" @click="$bvModal.show('modal-current')">Details</b-button></p>
            <p>Eg, (Customer Name, Service Type) <b-button variant="primary" @click="$bvModal.show('modal-current')">Details</b-button></p>
            <p>Eg, (Customer Name, Service Type) <b-button variant="primary" @click="$bvModal.show('modal-current')">Details</b-button></p>
          </div>
        </div>
      </div>
    </b-jumbotron>

    <!-- Modal that shows Customer Information   -->
    <b-modal id="modal-new">
      <template #modal-header="{}">
        <h5>Customer Details</h5>
      </template>
      <p>
        Customer Name: John Smith <br/>
        Service Type: Shovel Snow <br/>
        Street Address: 123 Street St NE <br/>
        Email Address: JohnSmith123@email.com <br/>
        Phone Number: (123) 456 7890
      </p>
      <template #modal-footer="{ ok, cancel }">
        <b-button size="sm" variant="success" @click="ok()" v-b-modal.accept>Accept</b-button>
        <b-button size="sm" variant="danger" @click="cancel()" v-b-modal.decline>Decline</b-button>
      </template>
    </b-modal>

    <b-modal id="accept" size="sm" title="Request" ok-only>
      <p>Request Accepted</p>
    </b-modal>

    <b-modal id="decline" size="sm" title="Request" ok-only>
      <p>Request Declined</p>
    </b-modal>

    <b-modal id="modal-current">
      <template #modal-header="{}">
        <h5>Customer Details</h5>
      </template>
      <p>
        Customer Name: John Smith <br/>
        Service Type: Shovel Snow <br/>
        Street Address: 123 Street St NE <br/>
        Email Address: JohnSmith123@email.com <br/>
        Date: January 01 2022 <br/>
        Phone Number: (123) 456 7890
      </p>
      <template #modal-footer="{ ok, cancel }">
        <b-button size="sm" variant="success" @click="ok()">Ok</b-button>
        <b-button size="sm" variant="danger" @click="cancel()">Close</b-button>
      </template>
    </b-modal>




  </div>
</template>


<script>
import managerNavbar from "@/components/managerNavbar";
import managerHeader from "@/components/managerHeader";

export default {
  name: "Home",
  components: {
    managerHeader,
    managerNavbar
  },
  data(){
    return {
    }
  },
  methods: {
    redirect(id) {
      this.$router.push(id)
    }
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

</style>