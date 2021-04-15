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


<!-- This component is called whenever there's an error -->
<template>
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

<!-- CSS Style Script -->
<style scoped>
</style>