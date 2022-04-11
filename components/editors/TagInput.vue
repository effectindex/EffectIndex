<template>
  <div class="tagInput">
    <input 
      v-model="tagInputText"
      @keyup="changeInput"
    >
    <ul class="tagList">
      <li
        v-for="(tag, index) in value"
        :key="tag"
        class="tagItem" 
      >
        <span class="tagText"> {{ tag }} </span>
        <a @click="removeTag(index)">
          <Icon
            filename="times-circle.svg"
            color="red"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon
  },
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      tagInputText: ""
    };
  },
  methods: {
    changeInput(e) {
      if (e.keyCode === 13) {
        if (this.value.indexOf(e.target.value) === -1) {
          this.$emit(
            "input",
            [e.target.value.trim()].concat(this.value).sort()
          );
        }
        this.tagInputText = "";
      } else if (e.target.value.indexOf(",") > -1) {
        let arr = e.target.value
          .split(",")
          .map(val => val.trim())
          .filter(val => val.length > 0);

        let newValue = [];

        arr.forEach(tag => {
          if (this.value.indexOf(tag) === -1) {
            newValue.push(tag);
          }
        });

        this.$emit("input", newValue.concat(this.value).sort());
        this.tagInputText = "";
      }
    },
    removeTag(index) {
      let newArr = this.value.slice();
      newArr.splice(index, 1);
      this.$emit("input", newArr);
    }
  }
};
</script>

<style scoped>
.tagItem {
  display: inline-block;
  color: #EEE;
  background-color: #333;
  padding-left: 10px;
  margin: 10px 10px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.tagItem a {
  color: #555;
  cursor: pointer;
  margin-top: 3px;
}

.tagItem a:hover {
  color: rgb(134, 19, 19);
}

.tagList {
  display: flex;
  flex-direction: row;
  list-style: none;
  max-height: 300px;
  overflow-y: auto;
  font-size: 14px;
  margin-top: 1em;
  padding: 0;
}

.tagInput input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #CCC;
}

.tagText {
  padding-right: 15px;
}

.icon {
  height: 1em;
  width: 1em;
  opacity: 0.5;
}

.icon:hover {
  opacity: 1;
}

</style>