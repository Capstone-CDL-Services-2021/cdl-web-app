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
            <h5>Client Name: {{clientName}} </h5>
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
      type: String,
    },
    clientName: {
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