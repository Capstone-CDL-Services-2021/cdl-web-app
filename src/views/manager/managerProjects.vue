<template>
  <div>
    <!-- Displays the Manager header and navigation bar by calling the components -->
    <manager-header/>
    <manager-navbar/>
    <!-- Used to encase everything and give the dark background color-->
    <b-jumbotron bg-variant="dark" border-variant="dark">
      <div>
        <!-- Holds the ServiceCards table, giving the white background-->
        <b-jumbotron>
          <h1 style="text-align: center">Projects</h1>
<!--          Projects Button-->
          <b-button v-on:click='hidden=!hidden'>Add a New Project</b-button>
<!--          Check for hidden boolean to be true-->
          <ProjectForm v-if="!hidden"></ProjectForm>
<!--          Hidden loadallprojects method call-->
          <div hidden> {{ loadAllProjects }}</div>
          <br><br>

<!--          projects table-->
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
<!--              Print each project into a table element -->
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
<!--                  Each project has their own buttons and the buttons are assigned with the project ID-->
                  <div v-if="project.Completed == 0">
                    <b-button v-on:click="alterComplete(project.id)">Mark Complete</b-button>
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
    /**
     * alterComplete - Post Method call to the backend to change the status of the project
     * @param id - The id of the project
     * @returns {Promise<void>} - Returns the response from the backend
     */
    async alterComplete(id) {
      try {
        const response = await axios.post('alterComplete', {
              id: id
            }
        );
        console.log(response);
        alert("This project is now complete")
        ;
        setTimeout(location.reload.bind(location), 0);
      } catch
          (e) {
        this.error = 'Error occurred';
      }
    },
    /**
     * deleteProject - Post Method call to the backend to delete the specified project
     * @param id - Project ID being deleted
     * @returns {Promise<void>} - Returns the response from the backend
     */
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
      ProjectList: [], // ProjectList Array
      hidden: true
    }
  },
  computed: {
    ...
        mapGetters(['user']), // Returns all the users in the database
    loadAllProjects() { // Post Method call to the backend to retrieve all the projects in the database
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