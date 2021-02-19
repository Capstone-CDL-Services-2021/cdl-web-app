<template>
  <div class="home">
    <cdl_header/>
    <navbar/>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar";
import cdl_header from "@/components/cdl_header";

export default {
  name: 'Home',
  components: {
    cdl_header,
  navbar
  }
}
</script>
