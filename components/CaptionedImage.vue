<template>
<figure :class="'captionedImage ' + float + ' unfloat'"
    :style="{
        width: (width ? width + 'px' : '100%')
        }" >
    <div v-if="src">
        <a :href="src" target="_blank"> 
            <img 
                :src="src"
                :width="(width ? width + 'px' : '100%')"
                :height="(height ? height + 'px' : '100%')" />
        </a>
    </div>
    <div 
        v-else-if="gfycat" style="text-align: center;">
            <iframe :src="'https://gfycat.com/ifr/' + gfycat + '?hd=1&controls=0'"
                frameborder='0'
                scrolling='no'
                :width="width"
                :height="height"
                style='transform: scale(1); margin: 0 auto;'
                allowfullscreen
            ></iframe>
    </div>
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
    props: ['src', 'align', 'width', 'height', 'artist', 'title', 'caption', 'gfycat'],
    computed: {
        float() {
            if (!this.align) return 'floatRight';
            else if (this.align.toLowerCase() === 'right') return 'floatRight';
            else if (this.align.toLowerCase() === 'left') return 'floatLeft';
        }
    }
}
</script>

<style scoped>

.floatRight {
    float: right;
    margin: 1em;
    margin-right: 0;
}

.floatLeft {
    float: left;
    margin: 1em;
    margin-left: 0;
}

@media (max-width: 500px) {
    .unfloat {
        float: none;
        margin: 1em auto;
    }
}

.artistTitle {
    text-align: center;
}

.captionedImage__caption {
    font-size: 15px;
    text-align: center;
    color: #666;
    line-height: 1.25em;
    width: 100%;
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