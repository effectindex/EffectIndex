<template>
  <div
    class="table-of-contents"
    :class="{ floated }"
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
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableOfContents',
  props: {
    toc: {
      type: Array,
      default: () => ([])
    },
    floated: {
      type: String,
      default: undefined
    }
  }
};
</script>

<style scoped>
  .table-of-contents {
    display: block;
  }

  .table-of-contents-content {
    display: inline-block;
    background-color: #FAFAFA;
    border: 1px solid #DDD;
    padding: 0.5em 1em;
  }

  .table-of-contents.floated {
    float: left;
    margin-right: 1em;
  }

  .table-of-contents h4 {
    margin: 0;
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
</style>