<template>
    <replication-input @new-replication="submitReplication" />
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
            console.log('test');
            let returnedReplication = await this.$store.dispatch('submitReplication', replication);
            this.$router.push('/replications/');
        }
    }
}

</script>