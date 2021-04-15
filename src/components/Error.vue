<template>
<!--  This component is called whenever there's an error-->
  <div class="alert alert-danger" role="alert">
    {{error}}
  </div>
</template>

<script>
/**
 * export components, views and methods from the imports
 */
export default {

  name: "Error",
  props:['error']
}
</script>

<style scoped>

</style>