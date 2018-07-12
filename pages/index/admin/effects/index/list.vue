<template>
    <div class="pageContent">
        <hr />
        <h4> Effects </h4>
        <table class="effectTable">
            <thead>
                <tr>
                    <td> Title </td>
                    <td> Tags </td>
                </tr>
            </thead>
            <effect-table-row 
                v-for="effect in $store.state.effects"
                :key="effect._id"
                :effect="effect"
                @deleteEffect="deleteEffect" />
        </table>
    </div>
</template>

<script>
import EffectTableRow from '@/components/effects/EffectTableRow.vue';

export default {
    components: {
        EffectTableRow
    },
    mounted() {
        this.$store.dispatch('getEffects');
    },
    middleware: ['auth'],
    scrollToTop: true,
    methods: {
        deleteEffect(id) {
            this.$store.dispatch('deleteEffect', id);
        }
    }
}

</script>

<style scoped>

thead {
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

</style>