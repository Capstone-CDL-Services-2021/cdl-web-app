<template>
  <div class="align-bottom">
    Have questions?
    <b-button pill variant="info" v-on:click="redirect('/ContactPage')">Contact Us</b-button>
  </div>
</template>


<script>
export default {
  name: "contactUs",
  methods: {
    redirect(id) {
      this.$router.push(id)
    }
  }

}

</script>

<style scoped>

.align-bottom {
  text-align: right;
  text-anchor: end;
}
</style>