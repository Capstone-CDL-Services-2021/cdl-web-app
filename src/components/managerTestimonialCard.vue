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


<!-- This component is called whenever a manager wants to view all testimonial cards. The manager can then choose whether testimonial cards can be visible to users or not -->
<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 570px">
      <b-row no-gutters>
        <b-col>
          <!-- Card layout, has testimonial desc, ratings, client name, and a visibility icon with a toggle -->
          <b-card-body :title="cardTitleA">
            <b-card-text>
              {{ cardTestimonial }}
              <br/>
              <br/>
              Rating: {{ cardRating }} / 5
            </b-card-text>

            <b-card-text>
              <h5>Client Name: {{ cardName }} </h5>
            </b-card-text>

            <b-card-text v-if="toggle === 1" style="font-weight: bold; color: green">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill"
                   viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
              </svg>
            </b-card-text>

            <b-card-text v-if="toggle === 0" style="font-weight: bold; color: red">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                <path
                    d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                <path
                    d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
              </svg>
            </b-card-text>

            <b-button v-b-modal.accept v-on:click="toggleVisibility(cardId, toggle);" variant="secondary">Toggle
              Visibility
            </b-button>

          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>

/**
 * import components, views and dependencies
 */
import axios from "axios";

/**
 * export components, views and methods from the imports
 */
export default {
  name: "testimonialCard",

  // Props used for the HTML Code
  props: {
    cardTitle: {
      type: String,
    },
    cardTestimonial: {
      type: String,
    },
    cardRating: {
      type: Number,
    },
    cardName: {
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

    /**
     * returns the cardTitle
     */
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
     * This method is called whenever a manager clicks on the button that toggles visibility. After 500 ms it will reload the page.
     * @param cardID the id of the specific testimonial card that the manager clicked
     * @param toggle if it's toggled to be visible or not
     *
     */
    async toggleVisibility(cardID, toggle) {
      try {
        const response = await axios.post('toggleVisibility', {
          cardID: cardID,
          toggleID: toggle
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

<!-- CSS Style Script -->
<style scoped>
</style>