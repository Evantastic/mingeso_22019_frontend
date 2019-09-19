
import axios from "axios";

const state = 
{
    error: false,
    loading: false,
    success: false,
    dialog: false,

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
  }
};

const actions = 
{
    // payload debe ser un objeto que contenga todo lo necesario enviar a la API -> Json
    
    async sendStudent({ commit }, payload) {
      commit("setLoading", true);
      try {
        await axios.post(
          "https://jsonplaceholder.typicode.com/posts/",
          { payload }
        );
        commit("setError", false);
        commit("setSuccess", true);

      } catch (error) {
        commit("setError", true);
        commit("setSuccess", false);
      }

      commit("setLoading", false);
    }
};

export const studentStore  = 
{
    namespaced: true,
    state,
    mutations,
    actions,
}

