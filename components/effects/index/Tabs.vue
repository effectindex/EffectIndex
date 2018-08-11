
<template>
  <div class="tabsContainer">
    <ul class="tabsList">
      <li 
        v-for="(tab, i) in tabs"
        :key="i"
        :class="{ 'selected': (selectedTab === tab)}"
        class="tabsListItem"
        @click="selectTab(tab)">
        {{ tab }}
      </li>
    </ul>
    <slot 
      :name="selectedTab" />
  </div>

</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectedTab: "",
      childData: {
        blegh: 'asdf'
      }
    };
  },
  created() {
    if (this.tabs.length) this.selectedTab = this.tabs[0];
  },
  methods: {
    selectTab(name) {
      this.selectedTab = name;
    }
  },
};
</script>

<style scoped>
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
  color: #3d9991;
  cursor: pointer;
  padding: 0.3em 0.5em;
  border: 1px solid #DDD;
  margin-bottom: -1px;
  background-color: #F6F6F6;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  transition: background-color 0.25s ease;
  user-select: none;
}

.tabsListItem:not(:last-of-type) {
  margin-right: 0.25em;
}

.selected {
  background-color: #EEE;
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
}
</style>
