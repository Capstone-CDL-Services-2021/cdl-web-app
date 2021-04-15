<template>
<!--  This component is called on every non manager page which aligns the Contact Us button on the bottom-->
  <div class="align-bottom">
    Have questions?
    <b-button pill variant="info" v-on:click="redirect('/ContactPage')">Contact Us</b-button>
  </div>
</template>


<script>
/**
 * export components, views and methods from the imports
 */
export default {
  name: "contactUs",
  methods: {
    /**
     * this method is to redirect based on the id parameter input
     * @param id a String value that is a path
     */
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