import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex);

//create state that holds data
const state = {
    currentUser: null
};

//update state data through mutations

const mutations = {
    SET_USER(state,user){
        state.currentuser = user;
    }
};

//create actions for mutations with necessary data
const actions = {
    setUser(state,user){
        state.commit('SET_USER',user);
    }
};
 
//get data from state

const getters = {
    currentUser: state => state.currentUser
};

// create vuex store
const store = new vuex.Store({
    state,
    mutations,
    actions,
    getters

});

export default store;