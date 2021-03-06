<template>
  <div>
    <cdl_header/>
    <navbar/>


    <div class="auth-wrapper">
      <div class="auth-inner">
        <RegisterForm/>
      </div>
    </div>
  </div>


</template>

<script>
  import navbar from "@/components/navbar";
  import cdl_header from "@/components/cdl_header";
  import RegisterForm from "@/components/RegisterForm";

export default {
  name: "Register",
  components: {
    navbar,
    cdl_header,
    RegisterForm
  }

}
</script>

<style scoped>
  * {
      box-sizing: border-box;
  }

.auth-wrapper{
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  padding-top: 50px;
}

  .auth-inner{
    width: 450px;
    margin: auto;
    background: aqua;
    padding: 40px 55px 40px 55px;
    border-radius: 15px;
    transition: all .3s;
  }

</style>