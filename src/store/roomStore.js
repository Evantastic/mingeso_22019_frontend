import axios from "axios";

const state =
{
  error: false,
  loading: false,
  success: false,
  rooms: [],

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
  setRooms(state, payload) {
    state.rooms = payload;
  },
};

const actions =
{
    getRooms({ commit }) {
        commit("setLoading",true);
        axios.get("http://35.224.191.225:8081/Backend/api/rest/mongo/roomtypes")
        .then(function (response) {
            console.log(response);
            commit("setRooms",response.data);
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


export const roomStore =
{
  namespaced: true,
  state,
  mutations,
  actions,
}

