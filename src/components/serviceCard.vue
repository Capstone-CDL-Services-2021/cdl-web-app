<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 570px">
      <b-row no-gutters>
        <b-col>
          <b-card-img
              src=""
              alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col>
          <b-card-body title="CANNOT BE HARDCODED">
            <b-card-text>
              CANNOT BE HARDCODED<br/>
              CANNOT BE HARDCODED
            </b-card-text>
            <b-button variant="primary" v-on:click="redirect('/book')">Request</b-button>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "serviceCard",
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

</style>