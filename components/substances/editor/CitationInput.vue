<template>
  <div>
    <div class="citationInput">
      <div class="row">
        <div class="item label"> URL </div>
        <div class="item label"> Description </div>
        <div class="item count label"> # </div>
        <div class="item count label"> Count </div>
      </div>
    </div>
    <div class="row">
      <div class="item">
        <input
          v-model="url"
          class="citationInput__urlInput">
      </div>
      <div class="item">
        <textarea
          v-model="text"
          class="citationInput__descriptionInput" /> </div>
      <div class="item count">
        <input 
          v-model="from"
          class="citationInput__countInput">
      </div>
      <div class="item count">
        <input 
          v-model="no"
          class="citationInput__countInput">
      </div>
    </div>
    <div class="row"> 
      <div class="item buttons">
        <button 
          class="add"
          @click="addToList()"> Add </button>
        <button @click="clear()"> Clear </button>
      </div>
    </div>
    <citation-list>
      <citation 
        v-for="(citation, index) in citations"
        :key="citation.url"
        :from="citation.from"
        :no="String(citation.no)"
        class="cite"
        @click="selectCitation(index)">
        {{ citation.text }}
        ({{ citation.from }}) | <ext-link :href="citation.url">
          {{ citation.url }}
        </ext-link>
        <div> 
          <a
            class="remove"
            @click="removeFromList(index)"> Remove </a> </div>
      </citation>
    </citation-list>
  </div>
</template>

<script>
import ExtLink from "@/components/ExtLink";
import Citation from "@/components/substances/Citation";
import CitationList from "@/components/substances/CitationList.vue";

export default {
  components: {
    ExtLink,
    Citation,
    CitationList
  },
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      url: "",
      text: "",
      from: undefined,
      no: 1
    };
  },
  computed: {
    citations() {
      return this.value.filter((citation) => citation);
    }
  },
  methods: {
    addToList() {
      if (this.from) {
        let citationList = this.value.slice();
        citationList[Number(this.from) - 1] = {
          url: this.url,
          text: this.text,
          from: this.from,
          no: this.no
        };
        this.clear();
        this.update(citationList);
      }
    },
    selectCitation(index) {
      let citation = this.value[index];

      if (citation) {
        this.url = citation.url;
        this.text = citation.text;
        this.from = citation.from;
        this.no = citation.no;
      }
    },
    removeFromList(index) {
      let citationList = this.value.slice();
      citationList.splice(index, 1);
      this.update(citationList);
    },
    update(citationList) {
      this.$emit("input", citationList.filter(citation => citation));
    },
    clear() {
      (this.url = ""),
        (this.text = ""),
        (this.count = 1),
        (this.from = undefined);
    }
  },
  
};
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
}

.item {
  flex: 1;
  margin: 0.25em;
  align-self: auto;
}

.item.count {
  max-width: 50px;
}

.cite:hover {
  background-color: #f5f5ff;
}

.citationInput__urlInput,
.citationInput__descriptionInput,
.citationInput__countInput {
  width: 100%;
  height: 30px;
  padding: 0.25em 1em;
  font-size: 16px;
  border: 1px solid #ccc;
}

.citationInput__descriptionInput {
  height: 100px;
}
.citationInput__removeCitation {
  color: red;
  padding-bottom: 2em;
}

.buttons {
  text-align: right;
}

.buttons button {
  margin-left: 1em;
}

.count {
  text-align: center;
}

.add {
  background-color: #dfd;
}

.remove {
  color: red;
  cursor: pointer;
  margin-bottom: 1em;
}
</style>