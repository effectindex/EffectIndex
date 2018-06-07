<template>
    <effect-list listType="all" />
</template>

<script>
import EffectList from '@/components/EffectList/EffectList.vue';

export default {
    components: {
        EffectList
    },
    async fetch({ store }) {
        await store.dispatch('getEffects');
    }
}
</script>