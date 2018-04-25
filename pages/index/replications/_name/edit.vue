<template>
    <div class="pageContent">
        <replication-input :replication="replication" @edit-replication="submitReplication" />
    </div>
</template>

<script>
import ReplicationInput from '@/components/replications/ReplicationInput';

export default {
    components: {
        ReplicationInput
    },
    middleware: 'auth',
    methods: {
        async submitReplication(replication) {
            let returnedReplication = await this.$store.dispatch('updateReplication', replication);
            this.$router.push('/replications/');
        }
    },
    async asyncData(app) {
        let { replication } = await app.$axios.$get('/api/replications/' + app.params.name);
        return { replication };
    } 
}

</script>