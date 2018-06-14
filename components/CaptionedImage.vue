<template>
<div class="captionedImage"
    :style="{
        float: (align ? align : 'right'),
        width: (width ? width + 'px' : 'auto'),
        height: (height ? height + 'px' : 'auto'),
        marginLeft: (align === 'right' ? '1em' : '0'),
        marginRight: (align === 'left' ? '1em' : '0')
        }" >
    <img :src="src">
    <p class="captionedImage__caption"> <slot></slot> </p>
</div>

</template>

<script>
export default {
    props: ['src', 'align', 'width', 'height']
}
</script>

<style scoped>
.captionedImage {
    text-align: center;
    margin: 1em;
}

.captionedImage__caption {
    font-size: 15px;
    text-align: left;
    color: black;
    max-width: 100%;
    padding: 0 0.5em;
}

</style>