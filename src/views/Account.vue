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

<template>
  <div>

    <!-- Header and Navigation bar display by calling the components -->
    <cdl_header/>
    <navbar/>

    <!-- Used to encase everything and give background color -->
    <b-jumbotron bg-variant="dark" border-variant="dark">
      <h1 style="color: white">Account Settings</h1>

      <div style="justify-content: center;display: flex">

        <b-jumbotron style="text-align: left" title="User Information" text-variant="black" border-variant="dark"
                     class="paraStyle">
          <h3>User Information:</h3>

          <div class="mid">
            <p>Full Name: {{ user.first_name }} {{ user.last_name }}

              {{ user.first }}
            </p>
            <p>Email: {{ user.email }}</p>
            <p>ID: {{ user.id }}</p>

            <!--Update User Information -->
            <b-button variant="primary" v-b-modal.modal-update>Update User Info</b-button>

            <!-- Modal creation used for updating user information -->
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
            </b-modal>
          </div>
        </b-jumbotron>


        <b-jumbotron text-variant="black" border-variant="dark">
          <!-- Delete Account Form -->
          <b-button variant="danger" v-b-modal.modal-delete>Delete Account</b-button>
          <b-modal
              id="modal-delete"
              ref="modal"
              title="Deleting Account"
              ok-variant="danger"
              ok-title="YES"
              cancel-title="NO"
              @show="deleteModal"
              @hidden="deleteModal"
              @ok="handleOkDelete"
          >
            <p>If you would like to delete your account permanently please enter <strong>"Confirm Delete
              Account"</strong> in the text
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
          <br><br>

          <!-- Change password button sends you to the forgot page -->
          <b-button variant="warning" v-on:click="redirect('Forgot');">Change Password</b-button>

          <br><br>

          <!-- View Order History button sends you to the viewOrders page  -->
          <b-button variant="primary" v-on:click="redirect('/viewOrder')">Order History</b-button>
          <p></p>
        </b-jumbotron>
      </div>

      <!-- Displays any messages that are being sent back to the webpage -->
      <div style="justify-content: center;display: flex">
        <h3 style="color: white">{{ message }}</h3>
      </div>

      <!-- Used to add extra space at the bottom to get rid of white spaces -->
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </b-jumbotron>
  </div>
</template>

<script>

/**
 * import components, views and dependencies
 */
import cdl_header from "@/components/cdl_header";
import Home from "@/views/Home";
import {mapGetters} from 'vuex';
import axios from "axios";
import navbar from "@/components/navbar";

/**
 * export components, views and methods from the imports
 */
export default {
  name: "Account",
  components: {
    cdl_header,
    navbar
  },

  /**
   *  return data to declared and instantiated variables
   */
  data() {
    return {
      message: '',
      //Update User Info form
      new_firstname: '',
      newFirstnameState: '',
      new_lastname: '',
      newLastnameState: '',
      new_email: '',
      newEmailState: '',
      // Delete form
      confirm_delete: '',
      confirmDeleteState: null,
      // Reset Password form
      new_password: '',
      newPasswordState: null,
      confirm_password: '',
      confirmPasswordState: null
    }
  },


  methods: {

    /**
     * this method is to redirect based on the id parameter input
     * @param id a String value that is a path
     */
    redirect(id) {
      this.$router.push(id)
    },

    // Update Form functionality
    /**
     * checkFormValidityUpdate - checks the form for modal-update
     *
     * @returns {*}
     * * - checks the state for the inputs for modal-update form
     * returns <true> if the inputs are not empty or null
     * otherwise <false> for everything
     */
    checkFormValidityUpdate() {
      const valid = this.$refs.form.checkValidity()
      this.newFirstnameState = valid
      this.newLastnameState = valid
      this.newEmailState = valid
      return valid
    },

    /**
     * updateModal - re-instantiate the state and objects for the
     *               modal-update form inputs
     */
    updateModal() {
      this.new_firstname = ''
      this.new_lastname = ''
      this.new_email = ''
      this.newFirstnameState = null
      this.newLastnameState = null
      this.newEmailState = null
    },

    /**
     * handleOkUpdate - method handles the modal events for
     *                  modal-update form
     *
     * @param bvModalEvt
     * bvModalEvt - the specific modal triggered
     */
    handleOkUpdate(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmitUpdate()
    },

    /**
     * handleSubmitUpdate - this method takes the inputs and replaces
     *                      the old values in the database only for
     *                      the session user
     *
     * @returns {Promise<void>}
     * returns nothing, returns to page and cancels
     * whole modal event
     */
    async handleSubmitUpdate() {
      // Exit when the form isn't valid
      if (!this.checkFormValidityUpdate()) {
        return
      } else {
        // Print Account successfully updated
        this.message = "User Info successfully updated"

        try {
          // Manipulate database
          const response = await axios.post('updateUserInfo', {
            id: this.user.id,
            first_name: this.new_firstname,
            last_name: this.new_lastname,
            email: this.new_email
          });
          console.log(response);
          setTimeout(location.reload.bind(location), 1000);
        } catch (e) {
          this.error = 'Error occurred';
        }
      }

      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-update')
      })
    },

    // Delete Form functionality
    /**
     * checkFormValidityDelete - checks the form for modal-delete
     *
     * @returns {*}
     * * - checks the state for the inputs for modal-delete form
     * returns <true> if the inputs are not empty or null
     * otherwise <false> for everything
     */
    checkFormValidityDelete() {
      const valid = this.$refs.form.checkValidity()
      this.confirmDeleteState = valid
      return valid
    },

    /**
     * deleteModal - re-instantiate the state and objects for the
     *               modal-delete form inputs
     */
    deleteModal() {
      this.confirm_delete = ''
      this.confirmDeleteState = null
    },

    /**
     * handleOkDelete - method handles the modal events for
     *                  modal-delete form
     *
     * @param bvModalEvt
     * bvModalEvt - the specific modal triggered
     */
    handleOkDelete(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmitDelete()
    },

    /**
     * handleSubmitDelete - this method takes the confirmation input and
     *                      deletes the row values of the users table in
     *                      the database where id equals session user's id
     *
     * @returns {Promise<void>}
     * returns nothing, returns to page and cancels
     * whole modal event
     */
    async handleSubmitDelete() {
      // Exit when the form isn't valid
      if (!this.checkFormValidityDelete()) {
        return
      }
      // Check if Confirm Delete input matches
      else if (this.confirm_delete !== "Confirm Delete Account") {
        this.message = "Error: Account Deletion Message did not match"
      } else {
        // Print Account successfully deleted
        this.message = "Account successfully deleted"
        try {
          // Manipulate database
          const response = await axios.post('deleteUser', {
            id: this.user.id
          });
          console.log(response);
          setTimeout(location.reload.bind(location), 1000);
          // Go back Home
          await this.$router.push(Home);
        } catch (e) {
          this.error = 'Error occurred';
        }
      }
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-delete')
      })
    }
  },

  /**
   * Method for reactive dependencies
   */
  computed: {

    /**
     * maps if user is found
     */
    ...mapGetters(['user'])
  },

}
</script>

<!-- CSS Style Script -->
<style scoped>
.paraStyle {
  text-align: center;
  text-anchor: middle;
}

.mid {
  text-align: center;
}

.text {
  color: white;
}
</style>