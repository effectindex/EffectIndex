<template>
  <div>
    <hr>
    <profile-editor :id="$route.params.id" />
  </div>
</template>

<script>
import ProfileEditor from "@/components/profiles/profileEditor.vue";

export default {
  components: {
    ProfileEditor
  }
};
</script>