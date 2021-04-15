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


<!-- Component that generates a form for the user to fill out for testimonials -->
<template>
  <!-- container-->
  <div class="container-sm">

    <!-- testimonial form -->
    <form @submit.prevent="testimonialHandler">
      <br/><br/><br/>

      <!-- Service provided -->
      <div class="form-group">
        <label>Service Provided:</label>
        <input type="text" class="form-control" v-model="title" placeholder="Ex. Snow Shovelling"/>
      </div>

      <!-- testimonial review -->
      <div class="form-group">
        <label>Testimonial</label>
        <input type="text" class="form-control" v-model="testimonial" placeholder="Enter your review here!"/>
      </div>

      <!-- star rating -->
      <div class="form-group container-sm">
        <label>Rating</label>
        <div class="txt-center">
          <form>
            <div class="rating">
              <input id="star5" name="star" type="radio" v-model="rating" value="5" class="radio-btn hide"/>
              <label for="star5">☆</label>
              <input id="star4" name="star" type="radio" v-model="rating" value="4" class="radio-btn hide"/>
              <label for="star4">☆</label>
              <input id="star3" name="star" type="radio" v-model="rating" value="3" class="radio-btn hide"/>
              <label for="star3">☆</label>
              <input id="star2" name="star" type="radio" v-model="rating" value="2" class="radio-btn hide"/>
              <label for="star2">☆</label>
              <input id="star1" name="star" type="radio" v-model="rating" value="1" class="radio-btn hide"/>
              <label for="star1">☆</label>
              <div class="clear"></div>
            </div>
          </form>
        </div>
      </div>

      <!-- client name -->
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" v-model="name" placeholder="Ex. John Smith"/>
      </div>

      <button class="btn-primary btn-block">Submit</button>
    </form>
  </div>
</template>

<script>

/**
 * import components, views, and dependencies
 */
import axios from 'axios'

/**
 * export components, views, and methods from the imports
 */
export default {
  name: "TestimonialForm",

  /**
   * return data to declared and instantiated variables
   */
  data() {
    return {
      title: '',
      testimonial: '',
      rating: null,
      name: ''
    }
  },

  methods: {

    /**
     * testimonialHandler() - handles the testimonial form and adds the entry to the testimonial database
     * @returns {Promise<void>}
     * returns nothing, returns to page and cancels whole modal event
     */
    async testimonialHandler() {
      try {
        const response = await axios.post('addTestimonial', {
          title: this.title,
          testimonial: this.testimonial,
          rating: this.rating,
          name: this.name,

        });
        console.log(response);
        alert(response.data.message);
        setTimeout(location.reload.bind(location), 0);
      } catch (e) {
        this.error = 'Error occurred';
      }
    }
  }
}
</script>

<!-- CSS Style Script -->
<style scoped>
.container-sm {
  max-width: 400px;
}

.txt-center {
  text-align: center;
}

.hide {
  display: none;
}

.clear {
  float: none;
  clear: both;
}

.rating {
  width: 90px;
  unicode-bidi: bidi-override;
  direction: rtl;
  text-align: left;
  position: relative;
}

.rating > label {
  float: right;
  display: inline;
  padding: 0;
  margin: 0;
  position: relative;
  width: 1.1em;
  cursor: pointer;
  color: #000;
}

.rating > label:hover,
.rating > label:hover ~ label,
.rating > input.radio-btn:checked ~ label {
  color: transparent;
}

.rating > label:hover:before,
.rating > label:hover ~ label:before,
.rating > input.radio-btn:checked ~ label:before,
.rating > input.radio-btn:checked ~ label:before {
  content: "\2605";
  position: absolute;
  left: 0;
  color: #FFD700;
}

.rating {
  background-color: white;
}
</style>