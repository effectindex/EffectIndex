<template>
  <div class="separatedTextbox">
    <h4 v-if="a && b"> 
      <span class="comparator">{{ a }}</span> vs <span class="comparator">{{ b }}</span>
    </h4>
    <h4 v-else>
      {{ label }}
    </h4>
    <div 
      class="body"
      v-html="$md.render(body)"
    />
  </div>
</template>

<script>
export default {
  props: {
    a: {
      type: String,
      default: undefined
    },
    b: {
      type: String,
      default: undefined
    },
    label: {
      type: String,
      default: undefined
    }
  },
  computed: {
    body () {
      return this.$slots.default ? this.$slots.default[0].text : undefined;
    }
  }
};
</script>

<style scoped>
  .separatedTextbox {
    margin: 0;
    display: flex;
    flex-direction: row;
  }

  .separatedTextbox h4 {
    margin: 0;
    width: 200px;
    text-transform: unset;
    letter-spacing: unset;
    text-align: right;
    padding-right: 20px;
    padding-top: 3px;
  }

  .separatedTextbox .body {
    margin: 0;
    flex: 1;
    padding-left: 20px;
    border-left: 1px solid #EEE;
  }

  .body >>> p:not(:last-child), .body >>> ul:not(:last-child) {
    margin-bottom: 1em;
  }

  .separatedTextbox .comparator {
    font-weight: bold;
    display: inline-block;
    
  }

  @media(max-width: 600px) {
    .separatedTextbox {
      flex-direction: column;
    }

    .separatedTextbox h4 {
      display: inline-block;
      text-align: left;
      padding-bottom: 10px;
      border-bottom: 1px solid #EEE;
    }

    .separatedTextbox p {
      border: none;
      padding-left: 0;
      padding-top: 10px;
    }
  }

</style>