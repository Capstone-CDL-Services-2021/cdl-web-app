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

<template>
  <div>

    <!-- Calls the CDL header and Navigation bar -->
    <cdl_header/>
    <navbar/>

    <!-- Div classes to make the container for the form to be inside -->
    <b-jumbotron bg-variant="dark" border-variant="dark">
      <div class="auth-wrapper">
        <div class="auth-inner">

          <!-- Calls the registerForm component to display the form to register a new account -->
          <RegisterForm/>
        </div>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
/**
 * import components, views and dependencies
 */
import navbar from "@/components/navbar";
import cdl_header from "@/components/cdl_header";
import RegisterForm from "@/components/RegisterForm";

/**
 * export components, views and methods from the imports
 */
export default {
  name: "Register",
  components: {
    navbar,
    cdl_header,
    RegisterForm
  }
}
</script>

<!-- CSS style scripts -->
<style scoped>
* {
  box-sizing: border-box;
}

.auth-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  padding-top: 50px;
}

.auth-inner {
  width: 450px;
  margin: auto;
  background: green;
  padding: 40px 55px 40px 55px;
  border-radius: 15px;
  transition: all .3s;
  color: white;
}
</style>