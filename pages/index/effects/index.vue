<template>
    <div class="pageContentContainer">
        <effects-sidebar />
        <nuxt-child class="pageContent"> </nuxt-child>
    </div>
</template>

<script>
import EffectsSidebar from '@/components/EffectsSidebar.vue';

export default {
    scrollToTop: true,
    components: {
        EffectsSidebar
    },
    async fetch({ store }) {
        await store.dispatch('getEffects');
    }
}

</script>