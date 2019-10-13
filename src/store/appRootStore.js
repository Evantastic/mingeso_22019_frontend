
const state =
{
  drawer: false,
};

const mutations =
{
  setDrawer(state, payload) {
    state.drawer = payload;
  },
};



export const appRootStore =
{
  namespaced: true,
  state,
  mutations,
}

