<template>
  <div>

    <manager-header/>
    <manager-navbar/>

    <b-jumbotron bg-variant="dark" border-variant="dark">
      <div>
        <b-jumbotron>
          <h1 style="text-align: center">Registered Users</h1>
<!--          // Version 2 with universal options at the top-->
<!--          <b-button size="sm" variant="primary" v-on:click="redirect('/managerUserAccountHistory')">View</b-button>-->
<!--          <b-button size="sm" variant="danger" @click="resetPassword">Reset</b-button>-->
<!--          <b-button size="sm" variant="secondary" @click="blockUser">Block</b-button>-->
          <br>
          <p>
            Selected Row:<br>
            {{ selectedRow }}
          </p>
          <b-table bordered hover small
                   :items="items"
                   :fields="fields"
                   select-mode="single"
                   responsive="sm"
                   selectable
                   @row-selected="onRowSelected">
            // Version 1: each row comes with button options
            <template #cell(view_order_history)>
              <b-button size="sm" variant="primary" v-on:click="redirect('/managerUserAccountHistory')">View</b-button>
            </template>
            <template #cell(reset_password?)>
              <b-button size="sm" variant="danger" @click="resetPassword">Reset</b-button>
            </template>
            <template #cell(block_user?)>
              <b-button size="sm" variant="secondary" @click="blockUser">Block</b-button>
            </template>
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
          </b-table>
        </b-jumbotron>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
import managerHeader from "@/components/managerHeader";
import managerNavbar from "@/components/managerNavbar";

export default {
  name: "manageUserAccounts",
  components: {
    managerHeader,
    managerNavbar
  },
  data() {
    return {
      selectedRow: [],
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
          key: 'view_order_history'
        },
        {
          key: 'reset_password?',

        },
        {
          key: 'block_user?'
        },
        {
          key: 'selected'
        }
      ],
      items: [
        { first_name: 'Dickerson', last_name: 'Macdonald' },
        { first_name: 'Larsen', last_name: 'Shaw' } ,
        { first_name: 'Geneva', last_name: 'Wilson' },
        { first_name: 'Jami', last_name: 'Carney' }
      ]
    }
  },
  methods: {
    onRowSelected(items) {
      this.selectedRow = items
    },
    redirect(id) {
      this.$router.push(id)
    },
    resetPassword(){
      this.reset = ''
      this.$bvModal.msgBoxConfirm('Please confirm that you want to reset this user\'s password.', {
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
          .then(value => {
            this.reset = value
          })
      // .catch(err => {
      //   // An error occurred
      // })
    },
    blockUser(){
      this.block = ''
      this.$bvModal.msgBoxConfirm('Please confirm that you want to block this user.', {
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
          .then(value => {
            this.block = value
          })
      // .catch(err => {
      //   // An error occurred
      // })
    }
  }
}
</script>

<style scoped>

</style>