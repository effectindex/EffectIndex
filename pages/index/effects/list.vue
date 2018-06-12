<template>
    <div class="pageContent">
        <nuxt-link v-show="$auth.loggedIn" to="/effects/add"> Add new </nuxt-link>
        <h1> Effects </h1>
        <table class="effectTable">
            <thead>
                <tr>
                    <td> Title </td>
                </tr>
            </thead>
            <effect-table-row 
                v-for="effect in $store.state.dbeffects"
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
    middleware: 'auth',
    scrollToTop: true,
    methods: {
        deleteEffect(id) {
            this.$store.dispatch('deleteEffect', id);
        }
    }
}

</script>

<style scoped>

.replicationList {
    padding: 0;
    list-style: none;
}

.replicationTable {
    width: 100%;
    max-width: 800px;
}

thead {
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

</style>