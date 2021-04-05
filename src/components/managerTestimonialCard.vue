<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 570px">
      <b-row no-gutters>
        <b-col>
          <b-card-body :title="cardTitleA">
            <b-card-text>
              {{cardTestimonial}}
              <br/>
              <br/>
              Rating: {{cardRating}}
            </b-card-text>
            <h5>Client Name: {{clientName}}</h5>
            <b-card-text v-if="toggle === 1">
              Visible
            </b-card-text>
            <b-card-text v-if="toggle === 0">
              Not Visible
            </b-card-text>
            <b-button v-b-modal.accept v-on:click="toggleVisibility(cardId, toggle);" variant="danger">Toggle Visibility</b-button>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "testimonialCard",

  props: {
    cardTitle: {
      type: String,
    },
    cardTestimonial: {
      type: String,
    },
    cardRating: {
      type: String,
    },
    clientName: {
      type: String,
    },
    cardId: {
      type: Number
    },
    toggle: {
      type: Number
    }
  },
  computed: {
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
    async toggleVisibility(cardID, toggle) {
      try {
          const response = await axios.post('toggleVisibility', {
            cardID: cardID,
            toggleID: toggle
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