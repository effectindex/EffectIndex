<template>
    <div class="gallery__effectSelectorContainer">
        <h1> Gallery </h1>
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
.gallery__effectSelectorContainer {
    margin-bottom: 4em;
}

.gallery__effectSelector {
    margin: 0; 
    padding: 0;
}

.gallery__effectSelectorItem {
    display: inline-block;
    cursor: pointer;
    padding: 0 1em;
    margin-left: 0;
    border-right: 1px solid #EEE;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.gallery__effectSelectorItem:last-of-type {
    border-right: none;
}

.gallery__effectSelectorText {
    font-style: italic;
    padding-left: 1em;
}

.active {
    font-weight: bold;
}

</style>