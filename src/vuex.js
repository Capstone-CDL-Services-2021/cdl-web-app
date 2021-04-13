import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    user: null,
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
        }
    },
    actions:{
        user(context,user){
            context.commit('user',user);
        },
        orders(context,order){
            context.commit('orders',order);
        }
    },
    mutations:{
        user(state,user){
            state.user = user;
        },
        orders(state,order){
            state.order = order;
        }
    }
});


export default store;