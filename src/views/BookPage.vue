<template>
  <div>

    <cdl_header/>
    <navbar/>

    <h2>Book Service Page</h2>

    <b-container class="row1" style="margin-left: 20rem">
      <b-row>
        <b-col  style="padding-right: 20rem">
          <template>
            <b-row>
              <b-col>
                <b-calendar block :readonly="readonly"></b-calendar>
              </b-col>
            </b-row>
          </template>
        </b-col>

        <b-col>
          <template>
            <div>
              <b-form @submit="onSubmit">
                <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                  <b-form-input
                      id="input-2"
                      v-model="form.name"
                      placeholder="Enter Full Name"
                      required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                    description="We'll never share your email with anyone else."
                >
                  <b-form-input
                      id="input-1"
                      v-model="form.email"
                      type="email"
                      placeholder="Enter email"
                      required
                  ></b-form-input>
                </b-form-group>


                <b-form-group id="input-group-3" label="Type of Service: " label-for="input-3">
                  <b-form-select
                      id="input-3"
                      v-model="form.service"
                      :options="services"
                      required
                  ></b-form-select>
                </b-form-group>



                <b-form-group
                    id="input-group-4"
                    label="Date:"
                    label-for="input-1"
                >
                  <b-form-input
                      id="input-4"
                      v-model="form.date"
                      type="date"
                      required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="input-group-5"
                    label="Street Address:"
                    label-for="input-5"
                >
                  <b-form-input
                      id="input-5"
                      v-model="form.streetAddress"
                      type="address"
                      placeholder="Enter Street Address"
                      required
                  ></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Submit</b-button>
              </b-form>

            </div>
          </template>
        </b-col>
      </b-row>
    </b-container>
  </div>


</template>

<script>
import cdl_header from "@/components/cdl_header";
import navbar from "@/components/navbar";
export default {
  name: "BookPage",
  components: {navbar, cdl_header},
  data() {
    return {
      form: {
        name: '',
        email: '',
        service: null,
        date: '',
        streetAddress: ''
      },
      services: [{ text: 'Select One', value: null }, 'Service 1', 'Service 2', 'Service 3', 'Service 4'],

    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    }
  },
  computed: {
    readonly() {
      return this.state === 'readonly'
    }
  }
}


</script>

<style scoped>
.nav-item.nav-item.nav-item a {
  color: white;
  padding: 20px;
  border: 3px solid white;
}


* {
  margin: 0;
  padding: 0;
}

html,
body {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
}

body {
  background: #FFF;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 400;
}

.buttonA {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  /*   padding: 2em 0em; */
}


.btn {
  letter-spacing: 0.1em;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  background-image: linear-gradient(white, green);


}

.btn:hover {
  text-decoration: none;
}

/*btn_background*/
.effect01 {
  color: #FFF;
  border: 2px solid #FFF;
  box-shadow: 0px 0px 0px 1px #000 inset;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease-in-out;
}

.effect01:hover {
  border: 4px solid #666;
  background-color: #FFF;
  box-shadow: 0px 0px 0px 4px #EEE inset;
}

/*btn_text*/
.effect01 span {
  transition: all 0.2s ease-out;
  z-index: 2;
}

.effect01:hover span {
  letter-spacing: 0.13em;
  color: #333;
}

/*highlight*/
.effect01:after {
  background: #FFF;
  border: 0px solid #000;
  content: "";
  height: 155px;
  left: -75px;
  opacity: .8;
  position: absolute;
  top: -50px;
  -webkit-transform: rotate(35deg);
  transform: rotate(35deg);
  width: 50px;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1); /*easeOutCirc*/
  z-index: 1;
}

.effect01:hover:after {
  background: #FFF;
  border: 20px solid #000;
  opacity: 0;
  left: 120%;
  -webkit-transform: rotate(40deg);
  transform: rotate(40deg);
}

</style>