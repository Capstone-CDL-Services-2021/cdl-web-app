<template>
  <div>

    <manager-header/>
    <manager-navbar/>

    <b-jumbotron bg-variant="dark" text-variant="white" border-variant="dark">
      <div class="column">
        <div class="row">
          <div class="col">
            <h1 style="text-decoration: underline">Adding a New Service</h1>

            <div class="form-group">
              <label>Service Name: </label>
              <label>
                <input type="text" class="form-control" v-model="service_name" placeholder="Service Name"/>
              </label>
            </div>

            <div class="form-group">
              <label>Service Description: </label>
              <label>
                <input type="text" class="form-control" v-model="service_desc" placeholder="Service Description">
              </label>
            </div>

            <div class="form-group">
              <label>Service Image: </label>
              <label>
                <b-form-file id="file-small" size="sm" class="form-control"></b-form-file>
              </label>
            </div>

            <div class="layout">
              <b-button variant="success" class="button" v-b-modal.accept>Save</b-button>
              <b-button variant="danger" class="button" v-on:click="redirect('/managerService')">Cancel</b-button>
            </div>
          </div>
        </div>
      </div>
    </b-jumbotron>


    <b-modal id="accept" size="sm" title="Service" ok-only>
      <p>Service has been Added</p>
    </b-modal>
  </div>
</template>

<script>
import managerNavbar from "@/components/managerNavbar";
import managerHeader from "@/components/managerHeader";

export default {
  name: "Edit",
  components: {
    managerHeader,
    managerNavbar
  },
  methods: {
    redirect(id) {
      this.$router.push(id)
    }
  }
}
</script>

<style scoped>

.button {
  margin: 10px;
}

.form-control {
  margin: 10px
}

</style>