<template>
  <div
    class="table-of-contents"
    :class="{ floatLeft, floatRight, top }"
  >
    <div class="table-of-contents-content">
      <h4> Contents </h4>
      <ol class="table-of-contents-list">
        <li
          v-for="(item, index) in toc"
          :key="index"
          class="table-of-contents-list-item"
        >
          <a :href="`#${item.id}`"> {{ item.name }} </a>
          <ul v-if="item.children && item.children.length">
            <li
              v-for="(subitem, subindex) in item.children"
              :key="subindex"
              class="table-of-contents-sublist-subitem"
            >
              {{ index + 1 }}.{{ subindex + 1 }} <a :href="`#${subitem.id}`"> {{ subitem.name }} </a>
            </li>
          </ul>
        </li>
        <li v-show="hasSection('replications')">
          <a href="#replication-gallery"> Replication Gallery </a>
        </li>
        <li v-show="hasSection('audio_replications')">
          <a href="#audio-replications"> Replication Gallery </a>
        </li>
        <li v-show="hasSection('analysis')">
          <a href="#analysis"> Analysis </a>
        </li>
        <li v-show="hasSection('style_variations')">
          <a href="#style-variations"> Style Variations </a>
        </li>
        <li v-show="hasSection('personal_commentary')">
          <a href="#personal-commentary"> Personal Commentary </a>
        </li>
        <li v-show="hasSection('related_reports')">
          <a href="#related-reports"> Related Reports </a>
        </li>
        <li v-show="hasSection('see_also')">
          <a href="#see-also"> See Also </a>
        </li>
        <li v-show="hasSection('external_links')">
          <a href="#external-links"> External Links </a>
        </li>
        <li v-show="hasSection('citations')">
          <a href="#references"> References </a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableOfContents',
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    float: {
      type: String,
      default: undefined
    },
    top: {
      type: String,
      default: undefined
    }
  },
  computed: {
    toc () {
      return this.data && this.data.toc ? this.data.toc : [];
    },
    floatLeft () {
      return this.float ? this.float.toLowerCase() === 'left' : false;
    },
    floatRight () {
      return this.float ? this.float.toLowerCase() === 'right' : false;
    }
  },
  methods: {
    hasSection(name) {
      if (name in this.data) {
        const section = this.data[name];
        if (Array.isArray(section) || typeof section === 'string') {
          if (section.length > 0) return true;
        } else if (section && typeof section === 'object') {
          if (section.raw && section.raw.length > 0) return true;
        }
      }
      return false;
    }
  }
};
</script>

<style scoped>
  .table-of-contents {
    display: block;
    margin: 1em 0;
  }

  .table-of-contents-content {
    display: inline-block;
    background-color: #FAFAFA;
    border: 1px solid #DDD;
    padding: 0.5em 1em;
  }

  .table-of-contents.floatLeft {
    float: left;
    margin: 1em 1em 1em 0;
  }

  .table-of-contents.floatRight {
    float: right;
    margin: 1em 0 1em 1em;
  }

  @media (max-width: 600px) {
    .table-of-contents-content {
      display: block;
    }

    .table-of-contents.floatLeft, .table-of-contents.floatRight {
      float:none;
      margin: 0;
    }
  }

  .table-of-contents.top {
    margin-top: 0;
  }

  .table-of-contents h4 {
    margin: 0;
    text-align: center;
    margin-bottom: 0.5em;
  }

  .table-of-contents ul, .table-of-contents ol {
    margin: 0;
    padding-left: 1em;
  }

  .table-of-contents ul {
    list-style: none;
    padding-left: 0.5em;
  }

  .table-of-contents li {
    padding-left: 0.25em;
  }
</style>