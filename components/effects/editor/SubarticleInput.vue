<template>
  <div class="subarticleInput">
    <form 
      class="inputContainer"
      @submit.prevent="addSubarticle">
      <input
        v-model="title"
        name="title"
        placeholder="Title"
        class="effectEditor__input subarticleInput__title">
      <input
        v-model="id"
        placeholder="Id"
        name="id"
        class="effectEditor__input subarticleInput__id">
      <button type="Submit"> Add </button>
    </form>
    

    <div class="valueContainer">
      <ul class="subarticleInput__list">
        <li 
          v-for="(subarticle, index) in value"
          :key="index"
          class="subarticleInput__listItem">
          {{ subarticle.title }} : {{ subarticle.id }}
          <span class="subarticleInput__icons">
            <a @click="moveArticleUp(index)"> <fa
              :icon="['far', 'arrow-up']"
              class="fa subarticleInput__icon" /> </a>
            <a @click="moveArticleDown(index)"> <fa
              :icon="['far', 'arrow-down']"
              class="fa subarticleInput__icon" /> </a>
            <a @click="deleteArticle(index)"> <fa
              :icon="['far', 'times-circle']"
              class="fa subarticleInput__icon" /> </a>
          </span>
        </li>
      </ul>
    </div>

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
      title: "",
      id: ""
    };
  },
  methods: {
    addSubarticle() {
      let currentList = this.value.slice();

      currentList.push({
        title: this.title,
        id: this.id
      });

      this.$emit('input', currentList);

      this.clearInputs();
    },

    moveArticleUp(index) {
      let currentList = this.value.slice();

      if (index > 0) {
        let temp = currentList[index - 1];
        currentList[index - 1] = currentList[index];
        currentList[index] = temp;
      }

      this.$emit('input', currentList);
    },

    moveArticleDown(index) {
      let currentList = this.value.slice();

      if (index < (currentList.length - 1)) {
        let temp = currentList[index + 1];
        currentList[index + 1] = currentList[index];
        currentList[index] = temp;
      }

      this.$emit('input', currentList);
    },

    deleteArticle(index) {
      let currentList = this.value.slice();
      currentList.splice(index, 1);
      this.$emit('input', currentList);
    },
    clearInputs() {
      this.title = "";
      this.id = "";
    }
  }
};
</script>

<style scoped>

  .subarticleInput__title {
    width: 300px;
    display: inline-block;
    margin-right: 1em;
  }

  .subarticleInput__id {
    display: inline-block;
    width: 200px;
    margin-right: 1em;
  }

  .subarticleInput__list {
    margin-top: 1em;
    list-style: none;
  }

  .subarticleInput__icons {
    padding-left: 2em;
  }

  .subarticleInput__icons .subarticleInput__icon {
    padding: 0 0.5em;
  }
</style>