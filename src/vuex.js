import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    user: null,
    services: []
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
        addService(state, payload) {
            state.commit("addService", payload)
        },
        removeService(state, payload) {
            state.commit("removeService", payload)
        }
    },
    mutations:{
        user(state,user){
            state.user = user;
        },
        addService(state, payload) {
            state.services.push(payload);
        },
        removeService(state, payload) {
            state.services.splice(payload, 1);
        }
    }
});


export default store;