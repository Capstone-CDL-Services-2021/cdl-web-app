<template>
  <div>

    <cdl_header/>
    <navbar/>

    <b-jumbotron bg-variant="dark" border-variant="dark">
      <h1 style="color: white">Account Settings</h1>
      <b-jumbotron text-variant="black" border-variant="dark">
        <b-form>
          <b-form-group
              id="current_email"
              label-cols-sm="4"
              content-cols-sm="7"
              label="Current email:"
          >
            {{user.email}}
          </b-form-group>
          <b-form-group
              id="new_email"
              label-cols-sm="4"
              content-cols-sm="7"
              label="Enter new email:"
              label-for="new_email"
          >
            <b-form-input id="new_email"></b-form-input>
          </b-form-group>
        </b-form>
      </b-jumbotron>
      <b-jumbotron text-variant="black" border-variant="dark">
        <b-form>
          <b-form-group
              id="current_password"
              label-cols-sm="4"
              content-cols-sm="7"
              label="Current password:"
              >
          {{user.password}}
          </b-form-group>
          <b-form-group
              id="new_password"
              label-cols-sm="4"
              content-cols-sm="7"
              label="Enter new password:"
              label-for="new_password"
          >
            <b-form-input id="new_password"></b-form-input>
          </b-form-group>
          <b-form-group
              id="confirm_password"
              label-cols-sm="4"
              content-cols-sm="7"
              label="Confirm new password:"
              label-for="confirm_password"
          >
            <b-form-input id="confirm_password"></b-form-input>
          </b-form-group>
        </b-form>
      </b-jumbotron>
    </b-jumbotron>

  </div>
</template>

<script>
import cdl_header from "@/components/cdl_header";
import navbar from "@/components/navbar";
import {mapGetters} from 'vuex';

export default {
  name: "Account",
  components: {
    cdl_header,
    navbar
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style scoped>

</style>