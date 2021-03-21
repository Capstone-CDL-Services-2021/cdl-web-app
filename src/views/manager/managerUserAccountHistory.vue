<template>
  <div>

    <manager-header/>
    <manager-navbar/>

    <b-jumbotron bg-variant="dark" border-variant="dark">
      <div>
        <b-jumbotron>
          <h1>Order History</h1>
          <b-card border-variant="dark" align="center"
                  title="Cleaning Gutters" sub-title="Order #6969">
            <b-card-text><em>Price: </em>$150</b-card-text>
            <b-card-text><em>Start Date: </em>March 4, 2021</b-card-text>
            <b-card-text><em>End Date: </em>March 7, 2021</b-card-text>
            <b-link href="#" class="card-link">Print</b-link>
          </b-card>
          <b-card border-variant="dark" align="center"
                  title="Taking out Trash" sub-title="Order #9119">
            <b-card-text><em>Price: </em>$900</b-card-text>
            <b-card-text><em>Start Date: </em>February 21, 2021</b-card-text>
            <b-card-text><em>End Date: </em>March 1, 2021</b-card-text>
            <b-link href="#" class="card-link">Print</b-link>
          </b-card>
        </b-jumbotron>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
import managerHeader from "@/components/managerHeader";
import managerNavbar from "@/components/managerNavbar";

export default {
  name: "managerUserAccountHistory",
  components: {
    managerHeader,
    managerNavbar
  }
}
</script>

<style scoped>

</style>