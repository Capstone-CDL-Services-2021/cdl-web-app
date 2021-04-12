import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    user: null,
    services: [],
    orders: null
};

const store = new Vuex.Store({
    state,
    getters:{
        user: (state) => {
            return state.user;
        },
        orders: (state) => {
            return state.orders;
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
        },
        orders(context,order){
            context.commit('orders',order);
        }
    },
    mutations:{
        user(state,user){
            state.user = user;
        },
        addService(state, payload){
            state.services.push(payload);
        },
        removeService(state,payload){
            state.services.push(payload);
        },
        orders(state,order){
            state.order = order;
        }
    }
});


export default store;