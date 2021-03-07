import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    user: null,
    services: [{title: "Service 1", desc: "nothing to see here", img:"https://images.unsplash.com/photo-1483385573908-0a2108937c4a"},
        {title: "Service 2", desc: "nothing to see here", img:"https://images.unsplash.com/photo-1483385573908-0a2108937c4a"},
        {title: "Service 3", desc: "nothing to see here", img:"https://images.unsplash.com/photo-1483385573908-0a2108937c4a"},
        {title: "Service 4", desc: "nothing to see here", img:"https://images.unsplash.com/photo-1483385573908-0a2108937c4a"}]
};

const store = new Vuex.Store({
    state,
    getters:{
        user: (state) => {
            return state.user;
        },
        getServices:(state) => state.services
    },
    actions:{
        user(context,user){
            context.commit('user',user);
        },
        addService(state, payload){
            state.commit("addService", payload)
        },
        removeService(state,payload){
            state.commit("removeService", payload)
        }
    },
    mutations:{
        user(state,user){
            state.user = user;
        },
        addService(state, payload){
            state.services.push(payload);
        }
    }
});


export default store;