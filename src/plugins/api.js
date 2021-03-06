import axios from "@/plugins/axios";

const api = {

   get(url, params = {}, cancel_token = null) {
      return new Promise((resolve, reject) => {
         axios
            .get(url, {
               params,
               cancelToken: cancel_token ? cancel_token.token : null,
            })
            .then((res) => {
               resolve(res.data);
            })
            .catch((err) => {
               if (axios.isCancel(err)) {
                  return reject("canceled");
               }
               reject(err);
            });
      });
   },

   post(url, data = {}) {
      return new Promise((resolve, reject) => {
         axios
            .post(url, data)
            .then((res) => {
               resolve(res.data);
            })
            .catch((err) => {
               reject(err);
            });
      });
   },

   put(url, data = {}) {
   },

   delete(url, data = {}) {
   },

};

export default {
   AUTH : {
      // register
      register(payload) {
         return api.post(`/sign-up`, payload)
      },
      // login
      login(payload) {
         return api.post(`/sign-in`, payload)
      },
      //fethuser
      fetchUser() {
         return api.get(`/user`)
      }
   }
}
