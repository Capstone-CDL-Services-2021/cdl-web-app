<template>
  <div>
    <manager-header/>
    <manager-navbar/>

    <b-jumbotron bg-variant="dark" border-variant="dark">
      <div>
        <b-jumbotron>
          <h1 style="text-align: center">Projects</h1>

          <b-button v-on:click='hidden=!hidden'>add a project</b-button>
          <ProjectForm v-if="!hidden"></ProjectForm>
          <div hidden> {{ loadAllProjects }}</div>
          <br><br>

          <div class="table-responsive-md">
            <table class="minimalistBlack">
              <thead>
              <tr>
                <th>Service</th>
                <th>Customer Name</th>
                <th>Customer Email</th>
                <th>Customer Address</th>
                <th>Date Requested</th>
                <th>Completed</th>
                <th>Mark complete</th>
                <th>Delete project</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="project in ProjectList" :key="project.id">
                <td>{{ project.Type_Of_Service }}</td>
                <td>{{ project.Customer_Name }}</td>
                <td> {{ project.Customer_Email }}</td>
                <td> {{ project.Customer_Address }}</td>
                <td> {{ project.Date_Requested }}</td>
                <td>
                  <div v-if="project.Completed == 0"> No</div>
                  <div v-if="project.Completed == 1"> Yes</div>
                </td>
                <td>
                  <div v-if="project.Completed == 0">
                    <b-button v-on:click="alterComplete(project.id)" @click="showAlert">Mark Complete</b-button>
                  </div>
                </td>
                <td>
                  <b-button v-on:click="deleteProject(project.id)">Delete</b-button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>


        </b-jumbotron>
      </div>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

    </b-jumbotron>


  </div>
</template>

<script>

import managerHeader from "@/components/managerHeader";
import managerNavbar from "@/components/managerNavbar";
import axios from "axios";
import {mapGetters} from "vuex";
import ProjectForm from "@/components/ProjectForm";


export default {
  name: "managerProjects",
  components: {
    managerHeader,
    managerNavbar,
    ProjectForm
  },
  methods: {
    async alterComplete(id) {
      try {
        const response = await axios.post('alterComplete', {
              id: id
            }
        );
        console.log(response);
        alert(response.data.message)
        ;
        setTimeout(location.reload.bind(location), 0);
      } catch
          (e) {
        this.error = 'Error occurred';
      }
    },
    async deleteProject(id) {
      try {
        const response = await axios.post('deleteProject', {
              id: id
            }
        );
        console.log(response);
        alert("Project deleted");
        setTimeout(location.reload.bind(location), 0);
      } catch
          (e) {
        this.error = 'Error occurred';
      }
    }
  },
  data() {
    return {
      ProjectList: [],
      hidden: true
    }
  },
  computed: {
    ...
        mapGetters(['user']),
    loadAllProjects() {
      // eslint-disable-next-line vue/no-async-in-computed-properties
      return (axios.post('getAllProjects')).then(response => this.ProjectList = response.data)
    }
  }
}

</script>

<style scoped>

table.minimalistBlack {
  border: 0px solid #000000;
  width: 100%;
  text-align: center;
  border-collapse: collapse;
}

table.minimalistBlack td, table.minimalistBlack th {
  border: 1px solid #000000;
  padding: 4px 10px;
}

table.minimalistBlack tbody td {
  font-size: 13px;
}

table.minimalistBlack thead {
  background: #CFCFCF;
  background: -moz-linear-gradient(top, #dbdbdb 0%, #d3d3d3 66%, #CFCFCF 100%);
  background: -webkit-linear-gradient(top, #dbdbdb 0%, #d3d3d3 66%, #CFCFCF 100%);
  background: linear-gradient(to bottom, #dbdbdb 0%, #d3d3d3 66%, #CFCFCF 100%);
  border-bottom: 3px solid #000000;
}

table.minimalistBlack thead th {
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  text-align: left;
}

table.minimalistBlack tfoot {
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  border-top: 3px solid #000000;
}

table.minimalistBlack tfoot td {
  font-size: 14px;
}
</style>