<!--  Component called whenever a manager visits the manager services page and can add/edit/delete service cards-->
<template>
  <div>
    <b-card no-body class="overflow-hidden card">
      <b-row no-gutters>
        <b-col>
          <!--          The image of the service card-->
          <b-card-img :src="cardImage" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col>
          <!--          The title of the service card-->
          <b-card-body :title="cardTitleA">
            <!--            The description of the service card-->
            <b-card-text style="max-width: 200px; align-self: center">
              {{ cardDesc }}
              <br/>
            </b-card-text>
            <br/>
            <br/>
            <!--            The buttons associated with each service card. Delete and Edit-->
            <b-button v-b-modal.accept v-on:click="removeService(cardId);" variant="success">Delete</b-button>
            <b-button v-on:click="editRedirect(cardId);" variant="primary">Edit</b-button>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <!--The modal when the service card has been deleted-->
    <b-modal id="accept" size="sm" title="Service Response" hide-footer>
      <p>Service has been Deleted</p>
    </b-modal>
  </div>
</template>

<script>
/**
 * import components, views and dependencies
 */
import axios from "axios";

export default {
  name: "serviceCard",
  // Props used for the HTML Code
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
    // cardImage() takes the image and stores into the cardImg prop
    cardImage() {
      return this.cardImg;
    },
    // cardTitleA() Assigns the title of the card to the cardTitle prop
    cardTitleA() {
      return this.cardTitle;
    }
  },
  /**
   * return data to declared and instantiated variables
   */
  data() {
    return {}
  },

  methods: {
    /**
     * Redirect - Redirects the page to the specified location ID
     * @param id - The location path
     */
    redirect(id) {
      this.$router.push(id)
    },
    /**
     * RemoveService - Removes the specified input cardID
     * @param cardID - ID input to be deleted
     * @returns {Promise<void>} Returns response
     */
    async removeService(cardID) {
      try {
        const response = await axios.post('removeServiceCard', {
          cardID: cardID
        });
        console.log(response);
        setTimeout(location.reload.bind(location), 1000);
      } catch (e) {
        this.error = 'Error occurred';
      }
    },
    /**
     * EditRedirect - Redirects to the managerEditServiceCard page
     * @param cardId - sends the cardId Parameter to the managerEditServiceCard Page
     */
    editRedirect(cardId) {
      this.$router.push({name: 'managerEditServiceCard', params: {id: cardId}})
    }
  }

}
</script>

<!-- CSS style script -->
<style scoped>

.card {
  max-width: 400px;
  margin-bottom: 25px;
}

img {
  height: 400px;
  max-width: 400px;
  max-height: 400px;
  object-fit: cover;
}

</style>