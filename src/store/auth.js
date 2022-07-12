import api from "../plugins/api";
import cookie from "@/plugins/cookie";
let token = cookie.get('test_token');
//  STATE
const state = {
   token: token ? token : '',
   user: null,
};

// GETTERS (COMPUTED)
const getters = {
   getToken() {
      return state.token;
   },
   getUser() {
      return state.user;
   }
};

// MUTATIONS (SETTER)
const mutations = {
   // SET TOKEN
   setToken(state, payload) {
      state.token = payload;
      cookie.set("test_token", payload, {
         expires: 7,
      });
   },
   // SET USER
   setUser(state, payload) {
      state.user = payload;
   },
   // REMOVE USER
   removeUser(state) {
      state.user = null;
   },
   // REMOVE TOKEN
   removeToken(state) {
      state.token = "";
      cookie.remove("test_token");
   },
};

//  ACTION
const actions = {

   // REGISTER
   async register({ commit }, payload) {
      try {
         let res = await api.AUTH.register(payload);
         let { status, data } = res;
         if (status && data) {
            commit("setToken", data.token);
         }
         return res;
      }
      catch (err) {
         throw err;
      }
   },

   // LOGIN
   async login({ commit }, payload) {
      try {
         let res = await api.AUTH.login(payload);
         let { status, data } = res;
         if (status, data) {
            commit('setToken', data.token);
         }
         return res;
      }
      catch (err) {
         throw err;
      }
   },

   // FETCH USER
   async fetchUser({ commit }) {
      try {
         let res = await api.AUTH.fetchUser();
         let { data } = res;
         if (data) {
            commit('setUser', data);
         }
         return res;
      }
      catch (err) {
         throw err;
      }
   },

   // LOG OUT
   logout({ commit }) {
      commit("removeUser");
      commit("removeToken");
   },
};

export default {
   state,
   getters,
   mutations,
   actions,
   namespaced: true
};