import axios from "axios";

const state = {
  dialog: false,
  success: false,
  error: false,
  loading: false,
  successT: false,
  errorT: false,
  loadingT: false,
  startDate: "",
  endDate: "",
  name: "",
  birth: "",
  email: "",
  phone: "",
  roomId: "",
  reservas: [],
  reservasTime: []
};

const mutations = {
  setDialog(state, payload) {
    state.dialog = payload;
  },
  setError(state, payload) {
    state.error = payload;
  },
  setLoading(state, payload) {
    state.loading = payload;
  },
  setSuccess(state, payload) {
    state.success = payload;
  },
  setErrorT(state, payload) {
    state.errorT = payload;
  },
  setLoadingT(state, payload) {
    state.loadingT = payload;
  },
  setSuccessT(state, payload) {
    state.successT = payload;
  },
  setReservas(state, payload) {
    state.reservas = payload;
  },
  setReservasTime(state, payload) {
    state.reservasTime = payload;
  },
  setStartDate(state, payload) {
    state.startDate = payload;
  },
  setEndDate(state, payload) {
    state.endDate = payload;
  },
  setName(state, payload) {
    state.name = payload;
  },
  setBirth(state, payload) {
    state.birth = payload;
  },
  setEmail(state, payload) {
    state.email = payload;
  },
  setPhone(state, payload) {
    state.phone = payload;
  },
  setRoomId(state, payload) {
    state.roomId = payload;
  }
};

const actions = {
  getReservas({ commit }) {
    commit("setLoading", true);
    axios
      .get("http://35.224.191.225:8081/Backend/api/rest/mongo/roomtypes")
      .then(function(response) {
        console.log(response);
        commit("setReservas", response.data);
        commit("setSuccess", true);
      })
      .catch(function(error) {
        commit("setError", true);
        console.log(error);
      })
      .finally(function() {
        commit("setLoading", false);
      });
  },
  async getReservasByDate({ commit }, payload) {
    commit("setLoadingT", true);
    await axios
      .get(
        "http://35.224.191.225:8081/Backend/api/services/rack?end=" +
          payload.end +
          "&start=" +
          payload.start
      )
      .then(function(response) {
        console.log(response);
        commit("setReservasTime", response.data);
        commit("setSuccessT", true);
      })
      .catch(function(error) {
        commit("setErrorT", true);
        console.log(error);
      })
      .finally(function() {
        commit("setLoadingT", false);
        console.log("termine");
      });
  },
  postReserva({ commit }) {
    commit("setLoading", true);
    axios
      .post("http://35.224.191.225:8081/Backend/api/services/reserves/form", {
        startDate: state.startDate,
        endDate: state.endDate,
        name: state.name,
        birth: state.birth,
        email: state.email,
        phone: state.phone,
        roomNumber: state.roomId
      })
      .then(function(response) {
        console.log(response);
        commit("setSuccess", true);
      })
      .catch(function(error) {
        commit("setError", true);
        console.log(error);
      })
      .finally(function() {
        commit("setLoading", false);
      });
  }
};

export const reserveStore = {
  namespaced: true,
  state,
  mutations,
  actions
};
