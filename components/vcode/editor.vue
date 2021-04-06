<template>
  <div class="vcodeEditor">
    <div class="tabSelector">
      <a
        :class="{ selected: tab === 'edit' }"
        @click="changeTab('edit')"
      > Edit </a>
      <a
        :class="{ selected: tab === 'preview' }"
        @click="changeTab('preview')"
      > Preview </a>
    </div>
    <client-only
      v-if="tab === 'edit'"
    >
      <prism-editor
        :value="value"
        class="my-editor"
        :highlight="highlighter"
        @input="codeModified"
      />
      <button
        class="convert-button"
        @click="convertViscidcode"
      >
        Convert Viscidcode
      </button>
    </client-only>
    <div v-else>
      <rendered-vcode
        :body="formatted"
      />
    </div>
  </div>
</template>

<script>
import { PrismEditor } from 'vue-prism-editor';
import { highlight } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import vcode2 from '@/lib/vcode2/prism-vcode2.js';
import 'vue-prism-editor/dist/prismeditor.min.css'; 
import 'prismjs/themes/prism-tomorrow.css';
import RenderedVcode from './rendered';
import convert from './convert';

export default {
  components: {
    PrismEditor,
    RenderedVcode
  },
  props: {
    value: {
      type: String,
      default: undefined
    }
  },
  data () {
    return {
      tab: 'edit'
    };
  },
  computed: {
    formatted () {
      return this.$vcode2(this.value);
    }
  },
  methods: {
    highlighter(code) {
      return highlight(code, vcode2);
    },
    changeTab(tab) {
      this.tab = tab;
    },
    codeModified(code) {
      this.$emit('input', code);
    },
    convertViscidcode() {
      this.$emit('input', convert(this.value));
    }
  }
};

</script>

<style>

  @font-face {
    font-family: 'Fira Code';
    font-display: swap;
    src: url('/fonts/FiraCode-Regular.ttf');
  }

  .vcodeEditor {
    margin-top: 1em;
  }

  .tabSelector {
    display: flex;
    flex-direction: row;
  }

  .convert-button {
    margin: 2px 0;
    height: 30px;
    width: auto;
    padding: 5px;
    background-color: #DDD;
  }

  .tabSelector a {
    display: block;
    text-align: center;
    flex: 1;
    cursor: pointer;
    transition: 0.25s ease;
    padding: 10px 0;
    color: #333;
  }

  .tabSelector a.selected {
    background-color: #2d2d2d;
    color: #EEE;
  }

  .my-editor {
    background: #2d2d2d;
    color: #ccc;
    font-family: 'Fira code', 'Fira Mono', Consolas, Menlo, Courier, monospace;
    font-size: 15px;
    line-height: 1.5;
    white-space: pre-wrap;
    padding: 10px;
    max-height: 800px;
    overflow-y: scroll;
  }

  /* optional class for removing the outline */
  .prism-editor__textarea:focus {
    outline: none;
  }

  .vtag {
    color: rgb(221, 181, 107);
  }

  .vtag .name {
    color: rgb(186, 57, 57);
  }

  .vtag .property {
    color: rgb(75, 161, 231);
  }

  .vtag .value {
    color: rgb(146, 46, 171);
  }

</style>