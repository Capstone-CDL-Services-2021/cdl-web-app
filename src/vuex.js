/**
 * import Vue and Vuex plugins
 */
import Vue from 'vue'
import Vuex from 'vuex'

/**
 * Vue uses the Vuex plugins
 */
Vue.use(Vuex);

/**
 * Declare and instantiate state of user Object
 *
 * @type {{user: null}}
 */
const state = {
    user: null
};

/**
 * Create a local store data space from Vuex package
 * Store options comes with: state, getters, actions, mutations
 */
const store = new Vuex.Store({
    /**
     * state of the user
     */
    state,
    /**
     * getter methods that grabs the user's state and stores into store session
     */
    getters:{
        user: (state) => {
            return state.user;
        }
    },
    /**
     * commit from getters and store into user session
     */
    actions:{
        user(context,user){
            context.commit('user',user);
        }
    },
    /**
     * changes the state of session user
     * logged in or logged out
     * and changes the session user
     */
    mutations:{
        user(state,user){
            state.user = user;
        }
    }
});

/**
 * export the store dependencies for other
 * components to use
 */
export default store;