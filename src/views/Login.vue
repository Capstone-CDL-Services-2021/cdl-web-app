<template>
  <div>
    <h1>CDL Services</h1>

    <b-form inline style="padding-left: 730px">
      <label class="sr-only" for="inline-form-input-name">Username</label>
      <b-form-input
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Username"
      ></b-form-input>

      <label class="sr-only" for="inline-form-input-password">Password</label>
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-input type="password" id="inline-form-input-password" placeholder="Password"></b-form-input>
      </b-input-group>
    </b-form>

    <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>
    <b-button variant="primary">Login</b-button>

    <b-button variant="primary" style="margin-left: 10px">Continue as Guest</b-button>



  </div>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {
      value: '',
      context: null
    }
  },
  methods: {
    onContext(ctx) {
      this.context = ctx
    }
  }
}

</script>

<style scoped>
  .b-form-input {
    color: #2c3e50;
  }
</style>