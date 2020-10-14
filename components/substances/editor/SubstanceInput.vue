<template>
  <div>
    <input 
      v-model="substanceInputText"
      class="substanceEditor__input"
      @keyup="changeInput"
    >
    <ul class="substanceList">
      <li 
        v-for="(substance, index) in value"
        :key="substance"
        class="substanceItem"
      >
        {{ substance }}
        <div class="substanceItem__removeIcon">
          <a @click="removeSubstance(index)">
            <Icon
              filename="times-circle.svg"
              style="height: 1em; width: 1em;"
              color="red"
            />
          </a>
        </div>
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
      substanceInputText: ""
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
        this.substanceInputText = "";
      } else if (e.target.value.indexOf(",") > -1) {
        let arr = e.target.value
          .split(",")
          .map(val => val.trim())
          .filter(val => val.length > 0);

        let newValue = [];

        arr.forEach(substance => {
          if (this.value.indexOf(substance) === -1) {
            newValue.push(substance);
          }
        });

        this.$emit("input", newValue.concat(this.value).sort());
        this.substanceInputText = "";
      }
    },
    removeSubstance(index) {
      let newArr = this.value.slice();
      newArr.splice(index, 1);
      this.$emit("input", newArr);
    }
  }
};
</script>

<style scoped>
.substanceItem {
  display: inline-block;
  width: 200px;
  color: black;
  background-color: #f5f5f5;
  padding-left: 10px;
  border: 1px dotted #ccc;
  margin: 3px;
  padding: 7px;
  border-radius: 15px;
}

.substanceItem a {
  color: #555;
}

.substanceItem a:hover {
  color: rgb(134, 19, 19);
}

.substanceList {
  list-style: none;
  max-height: 300px;
  overflow-y: auto;
  font-size: 14px;
  margin-top: 1em;
  padding: 0;
}

.substanceItem__removeIcon {
  float: right;
}
</style>