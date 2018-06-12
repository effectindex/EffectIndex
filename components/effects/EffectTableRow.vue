<template>
    <tr>
        <td style="min-width: 300px"> {{ effect.name }} </td>
        <td style="padding-right: 2em">
            <nuxt-link :to="'/effects/' + effect.url + '/edit'"> Edit </nuxt-link>
        </td>
        <td> <a style="color: red; cursor: pointer;" @click="deleteEffect(effect._id)"> Delete </a> </td>
    </tr>
</template>

<script>
import ExtLink from '@/components/ExtLink.vue';
export default {
    props: ['effect'],
    components: {
        ExtLink
    },
    methods: {
        deleteEffect(id) {
            this.$emit('deleteEffect', id);
        }
    }
}
</script>