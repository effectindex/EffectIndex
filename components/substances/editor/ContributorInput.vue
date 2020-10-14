<template>
  <div>
    <input
      v-model="contributorInputText"
      class="substanceEditor__input"
      @keyup="changeInput"
    >
    <ul class="contributorList">
      <li
        v-for="(contributor, index) in value"
        :key="contributor"
        class="contributorListItem"
      >
        {{ contributor }}
        <div class="contributorListItem__removeIcon">
          <a @click="removeContributor(index)">
            <Icon
              filename="times-circle.svg"
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
      contributorInputText: ""
    };
  },
  methods: {
    changeInput(e) {
      if (e.keyCode === 13) {
        if (this.value.indexOf(e.target.value) === -1) {
          this.$emit("input", this.value.concat([e.target.value.trim()]));
        }
        this.contributorInputText = "";
      } else if (e.target.value.indexOf(",") > -1) {
        let arr = e.target.value
          .split(",")
          .map(val => val.trim())
          .filter(val => val.length > 0);

        let newValue = [];

        arr.forEach(contributor => {
          if (this.value.indexOf(contributor) === -1) {
            newValue.push(contributor);
          }
        });

        this.$emit("input", this.value.concat(newValue));
        this.contributorInputText = "";
      }
    },
    removeContributor(index) {
      let newArr = this.value.slice();
      newArr.splice(index, 1);
      this.$emit("input", newArr);
    }
  }
};
</script>

<style scoped>
.contributorListItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  color: black;
  background-color: #EEE;
  margin: 3px;
  padding: 7px;
  border-radius: 10px;
  border: 1px dotted #DDD;
}

.contributorListItem a {
  color: #555;
}

.contributorListItem a:hover {
  color: rgb(134, 19, 19);
}

.icon {
  height: 1em;
  width: 1em;
}

.contributorList {
  display: flex;
  list-style: none;
  max-height: 300px;
  overflow-y: auto;
  font-size: 14px;
  margin-top: 1em;
  padding: 0;
}

.contributorListItem__removeIcon {
  float: right;
}
</style>
