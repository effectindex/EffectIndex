<template>
  <div 
    v-show="value"
    class="report__infoBoxListItem" >
    <label> {{ label }} </label>
    <span class="report__infoBoxListItemDescription">
      {{ value }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    }
  }
};
</script>
