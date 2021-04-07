
<template>
  <div class="tabsContainer">
    <ul class="tabsList">
      <li 
        v-for="(tab, i) in tabs"
        :key="i"
        :class="{ 'selected': (activeTab === tab)}"
        class="tabsListItem"
        @click="selectTab(tab)"
      >
        {{ tab }}
      </li>
    </ul>
    <slot 
      ref="tab"
      :name="activeTab"
    />
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    activeTab: {
      type: [String, undefined],
      default: "All"
    }
  },
  methods: {
    selectTab(name) {
      this.$emit('selectTab', name);
    }
  },
};
</script>

<style scoped>
.tabsContainer {
  background-color: white;
}

.tabsList {
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
}

.tabsListItem {
  flex: 1;
  z-index: 1;
  text-align: center;
  display: block;
  cursor: pointer;
  padding: 0.3em 0.5em;
  border: 1px solid #DDD;
  margin-bottom: -1px;
  background-color: #F3F3F3;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  transition: background-color 0.25s ease;
  user-select: none;
}

.tabsListItem:not(:last-of-type) {
  margin-right: 0.25em;
}

.selected {
  background-color: #FFF;
  border-bottom: 0;
}

.tabsListItem a {
  cursor: pointer;
}

@media (max-width: 700px) {
  .tabsList {
    flex-direction: column;
  }

  .tabsListItem {
    text-align: left;
  }

  .tabsListItem:not(:last-of-type) {
    margin: 0;
    margin-bottom: 0.25em;
  }

  .selected {
    border: 1px solid #DDD;
  }
}
</style>
