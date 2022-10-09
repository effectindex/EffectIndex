<template>
  <div>
    <hr>
    <profile-editor :id="$route.params.id" />
  </div>
</template>

<script>
import ProfileEditor from "@/components/profiles/editor/ProfileEditor.vue";

export default {
  components: {
    ProfileEditor
  }
};
</script>