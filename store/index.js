import Vuex from 'vuex'
import navigation from '@/data/navigation.json';
import actions from './actions';
import mutations from './mutations';

const createStore = () => {
  return new Vuex.Store({
    state: {
      navbar_pullout: false,
      replications: [],
      effects: [],
      navigation,
      gallery: {
        selected_effect: '',
        replications: [],
        replicated_effects: []
      },
      blogPosts: [],
      profiles: [],
      admin: {
        userlist: [],
        invitations: []
      }
    },
    mutations: mutations,
    actions: actions
  })
}

export default createStore