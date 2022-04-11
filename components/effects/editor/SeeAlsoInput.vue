<template>
  <div class="effectEditor__linkInput">
    <div class="urlTitleContainer">
      <div class="locationContainer">
        <label> Location </label>
        <input
          v-model="locationInput"
        >
      </div>

      <div class="titleContainer">
        <label> Title </label>
        <input
          v-model="titleInput"
        >
      </div>
    </div>

    <div class="descriptionContainer">
      <label> Description </label>
      <input v-model="descriptionInput">
    </div>

    <button 
      class="addButton"
      @click="addLink"
    >
      Add
    </button>
    <button 
      class="clearButton"
    >
      Clear
    </button>

    <ul class="linkList">
      <li 
        v-for="(link, index) in value"
        :key="link.location"
        class="linkListItem"
      >
        <nuxt-link :to="link.location">
          {{ link.title }}
        </nuxt-link>
        <span 
          v-show="link.description"
          class="descriptionSeparator"
        > - </span>
        <span class="description"> {{ link.description }} </span>
        <a 
          class="removeLink"
          @click="removeLink(index)"
        > (remove) </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      locationInput: "",
      titleInput: "",
      descriptionInput: ""
    };
  },
  methods: {
    addLink() {
      let newValue = this.value.slice();
      newValue.push({
        location: this.locationInput,
        title: this.titleInput,
        description: this.descriptionInput
      });

      this.$emit("input", newValue);
      this.clearInputs();
    },
    removeLink(index) {
      let newValue = this.value.slice();
      newValue.splice(index, 1);
      this.$emit("input", newValue);
      this.clearInputs();
    },
    clearInputs() {
      (this.locationInput = ""),
        (this.titleInput = ""),
        (this.descriptionInput = "");
    }
  },

};
</script>

<style scoped>
.urlTitleContainer {
  display: flex;
  flex-direction: row;
}

.locationContainer {
  flex: 1;
}

.titleContainer {
  flex: 2;
  margin-left: 1em;
}

.effectEditor__linkInput label {
  margin: 0;
}

label {
  font-size: 14px;
  text-transform: unset;
}

input {
  height: 35px;
  border: 1px solid #ccc;
  width: 100%;
  padding: 5px;
}

button {
  margin-right: 1em;
}

.addButton {
  background-color: #dfd;
}

.descriptionContainer {
  margin-top: 1em;
}

.linkList {
  margin-top: 1em;
  list-style: none;
}

.linkListItem {
  color: #333;
}

.removeLink {
  color: red;
  opacity: 0.7;
  font-style: italic;
  font-size: 14px;
}
</style>