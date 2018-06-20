<template>
    <div>
        <i class="fa fa-eye categoryIcon"> </i>
        <p> The following is placeholder for a page which will contain a comprehensive collection
            of descriptions for all sensory subjective effect components </p>
        <effect-list listType="psychedelic" />
    </div>
</template>

<script>
import EffectList from '@/components/EffectList/EffectList.vue';

export default {
    components: {
        EffectList
    }
}
</script>