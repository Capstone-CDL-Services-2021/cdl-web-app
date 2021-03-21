<template>
  <div>

    <cdl_header/>
    <userCheck/>

    <div style="padding:30px">
      <h1 style="text-decoration: underline">Testimonials</h1>
      <div class="row" style="margin-top: 2rem">
        <div class="col-sm-20" style="padding: 0px 10px 0px 10px">
          <testimonial-card card-img="https://images.unsplash.com/photo-1483385573908-0a2108937c4a"
                            card-title="Snow Shoveling"
                            card-desc="Did a great job of Shoveling the Snow, even took out any ice that was stuck to the driveway!"
                            card-rating="4/5 (Stars)"
                            client-name="John Smith"/>
          <br/>
        </div>

        <div class="col-sm-20" style="padding: 0px 10px 0px 10px">
          <testimonial-card card-img="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b"
                            card-title="Taking out Trash"
                            card-desc="Came and took all the unwanted stuff from my garage with ease, was very helpful"
                            card-rating="4/5 (Stars)"
                            client-name="John Smith"/>
          <br/>
        </div>

        <div class="col-sm-20" style="padding: 0px 10px 0px 10px">
          <testimonial-card
              card-img="https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.0-9/10696191_597175513742200_6232360445896381313_n.jpg?_nc_cat=108&ccb=3&_nc_sid=8bfeb9&_nc_ohc=dl0NMKO2IDQAX91Y78h&_nc_ht=scontent.fyyc2-1.fna&oh=a14ee56aa163f4adae847dc6afb653eb&oe=605744BA"
              card-title="Home Renovations"
              card-desc="Needed my kitchen cabinets redone. He arrived and gave me a quote. 2 Weeks later and they look stunningly beautiful"
              card-rating="4/5 (Stars)"
              client-name="John Smith"/>
          <br/>
        </div>

      </div>

    </div>
    <div v-if="user"><div v-if="user.email !== 'manager@cdlservices.com'"><ContactUs/></div></div>
    <div v-else><ContactUs/></div>
  </div>
</template>

<script>
import cdl_header from "@/components/cdl_header";
import TestimonialCard from "@/components/testimonialCard";
import {mapGetters} from "vuex";
import UserCheck from "@/components/userCheck";
import ContactUs from "@/components/contactUs";


export default {
  name: "Testimonials",
  components: {
    ContactUs,
    UserCheck,
    TestimonialCard,
    cdl_header,
  },
  methods: {
    redirect(id) {
      this.$router.push(id)
    }
  },
  computed: {
    ...mapGetters(['user'])
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


</style>