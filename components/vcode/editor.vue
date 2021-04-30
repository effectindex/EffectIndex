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
    <div
      v-show="tab === 'edit'"
      ref="editTab"
      class="edit-tab"
    >
      <client-only>
        <prism-editor
          ref="prism"
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
    </div>
    <div
      v-show="tab === 'preview'"
      ref="previewTab"
      class="preview-tab"
    >
      <vcode
        :body="formatted"
        :data="data"
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
import convert from './convert';

export default {
  components: {
    PrismEditor
  },
  props: {
    value: {
      type: String,
      default: undefined
    },
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      tab: 'edit',
      editScrollX: 0,
      previewScrollX: 0
    };
  },
  computed: {
    formatted () {
      return this.$vcode(this.value);
    }
  },
  watch: {
    tab: function() {
      if (this.$refs.previewTab) {
        this.$refs.previewTab.scrollTop = this.previewScrollX;
      }

      if (this.$refs.prism) {
        this.$refs.prism.$el.scrollTop = this.editScrollX;
      }
    }
  },
  methods: {
    highlighter(code) {
      return highlight(code, vcode2);
    },
    changeTab(tab) {
      if (this.$refs.prism) {
        this.editScrollX = this.$refs.prism.$el.scrollTop;
      } 
      
      if (this.$refs.previewTab) {
        this.previewScrollX = this.$refs.previewTab.scrollTop;
      }

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

  .vcodeEditor .convert-button {
    margin: 2px 0;
    height: 30px;
    font-size: 14px;
    width: unset;
    padding: 0 10px;
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

  .preview-tab {
    max-height: 800px;
    overflow: scroll;
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