
import axios from "axios";

const state =
{
  error: false,
  loading: false,
  success: false,
  dialog: false,
  dialogList: false,
  name: null,
  age: null,
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
  setName(state, payload) {
    state.name = payload;
  },
  setAge(state, payload) {
    state.age = payload;
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
    console.log(state.name, state.rut, state.career, state.age);
    commit("setLoading", true);
    try {
      await axios.post(
        "http://35.224.191.225:8081/Backend/api/rest/students",
        {
          name: state.name,
          rut: state.rut,
          age: state.age,
          career: state.career,
        }
      );
      commit("setError", false);
      commit("setSuccess", true);

    } catch (error) {
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

