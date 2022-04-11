import parse from '../lib/vcode2/parse';
import Vue from 'vue';

const vcode = {
    install: function (Vue, options) {
    Vue.prototype.$vcode = function (text) {
      return parse(text);
    };
  }
};

Vue.use(vcode);