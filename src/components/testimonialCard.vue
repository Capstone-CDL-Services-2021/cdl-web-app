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
              Rating: {{cardRating}} / 5
            </b-card-text>
            <h5>Client Name: {{cardName}}</h5>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
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
      type: Number,
    },
    cardName: {
      type: String,
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
    }
  }

}
</script>

<style scoped>

</style>