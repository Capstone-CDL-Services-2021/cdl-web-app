<template>
  <div>


    <cdl_header/>
    <navbar/>

    <div class="services" style="margin-left: 5rem">
      <div class="row">
        <div class="col-sm-20" style="padding: 0px 10px 0px 10px">

          <serviceCard card-img="https://images.unsplash.com/photo-1483385573908-0a2108937c4a"
                       card-title="Snow Shoveling"
                       card-desc="I will shovel your sidewalk/driveway during the cold winter season!"/>

          <br/>

<!--          <serviceCard/>-->

          <br/>

<!--          <serviceCard/>-->

        </div>
        <div class="col-sm-20" style="padding: 0px 10px 0px 10px">

          <serviceCard card-img="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b" card-title="Taking out the Trash" card-desc="I will take out your trash for you!"/>

          <br/>

<!--          <serviceCard/>-->

          <br/>

<!--          <serviceCard/>-->

        </div>
        <div class="col-sm-20" style="padding: 0px 10px 0px 10px">


          <serviceCard card-img="https://images.unsplash.com/photo-1589398284280-0490d847ad48" card-title="Gutter Cleaning" card-desc="I will clean your gutters!"/>

          <br/>

<!--          <serviceCard/>-->

          <br/>

<!--          <serviceCard/>-->

        </div>


      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import cdl_header from "@/components/cdl_header";
import serviceCard from "@/components/serviceCard";

export default {
  name: "Service",
  components: {
    navbar,
    cdl_header,
    serviceCard
  }
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

.btn:link,
.btn:visited {
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  top: 0;
  left: 0;
  color: white;
  /*padding:20px 40px;*/
  border-radius: 100px;
  display: inline-block;
  transition: all .5s;
  font-family: "Corbel Light";
}

.btn-white {
  background: green;
  color: #000;
}

.btn:active {
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  transform: translateY(-1px);
}

.btn-bottom-animation-1 {
  animation: comeFromBottom 1s ease-out .8s;
}

.btn::after {
  content: "";
  text-decoration: none;
  text-transform: uppercase;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 100px;
  display: inline-block;
  z-index: -1;
  transition: all .5s;
}

.btn-white::after {
  background: green;
}

.btn-animation-1:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}

@keyframes comeFromBottom {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}


</style>