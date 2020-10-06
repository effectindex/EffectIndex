import Vue from 'vue';

Vue.component('fa', {
  props: {
    icon: {
      type: [String, Array],
      default: 'unknown'
    }
  },
  computed: {
    src () {
      const base = '/icons';
      const icon = this.icon;

      if (Array.isArray(icon)) {
        return `${base}/${icon[1]}.svg`;
      } else {
        return `${icon}.svg`;
      }
    }
  },
  render: function (createElement) {
    const src = this.src;
    return createElement('img', {
      attrs: {
        src
      }
    });
  }
});
