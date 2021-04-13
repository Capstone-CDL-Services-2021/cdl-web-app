<template>
  <div>
    <b-card no-body class="overflow-hidden">
      <b-row no-gutters>
        <b-col>
          <b-card-img :src="cardImage" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col>
          <b-card-body :title="cardTitleA">
            <b-card-text style="max-width: 200px; align-self: center">
              {{ cardDesc }}
              <br/>
            </b-card-text>
            <br/>
            <br/>
            <b-button v-b-modal.accept v-on:click="removeService(cardId);" variant="success">Delete</b-button>
            <b-button v-on:click="editRedirect(cardId);" variant="primary">Edit</b-button>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>

    <b-modal id="accept" size="sm" title="Service Response" hide-footer>
      <p>Service has been Deleted</p>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "serviceCard",
  props: {
    cardImg: {
      type: String,
    },
    cardTitle: {
      type: String,
    },
    cardDesc: {
      type: String,
    },
    cardId: {
      type: Number
    }
  },
  computed: {
    cardImage() {
      return this.cardImg;
    },
    cardTitleA() {
      return this.cardTitle;
    }
  },
  data() {
    return {

    }
  },
  methods: {
    redirect(id) {
      this.$router.push(id)
    },
    async removeService(cardID) {
      try {
        const response = await axios.post('removeServiceCard', {
          cardID: cardID
        });
        console.log(response);
        setTimeout(location.reload.bind(location), 1000);
      }catch(e){
        this.error ='Error occurred';
      }
    },
    editRedirect(cardId) {
      this.$router.push({name:'managerEditServiceCard', params:{id: cardId}})
    }
}

}
</script>

<style scoped>

  img {
    height: 400px;
    max-width: 400px;
    max-height: 400px;
    object-fit: cover;
  }

</style>