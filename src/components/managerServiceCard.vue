<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 570px">
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

            <br/>
            <br/>

            <b-button variant="primary">Edit</b-button>
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

</style>