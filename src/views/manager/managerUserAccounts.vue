<template>
  <div>

    <manager-header/>
    <manager-navbar/>

    <b-jumbotron bg-variant="dark" border-variant="dark">
      <div hidden>
        <!--Invoke the compute method-->
        {{ getAllUsers }}
      </div>
      <div>
        <b-jumbotron>
          <h1 style="text-align: center">Registered Users</h1>
          <b-button size="sm" variant="danger" @click="resetPassword">Reset</b-button>
          <b-button size="sm" variant="secondary" @click="blockUnblock">Block/Unblock</b-button>
          <br><br>
          <b-table
              bordered hover small
              :items="userInfo"
              :fields="fields"
              select-mode="single"
              responsive="sm"
              selectable
              @row-selected="onRowSelected">

            <!--templates for specific columns indicated by #cell-->
            <template #cell(selected)="{ rowSelected }">
              <template v-if="rowSelected">
                <span aria-hidden="true">&check;</span>
                <span class="sr-only">Selected</span>
              </template>
              <template v-else>
                <span aria-hidden="true">&nbsp;</span>
                <span class="sr-only">Not selected</span>
              </template>
            </template>
            <template v-slot:cell(blocked)="block">
              <template v-if="block.value === 1">
                Blocked
              </template>
              <template v-else-if="block.value === 0">
                Not Blocked
              </template>
            </template>
          </b-table>
          <h4>{{ message }}</h4>
        </b-jumbotron>
      </div>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

    </b-jumbotron>
  </div>
</template>

<script>
/**
 * import components, views and dependencies
 */
import managerHeader from "@/components/managerHeader";
import managerNavbar from "@/components/managerNavbar";
import axios from "axios";

/**
 * export components, views and methods from the imports
 */
export default {
  name: "manageUserAccounts",
  components: {
    managerHeader,
    managerNavbar
  },
  /**
   *  return data to declared and instantiated variables
   */
  data() {
    return {
      message: '',
      selectedRow: [],
      id: null,
      fields: [
        {
          key: 'first_name',
          sortable: true
        },
        {
          key: 'last_name',
          sortable: true
        },
        {
          key: 'blocked',
          label: 'Status?'
        },
        {
          key: 'selected'
        }
      ],
      userInfo: [
        {
          first_name: '',
          last_name: '',
          blocked: ''
        }
      ]
    }
  },
  /**
   * Method for reactive dependencies
   */
  computed: {
    /**
     * getAllUsers - grabs all the users from the Database
     *               except for the admin account and insert
     *               into user.Info to generate the table
     *
     * @returns {Promise<AxiosResponse<any>>}
     * invoke the method from the back-end api to grab data from the database
     */
    getAllUsers() {
      // eslint-disable-next-line vue/no-async-in-computed-properties
      return axios.get('getAllUsers').then(response => this.userInfo = response.data)
    }
  },
  /**
   * Method for reactive dependencies
   */
  methods: {
    /**
     * onRowSelected - method that checks which row is selected
     *                 in the table, grabs the values in items
     *                 and stores into selectedRow
     *
     * @param items
     * the values selected in the table that is then stored
     * into selectedRow
     */
    onRowSelected(items) {
      this.selectedRow = items
    },
    /**
     * redirect - Change address bar with id value
     *
     * @param id
     * id - the address path
     */
    redirect(id) {
      this.$router.push(id)
    },
    /**
     * resetPassword - a method that builds a custom modal with methods stored
     *                 inside which triggers certain event depending on what
     *                 button pressed
     */
    resetPassword() {
      this.$bvModal.msgBoxConfirm('Please confirm that you want to reset this user\'s password.', {
        title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true,
      })
          // if button YES is pressed invoke this method
          .then(value => {
            if (value === true) {
              this.resetPass();
            }
          })
    },
    /**
     * resetPass - resets the password for selected user from the table.
     *             User receives email with a link to reset their password
     *
     * @returns {Promise<void>}
     * returns nothing, returns to page and cancels
     * whole modal event
     */
    async resetPass() {
      try {
        const response = await axios.post('forgot', {
          email: this.selectedRow[0].email,
        });
        this.message = 'The email was sent!';
        this.error = '';
        console.log(response);
      } catch (e) {
        this.error = 'Error occurred';
        this.message = '';
      }
    },
    /**
     * blockUnblock -  a method that builds a custom modal with methods stored
     *                 inside which triggers certain event depending on what
     *                 button pressed
     *
     */
    blockUnblock() {
      this.block = ''
      this.$bvModal.msgBoxConfirm('Block/Unblock user?.', {
        title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      })
          // if button YES is pressed invoke this method
          .then(value => {
            if (value === true) {
              this.toggleBlocked();
            }
          })
    },
    /**
     * toggleBlocked - block or unblock the selected user from the tables using their
     *                 id. Changes the value in the database for blocked to 1 to block,
     *                 or change the value to 0 to unblock.
     *
     * @returns {Promise<void>}
     */
    async toggleBlocked() {
      try {
        const response = await axios.post('toggleBlocked', {
          id: this.selectedRow[0].id,
          blocked: this.selectedRow[0].blocked
        });
        console.log(response);
        setTimeout(location.reload.bind(location), 500);
      } catch (e) {
        this.error = 'Error occurred';
      }
    }
  }
}
</script>

<style scoped>

</style>