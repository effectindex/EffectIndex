<template>
  <div class="profileIcon">
    <img
      class="image"
      :src="`${image}`"
    >
  </div>
</template>

<script>
export default {
  props: {
    profileImage: {
      type: String,
      default: undefined
    }
  },
  computed: {
    image() {
      // Default to some nice icon if someone doesn't have one
      if (!this.profileImage || this.profileImage === "") {
        return "/indy_iphone_square.png";
      }
      return this.profileImage;
    }
  },
};
</script>

<style scoped>
.profileIcon {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  overflow: hidden;
}

.image {
  width: 50px;
  height: 50px;
}
</style>
