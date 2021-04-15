<template>
  <div>
    <!--card containing testimonial-->
    <b-card no-body class="overflow-hidden" style="max-width: 570px">
      <!--      divide card into 2 columns, 1 for image, 1 for text-->
      <b-row no-gutters>
        <b-col>
          <!--          card body-->
          <b-card-body :title="cardTitleA">
            <!--            card text-->
            <b-card-text>
              {{ cardTestimonial }}
              <br/>
              <br/>
              <!--              card rating-->
              Rating: {{ cardRating }} / 5
            </b-card-text>
            <!--            clients name-->
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
  // properties being grabbed
  props: {
    // card title property
    cardTitle: {
      type: String,
    },
    // card testimonial property
    cardTestimonial: {
      type: String,
    },
    // card rating property
    cardRating: {
      type: Number,
    },
    // card name property
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

<style scoped>

</style>