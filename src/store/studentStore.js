
import axios from "axios";

const state =
{
  error: false,
  loading: false,
  success: false,
  dialog: false,
  dialogList: false,
  firstName: null,
  lastName: null,
  birth: null,
  career: null,
  rut: null,
  studentList: []

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
  setDialog(state, payload) {
    state.dialog = payload;
  },
  setDialogList(state, payload) {
    state.dialogList = payload;
  },
  setRut(state, payload) {
    state.rut = payload;
  },
  setFirstName(state, payload) {
    state.firstName = payload;
  },
  setLastName(state, payload) {
    state.lastName = payload;
  },
  setBirth(state, payload) {
    state.birth = payload;
  },
  setCareer(state, payload) {
    state.career = payload;
  },
  llenarLista(state,payload){
    state.studentList = payload;
  }
};

const actions =
{
  // payload debe ser un objeto que contenga todo lo necesario enviar a la API -> Json

  async sendStudent({ commit }) {
    console.log(state.firstName,state.lastName, state.rut, state.career, state.birth);
    commit("setLoading", true);
    try {
      await axios.post(
        "http://35.224.191.225:8081/Backend/api/rest/students",
        {
          firstName: state.firstName,
          lastName: state.lastName,
          rut: state.rut,
          birth: state.birth,
          career: state.career,
        }
      );
      commit("setError", false);
      commit("setSuccess", true);
      console.log('paseeeee');

    } catch (error) {
      console.log(error);
      commit("setError", true);
      commit("setSuccess", false);
    }

    commit("setLoading", false);
  },
  async receiveStudent({commit}){
    commit("setLoading", true);
    try {
      await axios.get(
        "http://35.224.191.225:8081/Backend/api/rest/students?page=1&quantity=50")
        .then(function(response){
          const data = response.data.content;
          commit('llenarLista',data)
        })
        commit("setError", false);
        commit("setSuccess", true);
    } catch (error) {
      commit("setError", true);
      commit("setSuccess", false);
    }
    commit("setLoading", false);
    commit("setSuccess", false);
    
  },
}


export const studentStore =
{
  namespaced: true,
  state,
  mutations,
  actions,
}

