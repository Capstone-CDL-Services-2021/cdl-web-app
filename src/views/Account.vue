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
            <p>ID: {{user.id}}</p>

          </div>

          <!--Update User Information -->
          <b-button variant="primary" v-b-modal.modal-update>Update User Info</b-button>
          <b-modal
              id="modal-update"
              ref="modal"
              title="Update User Info"
              @show="updateModal"
              @hidden="updateModal"
              @ok="handleOkUpdate"

          >
            <b-form ref="form" @submit.stop.prevent="handleSubmitUpdate">
              <b-form-group
                  label="Change First Name:"
                  label-for="change_firstname"
                  invalid-feedback="First Name is required"
                  label-cols-sm="4"
                  :state="newFirstnameState"
              >
                <b-form-input
                    id="change_firstname"
                    v-model="new_firstname"
                    :state="newFirstnameState"
                    required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                  label="Change Last Name:"
                  label-for="change_lastname"
                  invalid-feedback="Last Name is required"
                  label-cols-sm="4"
                  :state="newLastnameState"
              >
                <b-form-input
                    id="change_lastname"
                    v-model="new_lastname"
                    :state="newLastnameState"
                    required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                  label="Change Email:"
                  label-for="change_email"
                  invalid-feedback="Email is required"
                  label-cols-sm="4"
                  :state="newEmailState"
              >
                <b-form-input
                    id="change_email"
                    v-model="new_email"
                    :state="newEmailState"
                    required
                ></b-form-input>
              </b-form-group>
            </b-form>
            {{message_update}}
          </b-modal>
        </b-jumbotron>

        <b-jumbotron text-variant="black" border-variant="dark">
          <!-- Delete Account UI -->
          <b-button variant="danger" v-b-modal.modal-delete>Delete Account</b-button>
          <b-modal
              id="modal-delete"
              ref="modal"
              title="Deleting Account"
              @show="deleteModal"
              @hidden="deleteModal"
              @ok="handleOkDelete"
          >
            <p>If you would like to delete your account permanently please enter "Confirm Delete Account" in the text
              box below</p>
            <b-form ref="form" @submit.stop.prevent="handleSubmitDelete">
              <b-form-group
                  label="Delete Account:"
                  label-for="delete_form"
                  invalid-feedback="Account Deletion Message Required"
                  label-cols-sm="4"
                  :state="confirmDeleteState"
              >
                <b-form-input
                    id="delete_form"
                    v-model="confirm_delete"
                    :state="confirmDeleteState"
                    required
                />
              </b-form-group>
            </b-form>
          </b-modal>
          <p>{{ message_delete }}</p>


          <!-- Change password stuff  -->
          <b-button variant="warning" v-b-modal.modal-password>Change Password</b-button>
          <b-modal
              id="modal-password"
              ref="modal"
              title="Changing Password"
              @show="resetModal"
              @hidden="resetModal"
              @ok="handleOkPassword"
          >
            <b-form ref="form" @submit.stop.prevent="handleSubmitPassword">
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
          <p>{{ message_password }}</p>

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
        </b-jumbotron>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
import cdl_header from "@/components/cdl_header";
import navbar from "@/components/navbar";
import Home from "@/views/Home";
import {mapGetters} from 'vuex';
import axios from "axios";

export default {
  name: "Account",
  components: {
    cdl_header,
    navbar
  },
  data() {
    return {
      userInfo: [],
      //Update User Info form
      new_firstname: '',
      newFirstnameState: '',
      new_lastname: '',
      newLastnameState: '',
      new_email: '',
      newEmailState: '',
      message_update: '',
      // Delete form
      confirm_delete: '',
      message_delete: '',
      confirmDeleteState: null,
      // Reset Password form
      new_password: '',
      newPasswordState: null,
      confirm_password: '',
      confirmPasswordState: null,
      message_password: ''
    }
  },
  methods: {
    // Update Form functionality
    checkFormValidityUpdate() {
      const valid = this.$refs.form.checkValidity()
      this.newFirstnameState = valid
      this.newLastnameState = valid
      this.newEmailState = valid
      return valid
    },
    updateModal() {
      this.new_firstname = ''
      this.new_lastname = ''
      this.new_email = ''
      this.message_update = ''
      this.newFirstnameState = null
      this.newLastnameState = null
      this.newEmailState = null
    },
    handleOkUpdate(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmitUpdate()
    },
    handleSubmitUpdate() {
      // Exit when the form isn't valid
      if (!this.checkFormValidityUpdate()) {
        return
      }
      else {
        // Print Account successfully updated
        this.message_update = "User Info successfully updated"
      }
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-update')
      })
    },

    // Password form functionality
    checkFormValidityPassword() {
      const valid = this.$refs.form.checkValidity()
      this.newPasswordState = valid
      this.confirmPasswordState = valid
      return valid;
    },
    resetModal() {
      this.new_password = ''
      this.confirm_password = ''
      this.newPasswordState = null
      this.confirmPasswordState = null
    },
    handleOkPassword(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmitPassword()
    },
    handleSubmitPassword() {
      // Exit when the form isn't valid
      if (!this.checkFormValidityPassword()) {
        return
      }
      // Check if password match
      else if (this.new_password !== this.confirm_password) {
        this.message_password = "Error: Password did not match"
      }
      else {
        // Print the new password
        this.message_password = "Password successfully changed"
      }
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-password')
      })
    },

    // Delete Form functionality
    checkFormValidityDelete() {
      const valid = this.$refs.form.checkValidity()
      this.confirmDeleteState = valid
      return valid
    },
    deleteModal() {
      this.confirm_delete = ''
      this.message_delete = ''
      this.confirmDeleteState = null
    },
    handleOkDelete(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmitDelete()
    },
    async handleSubmitDelete() {
      // Exit when the form isn't valid
      if (!this.checkFormValidityDelete()) {
        return
      }
      // Check if Confirm Delete input matches
      else if (this.confirm_delete !== "Confirm Delete Account") {
        this.message_delete = "Error: Account Deletion Message did not match"
      } else {
        // Print Account successfully deleted
        this.message_delete = "Account successfully deleted"
        try {
          // Manipulate database
          const response = await axios.post('deleteUser', {
            id: this.user.id
          });
          console.log(response);
          setTimeout(location.reload.bind(location), 1000);
        } catch (e) {
          this.error = 'Error occurred';
        }
        // Go back Home
        await this.$router.push(Home);
      }
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-delete')
      })
    }
  },
  computed: {
    ...mapGetters(['user'])
  },

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