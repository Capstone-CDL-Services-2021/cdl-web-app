<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 35rem; min-width:35rem">
      <b-row no-gutters>
        <b-col>
          <b-card-img :src="cardImage" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col>
          <b-card-body :title="cardTitleA">
            <b-card-text>
              {{cardDesc}}
              <br/>
            </b-card-text>
            <b-button variant="primary" v-on:click="redirect('/book')">Request</b-button>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
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
    }
  }

}
</script>

<style scoped>
img {
  width: 500rem;
  height: 500rem;
  max-width: 20rem;
  max-height: 25rem;
  object-fit: cover;
}

</style>