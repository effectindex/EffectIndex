<template>
  <div class="headeredTextbox">
    <div 
      class="headersContainer"
      :style="`background-color: ${headerBackground}`"
    >
      <h4 
        v-show="label"
        class="label"
        :style="`background-color: ${labelBackground}`"
      >
        <span style="white-space: pre;">{{ label }}</span>
      </h4>
      <div 
        v-show="header || subHeader"
        class="headers"
      >
        <h3
          v-show="header" 
          class="mainHeader"
        >
          {{ header }}
        </h3>
        <h4
          v-show="subHeader" 
          class="subHeader"
        >
          <span class="separator">-</span> {{ subHeader }}
        </h4>
      </div>
    </div>
    <div class="body">
      <slot />
    </div>
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
    }
  }
};
</script>

<style>

.headeredTextbox {
  border: 1px solid rgb(221, 221, 221);
  margin: 1em 0;
}

.headeredTextbox > .headersContainer h3, .headeredTextbox > .headersContainer h4 {
  margin: 0;
  text-transform: none;
  letter-spacing: unset;
}



.headeredTextbox > .headersContainer {
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.headeredTextbox .label {
  white-space: pre-line;
  color: white;
  padding: 5px 15px 5px 20px;
  border-radius: 0 30px 30px 0;
  margin: 0;
  font-size: 18px;
  display: flex;
  align-items: center;
}

.headeredTextbox .headers {
  display: flex;
  align-items: center;
  padding: 5px 0;
  margin-left: 10px;
}

.headeredTextbox .mainHeader {
  margin-right: 5px;
  font-size: 20px;
}

.headeredTextbox .subHeader {
  color: #AAA;
  font-size: 18px;;
}

.headeredTextbox .body {
  background-color: #FAFAFA;
  padding: 20px;
}

.headeredTextbox .body p {
  margin: 0;
}

.headeredTextbox .body p:not(:last-of-type) {
  margin-bottom: 1em;
}

@media (max-width: 600px) {
  .headeredTextbox h3 {
    font-size: 20px;
  }

  .headeredTextbox .headers {
    flex-direction: column;
    align-items: flex-start;
  }

  .headeredTextbox .separator {
    display: none;
  }
  
  .headeredTextbox .body {
    padding: 10px;
  }

  .headeredTextbox .label {
    padding: 5px 15px 5px 10px;
  }
}

</style>