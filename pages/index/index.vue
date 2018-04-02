<template>
    <div class="pageContentContainer">
      <effects-sidebar />
      <div class="pageContent" style="flex: 3;">
        <nuxt-child />
      </div>
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