<template>
  <div>

    <cdl_header/>
    <navbar/>

    <br/>

    <h1 style="text-decoration: underline">Contact Us!</h1>

    <template>
      <div>
        <div class="col-sm-20">
          <b-form @submit.prevent="onSubmit">
            <div v-if="message" class="alert alert-success" role="alert">
              {{message}}
            </div>
            <error v-if="error" :error="error"></error>
            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
              <b-form-input
                  id="input-1"
                  v-model="form.name"
                  placeholder="Enter Full Name"
                  required></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else.">

              <b-form-input
                  id="input-2"
                  v-model="form.email"
                  type="email"
                  placeholder="Enter email"
                  required></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-2"
                label="Question"
                label-for="input-2"
                description="Please put your Question Below!">
            </b-form-group>

            <b-form-textarea
                id="input-3"
                v-model="form.question"
                placeholder="Enter Question Here!"
                rows="4"
                max-rows="8"
                required></b-form-textarea>
            <br/>
            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import cdl_header from "@/components/cdl_header";
import axios from "axios";

export default {
  name: "Service",
  components: {
    navbar,
    cdl_header,
    Error
  },
  data() {
    return {
      message:'',
      error:'',
      form: {
        name: '',
        email: '',
        question: '',
      },
    }
  },
  methods: {
    async onSubmit() {
      try{
        await axios.post('contactUs',{
          name: this.form.name,
          email: this.form.email,
          question: this.form.question
        });
        this.message= 'Your question has been sent'
        this.error=''
      }catch(e){
        this.error= 'Error occurred'
        this.message='';
      }
    },
    redirect(id) {
      this.$router.push(id)
    }
  },
}


</script>

<style scoped>
.nav-item.nav-item.nav-item a {
  color: white;
  padding: 20px;
  border: 3px solid white;
}

body {
  background: lightblue;
  text-align: center;
  box-sizing: border-box;
  font-family: "Lato", Sans-serif;
  /*position:relative;*/
}

#input-1 {
  width: 25%;
  margin-left: auto;
  margin-right: auto;
}
#input-2 {
  width: 25%;
  margin-left: auto;
  margin-right: auto;
}
#input-3 {
  width: 25%;
  margin-left: auto;
  margin-right: auto;
}
</style>