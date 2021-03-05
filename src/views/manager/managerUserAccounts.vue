<template>
  <div>

    <manager-header/>
    <manager-navbar/>

    <b-jumbotron bg-variant="dark" border-variant="dark">
      <div>
        <b-jumbotron>
          <h1 style="text-align: center">Registered Users</h1>
          <br>
          <b-table bordered hover small
                   :items="items"
                   :fields="fields">
            <template #cell(view_order_history)>
              <b-button variant="primary" v-on:click="redirect('/managerUserAccountHistory')">View</b-button>
            </template>
            <template #cell(reset_password?)>
              <b-button variant="danger" @click="resetPassword">Reset</b-button>
            </template>
            <template #cell(block_user?)>
              <b-button variant="secondary" @click="blockUser">Block</b-button>
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
      reset: '',
      block: '',
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
          key: 'reset_password?'
        },
        {
          key: 'block_user?'
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