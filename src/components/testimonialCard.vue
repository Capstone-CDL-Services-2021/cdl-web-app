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

<!-- Component that creates a testimonial card object -->
<template>
  <div>
    <!-- card containing testimonial -->
    <b-card no-body class="overflow-hidden" style="max-width: 570px">
      <!-- divide card into 2 columns, 1 for image, 1 for text -->
      <b-row no-gutters>
        <b-col>
          <!-- card body -->
          <b-card-body :title="cardTitleA">

            <!-- card text -->
            <b-card-text>
              {{ cardTestimonial }}
              <br/>
              <br/>

              <!-- card rating -->
              Rating: {{ cardRating }} / 5
            </b-card-text>

            <!-- clients name -->
            <h5>Client Name: {{ cardName }}</h5>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>

/**
 * export components, views, and methods from the imports
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
    }
  },

  computed: {

    /**
     * cardTitleA() - returns the cards title
     * @returns {String} - returns the card title that was grabbed from the props
     */
    cardTitleA() {
      return this.cardTitle;
    }
  }

}
</script>

<!-- CSS Style Script -->
<style scoped>
</style>