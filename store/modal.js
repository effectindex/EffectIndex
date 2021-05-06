export const state = () => ({
  active: false,
  type: "",
  resource: ""
});

export const mutations = {
  toggle(state) {
    state.active = !state.active;
  },
  set_data(state, data) {
    state.type = data.type;
    state.resource = data.resource;
  }
};

