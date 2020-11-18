<template>
  <div class="effect__headeredTextBox">
    <div 
      class="headersContainer"
      :style="`background-color: ${headerBackground}`"
    >
      <h4 
        class="label"
        :style="`background-color: ${labelBackground}`"
      >
        {{ label }}
      </h4>
      <div 
        class="headers"
      >
        <h3 class="mainHeader">
          {{ header }}
        </h3>
        <h4 class="subHeader">
          - {{ subHeader }}
        </h4>
      </div>
    </div>
    <p class="body">
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: undefined
    },
    labelBackground: {
      type: String,
      default: '#666666'
    },
    headerBackground: {
      type: String,
      default: '#F0F0F0'
    },
    header: {
      type: String,
      default: undefined
    },
    subHeader: {
      type: String,
      default: undefined
    },
    body: {
      type: String,
      default: undefined
    }
  }
};
</script>

<style scoped>

h3, h4 {
  margin: 0;
  text-transform: none;
  letter-spacing: unset;
}

.effect__headeredTextBox {
  border: 1px solid rgb(221, 221, 221);
}

.headersContainer {
  display: flex;
  align-items: center;
}

.label {
  color: white;
  padding: 5px 15px 5px 10px;
  border-radius: 0 30px 30px 0;
  margin: 0;
  margin-right: 10px;
  font-size: 18px;
}

.headers {
  display: flex;
  align-items: center;
}

.mainHeader {
  margin-right: 5px;
}

.subHeader {
  color: #AAA;
}

.body {
  background-color: #FAFAFA;
  padding: 10px;
}

</style>