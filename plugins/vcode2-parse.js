import parse from '../lib/vcode2/parse';
import Vue from 'vue';

const vcode2 = {
    install: function (Vue, options) {
    Vue.prototype.$vcode2 = function (text) {
      return parse(text);
    };
  }
};

Vue.use(vcode2);