<template>
  <form @submit.prevent="testimonialHandler">
    <h1>Testimonial</h1>

    <div class = "form-group">
      <label>Service provided:</label>
      <input type="text" class="form-control" v-model="title" placeholder="Snow shovelling"/>
    </div>

    <div class = "form-group">
      <label>testimonial</label>
      <input type="text" class="form-control" v-model="testimonial" placeholder="testimonial"/>
    </div>

    <div class = "form-group">
      <label>Rating</label>
      <input type="number" class="form-control" v-model="rating" placeholder="rating out of 5" min="0" max="5"/>
    </div>

    <div class = "form-group">
      <label>Name</label>
      <input type="text" class="form-control" v-model="name" placeholder="John Smith"/>
    </div>

    <button class="btn-primary btn-block">Submit</button>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  name: "TestimonialForm",
  components:{
  },
  data() {
    return {
      title: '',
      testimonial: '',
      rating: null,
      name: ''
    }
  },
  methods: {
    async testimonialHandler(){
      try {
        const response = await axios.post('addTestimonial', {
          title: this.title,
          testimonial: this.testimonial,
          rating: this.rating,
          name: this.name,

        });
        console.log(response);
        alert(response.data.message);
        this.$router.push('/');
      }catch(e){
        this.error ='Error occurred';
      }
    }
  }}
</script>

<style scoped>

</style>