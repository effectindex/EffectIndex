import Vuex from 'vuex'
import effects from '@/data/effects.json';
import navigation from '@/data/navigation.json';
import gallery from '@/data/gallery.json';
import axios from 'axios';

import actions from './actions';
import mutations from './mutations';

const createStore = () => {
  return new Vuex.Store({
    state: {
      navbar_pullout: false,
      effects,
      dbeffects: [],
      navigation,
      gallery,
      blogPosts: []
    },
    mutations: mutations,
    actions: actions
  })
}

export default createStore