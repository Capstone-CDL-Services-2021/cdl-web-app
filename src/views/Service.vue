<template>
  <div>


    <cdl_header/>
    <navbar/>

    <div class="services" style="padding:30px">
      <div class="row" style="margin-top: 2rem">
        <div class="col-sm-20" style="padding: 0px 10px 0px 10px">

          <serviceCard card-img="https://images.unsplash.com/photo-1483385573908-0a2108937c4a"
                       card-title="Snow Shoveling"
                       card-desc="I will shovel your sidewalk/driveway during the cold winter season!"/>

          <br/>

          <serviceCard card-img="https://academy.getjobber.com/wp-content/uploads/2019/07/Window-Cleaning-Supplies-1.jpg"
                       card-title="Window Cleaning"
                       card-desc="Clean Windows"/>

          <br/>
          <br/>

        </div>
        <div class="col-sm-20" style="padding: 0px 10px 0px 10px">

          <serviceCard card-img="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b" card-title="Taking out the Trash" card-desc="I will take out your trash for you!"/>

          <br/>

          <serviceCard card-img="https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.0-9/20770455_1299626443497100_6311196978470980521_n.jpg?_nc_cat=110&ccb=3&_nc_sid=8bfeb9&_nc_ohc=UpHC1QXv9KoAX-6rv2-&_nc_ht=scontent.fyyc2-1.fna&oh=e4f7ff353c58015bb357e43ffeaa3404&oe=6058574F"
                       card-title="Roof & Siding Repair"
                       card-desc="Roof & Siding Service"/>

          <br/>

          <serviceCard card-img="https://lda.lowes.com/is/image/Lowes/ht_install-gutter-screen-hero?scl=1"
                       card-title="Gutter Guard Installation"
                       card-desc="Gutter Guard Installation Service"/>

          <br/>

          <serviceCard card-img="https://cleanmyspace.com/wp-content/uploads/2017/08/how-to-hire-a-cleaning-service.jpg"
                       card-title="House Cleaning & Painting"
                       card-desc="Clean up messy houses or paint interior walls"/>

          <br/>

          <serviceCard card-img="https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.0-9/10629755_595350333924718_4478612987345916411_n.jpg?_nc_cat=111&ccb=3&_nc_sid=8bfeb9&_nc_ohc=Y9R5iljvdlIAX9Q-5r5&_nc_ht=scontent.fyyc2-1.fna&oh=73c9e3f981517f42f7cf6992a908e802&oe=6059CCBD"
                       card-title="Demolition"
                       card-desc="Demolish sites and dispose of rubble"/>
          <br/>

          <serviceCard card-img="https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.0-9/21106325_1311368295656248_5714666004206838660_n.jpg?_nc_cat=110&ccb=3&_nc_sid=8bfeb9&_nc_ohc=qzV-kDur4rcAX9UDhZX&_nc_ht=scontent.fyyc2-1.fna&oh=85d3a4c4ae6aa32df76986f3d01f8e6b&oe=6059DC77"
                       card-title="Stone, Rock Garden, Bark Install"
                       card-desc="Install a Stone, Rock or Bark Garden"/>
        </div>
        <div class="col-sm-20" style="padding: 0px 10px 0px 10px">

          <serviceCard card-img="https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.0-9/10696191_597175513742200_6232360445896381313_n.jpg?_nc_cat=108&ccb=3&_nc_sid=8bfeb9&_nc_ohc=dl0NMKO2IDQAX91Y78h&_nc_ht=scontent.fyyc2-1.fna&oh=a14ee56aa163f4adae847dc6afb653eb&oe=605744BA"
                       card-title="Home Renovation"
                       card-desc="Home Renovation Service"/>

          <br/>

          <serviceCard card-img="https://inoutcarwash.com/wp-content/uploads/2018/07/car-detailing-1080x675.jpg"
                       card-title="Car Detailing"
                       card-desc="Wash, Vacuum, Polish & Wax Service"/>

          <br/>

          <serviceCard card-img="https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.0-9/20881889_1299645000161911_4346000721402873656_n.jpg?_nc_cat=105&ccb=3&_nc_sid=8bfeb9&_nc_ohc=qVjmZleJRo8AX9eJppB&_nc_ht=scontent.fyyc2-1.fna&oh=6ff07e2ca19e2d3aca161a4a503ef71f&oe=605A4607"
                       card-title="Christmas Lights Install or Removal"
                       card-desc="Will remove or install your christmas lights"/>

          <br/>

          <serviceCard card-img="https://s3.amazonaws.com/greenpal-production/posts/header_images/000/000/139/original/Image_1.jpg?1570548614"
                       card-title="Trimming"
                       card-desc="Will trim your trees"/>
          <br/>

          <serviceCard card-img="http://diggerodell.com/wp-content/uploads/2017/08/AdobeStock_102051247-1080x675.jpeg"
                       card-title="Pruning"
                       card-desc="Pruning your trees"/>
          <br/>

          <serviceCard card-img="https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.0-9/10676167_612398335553251_3727732449178655280_n.jpg?_nc_cat=107&ccb=3&_nc_sid=8bfeb9&_nc_ohc=B6yM1GaTkMcAX8D5PSf&_nc_ht=scontent.fyyc2-1.fna&oh=afb705e5ab2a9f48fdc102fb9c86cd18&oe=605738BD"
                       card-title="Topping"
                       card-desc="Topping on landscape"/>
          <br/>

          <serviceCard card-img="https://images.immediate.co.uk/production/volatile/sites/10/2018/02/875d867d-e22c-4041-92c0-fc6862263aee-956c556.jpg?quality=90&resize=768%2C574"
                       card-title="Mow Lawn, Top Soil & Fertilizers"
                       card-desc="Mow your lawn, Filling in low spots with top soil and spreading fertilizer"/>
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