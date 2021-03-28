<template>
  <div>

    <cdl_header/>
    <navbar/>

    <b-jumbotron bg-variant="dark" border-variant="dark">

      <h1 style="color: white">Account Settings</h1>

      <div style="justify-content: center;display: flex">

        <b-jumbotron style="text-align: left" text-variant="black" border-variant="dark" class="paraStyle">
          <h3>User Information:</h3>
          <div class="mid">
            <p>Full Name: {{ user.first_name }} {{ user.last_name }}</p>
            <p>Email: {{ user.email }}</p>
          </div>
        </b-jumbotron>

        <b-jumbotron text-variant="black" border-variant="dark">
          <!-- Delete Account UI -->
          <b-button variant="danger" @click="$bvModal.show('modal-delete')"> Delete Account</b-button>
          <b-modal id="modal-delete">
            <template #modal-header="{}">
              <h5>Delete Account</h5>
            </template>

            <h6>If you would like to delete your account permanently please enter "Confirm Delete Account" in the text
              box below </h6>

            <br/>

            <b-form ref="form">
              <b-form-group
                  label="Delete Account:"
                  label-for="confirm_delete"
                  invalid-feedback="Account Deletion Message Required"
                  label-cols-sm="4"
                  :state="deleteCon"
              >

                <b-form-input
                    id="deleteConfirm"
                    v-model="delete_message"
                    :state="deleteCon"
                    required
                />

              </b-form-group>
            </b-form>
          </b-modal>
          <p>{{ delMessage }}</p>

          <!-- Change password stuff  -->
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
          <p>{{ message }}</p>


          <!-- View Order History  -->
          <b-button variant="primary" @click="$bvModal.show('modal-order')">View Orders</b-button>
          <b-modal id="modal-order">
            <template #modal-header="{}">
              <h5>Customer Details</h5>
            </template>
            <p>
              Order 1: <br/>
              Order 2: <br/>
              Order 3: <br/>
              Order 4: <br/>
              Order 5: <br/>
            </p>
            <template #modal-footer="{ ok, cancel }">
              <b-button size="sm" variant="success" @click="ok()">Ok</b-button>
              <b-button size="sm" variant="danger" @click="cancel()">Close</b-button>
            </template>
          </b-modal>
          <p></p>

          <!-- Change Account Info  -->
          <b-button variant="primary" @click="$bvModal.show('modal-update')">Update Account Info</b-button>
          <b-modal id="modal-update">
            <template #modal-header="{}">
              <h5>Account Information</h5>
            </template>

            <p>Full Name: {{ user.first_name }} {{ user.last_name }}</p>
            <p>Email: {{ user.email }}</p>

            <b-button size="sm" variant="primary" v-b-modal.update>Update</b-button>

            <!-- added button for changes -->
            <b-modal id="update" size="md" title="Update User Information">
              <b-form ref="form">
                <b-form-group
                    label="Change Name:"
                    label-for="name_change"
                    label-cols-sm="4"
                >
                  <b-form-input
                      id="new_full_name"
                      v-model="new_name"
                  ></b-form-input>

                </b-form-group>

                <b-form-group
                    label="Change Email:"
                    label-for="email_new"
                    label-cols-sm="4"
                >
                  <b-form-input
                      id="email_change"
                      v-model="email_new"
                  ></b-form-input>

                </b-form-group>
                <p>{{ updateMessage }}</p>
              </b-form>
            </b-modal>

            <template #modal-footer="{ ok, cancel }">
              <b-button size="sm" variant="success" @click="ok()">Ok</b-button>
              <b-button size="sm" variant="danger" @click="cancel()">Close</b-button>
            </template>
          </b-modal>


        </b-jumbotron>

      </div>

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
  data() {
    return {
      message: '',
      delMessage: '',
      delete_message: '',
      updateMessage: '',
      new_password: '',
      newPasswordState: null,
      confirm_password: '',
      confirmPasswordState: null
    }
  },
  methods: {
    checkFormValidity() {
      //const valid = this.$refs.form.checkValidity()
      if (this.new_password === this.confirm_password) {
        return true
      } else {
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
      } else {
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
.paraStyle {
  text-align: center;
  text-anchor: middle;
}

.mid {
  text-align: center;
}
</style>