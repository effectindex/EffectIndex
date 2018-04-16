<template>
    <div>
        <effect-editor @new-effect="submitEffect" />
    </div>
</template>

<script>
import EffectEditor from '@/components/effects/EffectEditor';

export default {
    components: {
        EffectEditor
    },
    middleware: 'auth',
    data() {
        return {
            name: '',
            class: '',
            subclass: '',
            action: '',
            substance_class: '',
            description: '',
            replications: [],
            related_substances: [],
            see_also: [],
            external_links: [],
            citations: []
        }
    },
    methods: {
        async submitEffect(effect) {
            let newEffect = {
                name: effect.name,
                description: effect.description
            }

            let returnedEffect = await this.$store.dispatch('submitEffect', newEffect);

            this.$router.push('/effects/');
        }
    }
}

</script>