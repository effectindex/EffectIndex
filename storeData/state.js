import navigation from "./navigation.json";

export const state = () => ({
  navbar_pullout: false,
  modal: {
    active: false,
    type: "",
    resource: ""
  },
  replications: [],
  effects: [],
  substances: [],
  navigation,
  gallery: {
    selected_effect_id: "",
    replications: [],
    replicated_effects: []
  },
  blogPosts: [],
  articles: [],
  profiles: [],
  reports: [],
  search_results: [],
  search_input: "",
  admin: {
    userlist: [],
    invitations: []
  }
});