
import axios from "axios";

const state =
{
  error: false,
  errorG: false,
  loading: false,
  loadingG: false,
  success: false,
  successG: false,
  dialog: false,
  dialogList: false,
  firstName: null,
  lastName: null,
  birth: null,
  career: null,
  rut: null,
  page: 0,
  studentList: []

};

const mutations =
{
  setError(state, payload) {
    state.error = payload;
  },
  setErrorG(state, payload) {
    state.errorG = payload;
  },
  setLoading(state, payload) {
    state.loading = payload;
  },
  setLoadingG(state, payload) {
    state.loadingG = payload;
  },
  setSuccess(state, payload) {
    state.success = payload;
  },
  setSuccessG(state, payload) {
    state.successG = payload;
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
  setPage(state, payload) {
    state.page = payload;
  },
  setLista(state, payload) {
    state.studentList = payload;
  },
  llenarLista(state,payload){
    state.studentList.push(payload);
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
      commit("setSuccess", true);
      commit("setLista", []);
      commit("setPage", 0);

    } catch (error) {
      console.log(error);
      commit("setError", true);
    }
    commit("setLoading", false);
  },


  async receiveStudent({commit}){
    commit("setLoadingG", true);
    try {
      await axios.get(
        "http://35.224.191.225:8081/Backend/api/rest/students?page="+state.page+"&quantity=10")
        .then(function(response){
          const data = response.data.content;
          commit('llenarLista',data);
        })
        if (state.page < state.studentList.length ) {
          commit("setPage", state.page+1);  
        }
        commit("setSuccessG", true);
        
    } catch (error) {
      commit("setErrorG", true);
      
    }
    commit("setLoadingG", false);
    
    
  },
}


export const studentStore =
{
  namespaced: true,
  state,
  mutations,
  actions,
}

