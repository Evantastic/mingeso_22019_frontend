import axios from "axios";

const state = {
  successTy: false,
  errorTy: false,
  loadingTy: false,
  roomType: [],
  
};

const mutations = {
  setErrorTy(state, payload) {
    state.errorTy = payload;
  },
  setLoadingTy(state, payload) {
    state.loadingTy = payload;
  },
  setSuccessTy(state, payload) {
    state.successTy = payload;
  },
  setRoomType(state, payload) {
    state.roomType = payload;
  }
};

const actions = {
  async getRoomType({ commit }) {
    commit("setLoadingTy", true);
    await axios
      .get("http://35.224.191.225:8081/Backend/api/services/room/choice")
      .then(function(response) {
        console.log(response);
        commit("setRoomType", response.data);
        commit("setSuccessTy", true);
      })
      .catch(function(error) {
        commit("setErrorTy", true);
        console.log(error);
      })
      .finally(function() {
        console.log("termineRoomType")
        commit("setLoadingTy", false);
      });
  },
};

export const roomType = {
  namespaced: true,
  state,
  mutations,
  actions
};
