import axios from "axios";

const state =
{
  error: false,
  loading: false,
  success: false,
  name:"",
  email:"",
  phone: "",
  details: "",

};

const mutations =
{
  setError(state, payload) {
    state.error = payload;
  },
  setLoading(state, payload) {
    state.loading = payload;
  },
  setSuccess(state, payload) {
    state.success = payload;
  },
  setName(state,payload){
      state.name = payload;
  },
  setEmail(state,payload){
      state.email = payload;
  },
  setPhone(state,payload){
      state.phone = payload;
  },
  setDetails(state, payload){
      state.details = payload
  }
};

const actions =
{
    postContact({ commit }) {
        commit("setLoading",true);
        commit("setError",null);
        commit("setSuccess",null);
        axios.post("http://35.224.191.225:8081/Backend/api/rest/mysql/contactForms",{
            name: state.name,
            email:state.email,
            phone: state.phone,
            details: state.details,
        })
        .then(function (response) {
            console.log(response);
            commit("setSuccess",true);
          })
          .catch(function (error) {
            commit("setError",true);
            console.log(error);
          })
          .finally(function () {
            commit("setLoading",false);
          });
          
    },

}


export const contactStore =
{
  namespaced: true,
  state,
  mutations,
  actions,
}

