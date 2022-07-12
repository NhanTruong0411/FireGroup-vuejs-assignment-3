import api from "../plugins/api";
import cookie from "@/plugins/cookie";
let token = cookie.get('access_token');
//  STATE
const state = {
   token: token ? token : ''
}

// GETTERS (COMPUTED)
const getter = {
}

// MUTATIONS (SETTER)
const mutations = {
   // setToken
   setToken(state, payload) {
      state.token = payload;
      cookie.set('access_token', payload, {expires: 7});
   }
}

//  ACTION
const actions = {

   // REGISTER
   async register({commit}, payload) {
      try {
         let res = await api.AUTH.register(payload);
         let {status, data} = res;
         if(status && data) {
            commit("setToken", data.Token)
         }
         return res;
      }
      catch(err) {
         throw err;
      }
   },

   // LOGIN
   async login( {commit}, payload ) {
      try {
         let res = await api.AUTH.login(payload);
         let {status, data} = res;
         if(status, data) {
            commit('setToken', data.token);
         }
         return res;
      }
      catch(err) {
         throw err;
      }
   }

}     

export default {
   state,
   getter,
   mutations,
   actions,
   namespaced: true
}