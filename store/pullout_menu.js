export const state = () => ({
  active: false
});

export const actions = {
  toggle({ commit }) {
    commit("toggle");
  },
  close({ commit }) {
    commit("close");
  },
  open({ commit }) {
    commit("open");
  }
};

export const mutations = {
  toggle(state) {
    state.active = !state.active;
  },
  close(state) {
    state.active = false;
  },
  open(state) {
    state.active = true;
  }
};


