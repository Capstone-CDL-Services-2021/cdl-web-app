<template>
  <div>

    <cdl_header/>
    <navbar/>

    <b-jumbotron bg-variant="dark" border-variant="dark">
      <h1 style="color: white">Account Settings</h1>
      <div style="justify-content: center;display: flex">
      <b-jumbotron text-variant="black" border-variant="dark">
        Edit here Jimmy
      </b-jumbotron>
      <b-jumbotron text-variant="black" border-variant="dark">
        <b-button variant="warning" v-b-modal.modal-prevent-closing>Change Password</b-button>
        <b-modal
            id="modal-prevent-closing"
            ref="modal"
            title="Changing Password"
            @show="resetModal"
            @hidden="resetModal"
            @ok="handleOk"
        >
          <b-form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group
                label="New Password:"
                label-for="new_password_input"
                invalid-feedback="New password is required"
                label-cols-sm="4"
                :state="newPasswordState"
            >
              <b-form-input
                  id="new_password_input"
                  v-model="new_password"
                  :state="newPasswordState"
                  required
              ></b-form-input>
            </b-form-group>
            <b-form-group
                label="Confirm new password:"
                label-for="confirm_password"
                invalid-feedback="Confirm password is required"
                label-cols-sm="4"
                :state="confirmPasswordState"
            >
              <b-form-input
                  id="confirm_password"
                  v-model="confirm_password"
                  :state="confirmPasswordState"
                  required
              ></b-form-input>
            </b-form-group>
          </b-form>
        </b-modal>
        <p>{{message}}</p>
      </b-jumbotron>
      </div>
      <!--      <b-card>-->
      <!--        <b-form>-->
      <!--          <b-form-group-->
      <!--              id="current_email"-->
      <!--              label-cols-sm="4"-->
      <!--              label="Current email:"-->
      <!--          >-->
      <!--            {{user.email}}-->
      <!--          </b-form-group>-->
      <!--          <b-form-group-->
      <!--              id="new_email"-->
      <!--              label-cols-sm="4"-->
      <!--              label="Enter new email:"-->
      <!--              label-for="new_email"-->
      <!--          >-->
      <!--            <b-form-input id="new_email"></b-form-input>-->
      <!--          </b-form-group>-->
      <!--        </b-form>-->
      <!--      </b-card>-->
      <!--      <b-jumbotron text-variant="black" border-variant="dark">-->
      <!--        <b-form>-->
      <!--          <b-form-group-->
      <!--              id="current_password"-->
      <!--              label-cols-sm="4"-->
      <!--              label="Current password:"-->
      <!--              >-->
      <!--          {{user.password}}-->
      <!--          </b-form-group>-->
      <!--          <b-form-group-->
      <!--              id="new_password"-->
      <!--              label-cols-sm="4"-->
      <!--              label="Enter new password:"-->
      <!--              label-for="new_password"-->
      <!--          >-->
      <!--            <b-form-input id="new_password"></b-form-input>-->
      <!--          </b-form-group>-->
      <!--          <b-form-group-->
      <!--              id="confirm_password"-->
      <!--              label-cols-sm="4"-->
      <!--              label="Confirm new password:"-->
      <!--              label-for="confirm_password"-->
      <!--          >-->
      <!--            <b-form-input id="confirm_password"></b-form-input>-->
      <!--          </b-form-group>-->
      <!--        </b-form>-->
      <!--      </b-jumbotron>-->
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
  data(){
    return {
      message: '',
      new_password: '',
      newPasswordState: null,
      confirm_password: '',
      confirmPasswordState: null
    }
  },
  methods: {
    checkFormValidity() {
      //const valid = this.$refs.form.checkValidity()
      if (this.new_password === this.confirm_password)
      {
        return true
      }
      else {
        return false
      }
    },
    resetModal() {
      this.new_password = ''
      this.confirm_password = ''
      this.newPasswordState = null
      this.confirmPasswordState = null
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        this.message = "Error: Password did not match"
      }
      else {
        // Print the new password
        this.message = "Password successfully changed to \"" + this.new_password + "\""
      }
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    }
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style scoped>

</style>