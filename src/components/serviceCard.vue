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


<!-- Component that creates a service card object -->
<template>
  <div>
    <!-- card containing service card data -->
    <b-card no-body class="overflow-hidden card">
      <b-row no-gutters>

        <b-col>
          <!-- card image -->
          <b-card-img :src="cardImage" alt="Image" class="rounded-0"></b-card-img>
        </b-col>

        <b-col>
          <!-- card title -->
          <b-card-body :title="cardTitleA">

            <!-- card text -->
            <b-card-text style="max-width: 200px; align-self: center">
              {{ cardDesc }}
              <br/>
            </b-card-text>

            <!-- request button -->
            <b-button variant="primary" v-on:click="redirect('/book')">Request</b-button>
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

    /**
     * cardImage() - method that returns the card image link
     * @returns {String} - card image link
     */
    cardImage() {
      return this.cardImg;
    },

    /**
     * cardTitleA() - method that returns the card title
     * @returns {String} - card title
     */
    cardTitleA() {
      return this.cardTitle;
    }
  },

  methods: {

    /**
     * this method is to redirect based on the id parameter input
     * @param id a String value that is a path
     */
    redirect(id) {
      this.$router.push(id)
    }
  }

}
</script>

<!-- CSS Style Script -->
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