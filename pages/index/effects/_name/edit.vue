<template>
    <div>
        <effect-editor :effect="effect" @edit-effect="submitEffect" />
    </div>
</template>

<script>
import EffectEditor from '@/components/effects/EffectEditor';

export default {
    components: {
        EffectEditor
    },
    middleware: 'auth',
    methods: {
        async submitEffect(effect) {
            let updatedEffect = {
                name: effect.name,
                description: effect.description
            }

            let returnedEffect = await this.$store.dispatch('updateEffect', {
                id: this.effect._id,
                name: updatedEffect.name,
                description: updatedEffect.description
            });
            
            this.$router.push('/effects/');
        }
    },
    async asyncData(app) {
        let { effect } = await app.$axios.$get('/api/effects/' + app.params.name);
        return { effect };
    }
}

</script>