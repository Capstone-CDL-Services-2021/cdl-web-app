import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    user: null
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
        }
    },
    mutations:{
        user(state,user){
            state.user = user;
        }
    }
});


export default store;