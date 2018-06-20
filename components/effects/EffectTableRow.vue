<template>
    <tr>
        <td style="min-width: 300px"> <nuxt-link :to="effect.url"> {{ effect.name }} </nuxt-link> </td>
        <td> <span class="tagItem" v-for="tag in effect.tags" :key="tag"> {{ tag }} </span>
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

<style>

.tagItem {
    display: inline-block;
    font-size: 14px;
    color: #555;
    background-color: #F5F5F5;
    border: 1px dotted #CCC;
    margin: 0 2.5px;
    padding: 3px;
    border-radius: 10px;
}

</style>