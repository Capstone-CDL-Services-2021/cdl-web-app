<template>
  <div>

    <cdl_header/>
    <navbar/>

    <h1 style="text-decoration: underline">Contact Us!</h1>

    <template>
      <div>
        <b-form @submit="onSubmit">
          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input
                id="input-2"
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
                id="input-1"
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

          <b-form-input
            id="input-2"
            v-model="form.question"
            placeholder="Enter Question Here!"
            required></b-form-input>
          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </div>
    </template>

  </div>
</template>

<script>
import navbar from "@/components/navbar";
import cdl_header from "@/components/cdl_header";

export default {
  name: "Service",
  components: {
    navbar,
    cdl_header
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        question: '',
      },
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
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

.align-bottom {
  text-align: right;
  text-anchor: end;
}

</style>