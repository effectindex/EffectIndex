<template>
    <tr>
        <td> {{ replication.title }} </td>
        <td>
            <ext-link :href="replication.artist_url"> {{ replication.artist }} </ext-link>
        </td>
        <td> {{ replication.type }} </td>
        <td>
            <nuxt-link :to="'/replications/' + replication.url + '/edit'"> Edit </nuxt-link>
        </td>
        <td> <a style="color: red; cursor: pointer;" @click="deleteReplication(replication._id)"> Delete </a> </td>
    </tr>
</template>

<script>
import ExtLink from '@/components/ExtLink.vue';
export default {
    props: ['replication'],
    components: {
        ExtLink
    }
}
</script>

<style>
    .replicationTableRow__delete a {
        color: red;
    }
</style>