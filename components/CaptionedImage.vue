<template>
<figure class="captionedImage"
    :style="{
        float: (align ? align : 'right'),
        width: (width ? width + 'px' : 'auto'),
        height: (height ? height + 'px' : 'auto'),
        marginLeft: (align === 'right' ? '1em' : '0'),
        marginRight: (align === 'left' ? '1em' : '0')
        }" >
    <a :href="src" target="_blank"> <img :src="src" width="100%" /> </a>
    <figcaption class="captionedImage__caption">
        <span class="artistTitle" v-show="title && artist">
            <span class="title"> {{ title }} </span> by
            <span class="artist"> {{ artist }} </span>
            <span v-show="caption"> - </span>
        </span>
        {{ caption }}
    </figcaption>
</figure>

</template>

<script>
export default {
    props: ['src', 'align', 'width', 'height', 'artist', 'title', 'caption']
}
</script>

<style scoped>
.captionedImage {
    box-sizing: border-box;
    text-align: left;
    margin: 1em;
}

.artistTitle {
    text-align: center;
}

.captionedImage__caption {
    font-size: 15px;
    text-align: center;
    color: #666;
    padding: 0.5em;
    line-height: 1.25em;
}

.title {
    font-weight: bold;
}

.artist {
    font-style: italic;
}

.artistTitle {
    font-size: 14px;
}



</style>