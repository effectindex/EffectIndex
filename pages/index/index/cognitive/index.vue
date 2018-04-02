<template>
    <div>
        <i class="fa fa-user categoryIcon"> </i>
        <p> The following is placeholder for a page which will contain a comprehensive collection
            of descriptions for all sensory subjective effect components </p>
        <effect-list listType="cognitive" />
    </div>
</template>

<script>
import EffectList from '@/components/EffectList/EffectList';

export default {
    components: {
        EffectList
    }
}
</script>