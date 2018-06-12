<template>
    <div class="pageContent">
        <replication-editor @new-replication="submitReplication" />
    </div>
</template>

<script>
import ReplicationEditor from '@/components/replications/ReplicationEditor';

export default {
    components: {
        ReplicationEditor
    },
    middleware: 'auth',
    methods: {
        async submitReplication(replication) {
            let returnedReplication = await this.$store.dispatch('submitReplication', replication);
            this.$router.push('/replications/list');
        }
    }
}

</script>