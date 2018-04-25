<template>
    <div class="pageContentContainer">
        <effects-sidebar />
        <nuxt-child class="pageContent"> </nuxt-child>
    </div>
</template>

<script>
import EffectsSidebar from '@/components/EffectsSidebar.vue';

export default {
    components: {
        EffectsSidebar
    },
    scrollToTop: true
}

</script>