<template>
  <div class="profileImage">
    <img
      :src="'/img/profiles/' + filename"
      :alt="(username ? 'Profile image of ' + username : 'User profile image. ')"
    >
  </div>
</template>

<script>
export default {
  props: {
    filename: {
      type: String,
      default: ""
    },
    username: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.profileImage {
  padding: 0.5em;
  margin: 0 1em;
  float: right;
  border: 1px solid #e5e5e5;
  background-color: #f5f5f5;
  margin-bottom: 2em;
}

.profileImage img {
  max-width: 350px;
  max-height: 500px;
  display: block;
  margin: 0 auto;
}

@media (max-width: 600px) {
  .profileImage {
    float: none;
    margin: 1em auto;
  }
}
</style>