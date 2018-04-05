<template>
    <div class="pageContentContainer">
      <effects-sidebar />
      <nuxt-child class="pageContent" />
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