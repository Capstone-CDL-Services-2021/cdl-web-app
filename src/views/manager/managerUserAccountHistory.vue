<template>
  <div>

    <manager-header/>
    <manager-navbar/>

    <b-jumbotron bg-variant="dark" border-variant="dark">
      <div>
        <b-jumbotron>
          <h1>Order History</h1>
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