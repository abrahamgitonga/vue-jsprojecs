import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex);

//create state that holds data
const state = {
    currentUser: 'tosh'
};

//update state data through mutations

const mutations = {};

//create actions for mutations with necessary data
const actions = {};
 
//get data from state

const getters = {
    currentUser: state => state.currentUser
};

// create vuex store
const store = new vuex.Store({
    state,
    mutations,
    actions,

})

export default store;