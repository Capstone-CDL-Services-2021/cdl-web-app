<template>

  <div>
    <cdl_header/>
    <div v-if="user">
      <div v-if="user.email == 'manager@cdlservices.com'">{{ redirect('/managerHome') }}</div>
    </div>
    <h3 v-if="user">
      Hello, {{ user.first_name }} {{ user.last_name }}
    </h3>
    <div v-if="error" class="alert alert-danger" role="alert">
      {{ error }}
    </div>
    <navbar/>

    <b-jumbotron bg-variant="dark" border-variant="dark">
      {{ getOrder() }}
      <div style="justify-content: center;display: flex">
        <b-jumbotron style="text-align:center" text-variant="black" border-variant="dark" class="sizing">
          <h2 style="text-decoration: underline">Order History</h2>
          <div class="column">
            <p>
              things to be auto filled by the database for their orders if they have any previous completed orders
              eg: <br/>

              Order #:
              <b-button variant="info" size="sm" @click="$bvModal.show('modal-complete')">Details</b-button>
              <br/>
              Order #:
              <b-button variant="info" size="sm" @click="$bvModal.show('modal-complete')">Details</b-button>
              <br/>
              Order #:
              <b-button variant="info" size="sm" @click="$bvModal.show('modal-complete')">Details</b-button>
              <br/>
              Order #:
              <b-button variant="info" size="sm" @click="$bvModal.show('modal-complete')">Details</b-button>
              <br/>
              Order #:
              <b-button variant="info" size="sm" @click="$bvModal.show('modal-complete')">Details</b-button>
              <br/>
              Order #:
              <b-button variant="info" size="sm" @click="$bvModal.show('modal-complete')">Details</b-button>
              <br/>
              Order #:
              <b-button variant="info" size="sm" @click="$bvModal.show('modal-complete')">Details</b-button>
              <br/>
            </p>

            <br/>

            <p>
              things to be auto filled by the database if client has ongoing orders
              eg: <br/>

              Order #:
              <b-button variant="info" size="sm" @click="$bvModal.show('modal-ongoing')">Details</b-button>
              <br/>
              Order #:
              <b-button variant="info" size="sm" @click="$bvModal.show('modal-ongoing')">Details</b-button>
              <br/>
              Order #:
              <b-button variant="info" size="sm" @click="$bvModal.show('modal-ongoing')">Details</b-button>
              <br/>
              Order #:
              <b-button variant="info" size="sm" @click="$bvModal.show('modal-ongoing')">Details</b-button>
              <br/>
              Order #:
              <b-button variant="info" size="sm" @click="$bvModal.show('modal-ongoing')">Details</b-button>
              <br/>
              Order #:
              <b-button variant="info" size="sm" @click="$bvModal.show('modal-ongoing')">Details</b-button>
              <br/>
              Order #:
              <b-button variant="info" size="sm" @click="$bvModal.show('modal-ongoing')">Details</b-button>
              <br/>
            </p>

            <b-modal id="modal-ongoing" size="lg">
              <template #modal-header="{}">
                <h5>Order #:</h5>
              </template>

              <b-table
                  bordered hover small
                  :items="orderInfo"
                  :fields="fields"
                  select-mode="single"
                  responsive="sm"
                  selectable>
              </b-table>

            </b-modal>

            <br/>

            <p>
              if customer does not have any prior orders eg: <br/>

              You have not yet had a service done my CDL yet! Why not request a service by
              <b-button variant="primary" size="sm" v-on:click="redirect('/services')">Clicking Here!</b-button>
            </p>

            <b-modal id="modal-complete" size="lg">
              <template #modal-header="{}">
                <h5>
                  Order #:
                </h5>
              </template>

              <b-table
                  bordered hover small
                  :items="orderInfo"
                  :fields="fields"
                  select-mode="single"
                  responsive="sm"
                  selectable>
              </b-table>


              <div class="textalign">
                Write your review by
                <b-button variant="primary" size="sm" v-on:click="redirect('/testimonials')">Clicking Here!</b-button>
              </div>
            </b-modal>

          </div>
        </b-jumbotron>
      </div>
      <div class="test">
        <contact-us/>
      </div>
    </b-jumbotron>
  </div>


</template>

<script>
import navbar from "@/components/navbar"
import cdl_header from "@/components/cdl_header"
import {mapGetters} from 'vuex'
import ContactUs from "@/components/contactUs";
import axios from "axios";


export default {
  name: "viewOrder",
  components: {
    ContactUs,
    cdl_header,
    navbar
  },
  data() {
    return {
      fields: [
        {
          key: 'order_num',
          sortable: true
        },
        {
          key: 'client_name',
          sortable: true
        },
        {
          key: 'service_type',
          sortable: true
        },
        {
          key: 'start_date',
          sortable: true
        },
        {
          key: 'end_date',
          sortable: true
        },
        {
          key: 'completion',
          sortable: true
        },
      ],
      orderInfo: [
        {
          order_num: '',
          client_name: '',
          service_type: '',
          start_date: '',
          end_date: '',
          total_cost: '',
          completion: ''
        }
      ]
    }
  },
  methods: {
    redirect(id) {
      this.$router.push(id)
    },
    getOrder() {
      return axios.get('getOrder').then(response => this.orderInfo = response.data)
    }
  },
  computed: {
    ...mapGetters(['orders']),
    ...mapGetters(['user'])
  }
}
</script>

<style scoped>
.sizing {
  width: 50%;
  padding: 20px 0px 20px 0px;
}

.textalign {
  text-align: center;
  text-anchor: middle;
}

.test {
  color: white;
}
</style>
