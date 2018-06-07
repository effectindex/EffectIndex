<template>
    <div>
        <ul class="gallery__effectSelector" v-if="effects">
            <li class="gallery__effectSelectorItem" v-for="effect in effects" :key="effect._id">
                <a @click="selectEffect(effect._id)" :class="(effect._id === selected ? 'active' : '')"> {{ effect.name }} </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['effects', 'selected'],
    methods: {
        selectEffect(effectId) { this.$store.dispatch('setGallerySelectedEffect', effectId); }
    },
}
</script>

<style scoped>
.gallery__effectSelector {
    margin: 0; 
    padding: 0;
}

.gallery__effectSelectorItem {
    display: inline-block;
    cursor: pointer;
    margin-right: 2em;
    margin-left: 0;
    font-size: 0.9em;
}

.active {
    font-weight: bold;
}

</style>