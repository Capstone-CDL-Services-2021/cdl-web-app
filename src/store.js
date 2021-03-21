import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        services: [
        {
            id: "1",
            name: "Snow Shoveling",
            image: "https://images.unsplash.com/photo-1483385573908-0a2108937c4a",
            description: "I will shovel your sidewalk/driveway during the cold winter season!"

        },
        {
            id: "2",
            name: "Window Cleaning",
            image: "https://academy.getjobber.com/wp-content/uploads/2019/07/Window-Cleaning-Supplies-1.jpg",
            description: "I will clean install Windows on your pc"

        },
        {
            id: "3",
            name: "Eavestrough Cleaning & Repair",
            image: "https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.0-9/14358961_987236554736092_2714216923982120222_n.jpg?_nc_cat=110&ccb=3&_nc_sid=8bfeb9&_nc_ohc=O1-xtVZY0gIAX--gNCN&_nc_ht=scontent.fyyc2-1.fna&oh=605a3660003b18665359cf52287227cb&oe=60578205",
            description: "Clean or Repair Eavestrough"

        },
        {
            id: "4",
            name: "Furniture Assembly",
            image: "https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.0-9/30739615_1529817477144661_7953714038402187264_n.jpg?_nc_cat=107&ccb=3&_nc_sid=8bfeb9&_nc_ohc=fG4AovTnbnMAX8eLC1w&_nc_ht=scontent.fyyc2-1.fna&oh=9aaaa2de39be21b0b8afc1ff57808e80&oe=6058F7FC",
            description: "Assembling Furniture Service"

        },
        {
            id: "5",
            name: "Junk Removal",
            image: "https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.0-9/10151814_595350103924741_5080574297474519119_n.jpg?_nc_cat=104&ccb=3&_nc_sid=8bfeb9&_nc_ohc=sDmDWxr7f-EAX_pwSYF&_nc_ht=scontent.fyyc2-1.fna&oh=81d774d92e3cb3715d02c689df97d48f&oe=605927E3",
            description: "Remove junk from the property"

        },
        {
            id: "6",
            name: "Roof & Siding Repair",
            image: "https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.0-9/20770455_1299626443497100_6311196978470980521_n.jpg?_nc_cat=110&ccb=3&_nc_sid=8bfeb9&_nc_ohc=UpHC1QXv9KoAX-6rv2-&_nc_ht=scontent.fyyc2-1.fna&oh=e4f7ff353c58015bb357e43ffeaa3404&oe=6058574F",
            description: "Roof & Siding Service"

        },
        {
            id: "7",
            name: "Gutter Guard Installation",
            image: "https://lda.lowes.com/is/image/Lowes/ht_install-gutter-screen-hero?scl=1",
            description: "Gutter Guard Installation Service"

        },
        {
            id: "8",
            name: "House Cleaning & Painting",
            image: "https://cleanmyspace.com/wp-content/uploads/2017/08/how-to-hire-a-cleaning-service.jpg",
            description: "Clean up messy houses or paint interior walls"

        },
        {
            id: "9",
            name: "Demolition",
            image: "https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.0-9/10629755_595350333924718_4478612987345916411_n.jpg?_nc_cat=111&ccb=3&_nc_sid=8bfeb9&_nc_ohc=Y9R5iljvdlIAX9Q-5r5&_nc_ht=scontent.fyyc2-1.fna&oh=73c9e3f981517f42f7cf6992a908e802&oe=6059CCBD",
            description: "Demolish sites and dispose of rubble"

        },
        {
            id: "10",
            name: "Stone, Rock Garden, Bark Install",
            image: "https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.0-9/21106325_1311368295656248_5714666004206838660_n.jpg?_nc_cat=110&ccb=3&_nc_sid=8bfeb9&_nc_ohc=qzV-kDur4rcAX9UDhZX&_nc_ht=scontent.fyyc2-1.fna&oh=85d3a4c4ae6aa32df76986f3d01f8e6b&oe=6059DC77",
            description: "Install a Stone, Rock or Bark Garden"

        },
        {
            id: "11",
            name: "Home Renovation",
            image: "https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.0-9/10696191_597175513742200_6232360445896381313_n.jpg?_nc_cat=108&ccb=3&_nc_sid=8bfeb9&_nc_ohc=dl0NMKO2IDQAX91Y78h&_nc_ht=scontent.fyyc2-1.fna&oh=a14ee56aa163f4adae847dc6afb653eb&oe=605744BA",
            description: "Home Renovation Service"

        },
        {
            id:"12",
            name: "Car Detailing",
            image: "https://inoutcarwash.com/wp-content/uploads/2018/07/car-detailing-1080x675.jpg",
            description: "Wash, Vacuum, Polish & Wax Service"

        },
        {
            id:"13",
            name: "Christmas Lights Install or Removal",
            image: "https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.0-9/20881889_1299645000161911_4346000721402873656_n.jpg?_nc_cat=105&ccb=3&_nc_sid=8bfeb9&_nc_ohc=qVjmZleJRo8AX9eJppB&_nc_ht=scontent.fyyc2-1.fna&oh=6ff07e2ca19e2d3aca161a4a503ef71f&oe=605A4607",
            description: "Can remove or install your christmas lights"

        },
        {
            id: "14",
            name: "Trimming",
            image: "https://s3.amazonaws.com/greenpal-production/posts/header_images/000/000/139/original/Image_1.jpg?1570548614",
            description: "Will trim your trees"

        },
        {
            id: "15",
            name: "Pruning",
            image: "http://diggerodell.com/wp-content/uploads/2017/08/AdobeStock_102051247-1080x675.jpeg",
            description: "Pruning your trees"

        },
        {
            id: "16",
            name: "Topping",
            image: "https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.0-9/10676167_612398335553251_3727732449178655280_n.jpg?_nc_cat=107&ccb=3&_nc_sid=8bfeb9&_nc_ohc=B6yM1GaTkMcAX8D5PSf&_nc_ht=scontent.fyyc2-1.fna&oh=afb705e5ab2a9f48fdc102fb9c86cd18&oe=605738BD",
            description: "Topping on landscape"

        },
        {
            id:"17",
            name: "Mow Lawn, Top Soil & Fertilizers",
            image: "https://images.immediate.co.uk/production/volatile/sites/10/2018/02/875d867d-e22c-4041-92c0-fc6862263aee-956c556.jpg?quality=90&resize=768%2C574",
            description: "Mow your lawn, Filling in low spots with top soil and spreading fertilizer"

        }],
    },
    mutations: {

        DELETE_SERVICE() {

        }
    },
    actions: {

    }
})