<template>
    <div class="pageContentContainer">
      <effects-sidebar />
      <nuxt-child class="effectsContent" />
    </div>
</template>

<script>
import EffectsSidebar from '@/components/EffectsSidebar';
import EffectList from '@/components/EffectList/EffectList';

export default {
  components: {
    EffectsSidebar,
    EffectList
  }
}
</script>

<style scoped>

.effectsContent {
  flex: 3;
}

.sidebar ul {
  padding: 0;
}

</style>