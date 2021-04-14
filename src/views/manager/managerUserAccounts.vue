<template>
  <div>

    <manager-header/>
    <manager-navbar/>

    <b-jumbotron bg-variant="dark" border-variant="dark">
      <div hidden>
        {{getAllUsers}}
      </div>
      <div>
        <b-jumbotron>
          <h1 style="text-align: center">Registered Users</h1>
          <!-- Version 2 with universal options at the top -->
          <!--                    <b-button size="sm" variant="primary" v-on:click="redirect('/managerUserAccountHistory')">View</b-button>-->
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
          <h4>{{message}}</h4>
        </b-jumbotron>
      </div>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

    </b-jumbotron>
  </div>
</template>

<script>
import managerHeader from "@/components/managerHeader";
import managerNavbar from "@/components/managerNavbar";
import axios from "axios";

export default {
  name: "manageUserAccounts",
  components: {
    managerHeader,
    managerNavbar
  },
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
          blocked:''
        }
      ]
    }
  },
  computed: {
    getAllUsers() {
      // eslint-disable-next-line vue/no-async-in-computed-properties
      return axios.get('getAllUsers').then(response => this.userInfo = response.data)
    }
  },
  methods: {
    onRowSelected(items) {
      this.selectedRow = items
    },
    redirect(id) {
      this.$router.push(id)
    },
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
          .then(value => {
            if (value === true) {
              this.resetPass();
            }
          })
    },
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
          .then(value => {
            if (value === true) {
              this.toggleBlocked();
            }
          })
    },
    async toggleBlocked() {
      try {
        const response = await axios.post('toggleBlocked', {
          id: this.selectedRow[0].id,
          blocked: this.selectedRow[0].blocked
        });
        console.log(response);
        setTimeout(location.reload.bind(location), 500);
      }catch(e){
        this.error ='Error occurred';
      }
    }
  }
}
</script>

<style scoped>

</style>