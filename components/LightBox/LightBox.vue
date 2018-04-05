<template>
    <div class="lightBox">
        <h1 v-show="title"> {{ title }} </h1>
        <div v-if="imageSet.length" class="lightBox__canvas">
            <transition name="fade">
                <div 
                    v-if="imageSet[current_image].image_fullsize"
                    class="lightBox__image"
                    :style="'background-image: url(\'' + encodeURI(imageSet[current_image].image_fullsize) + '\');'"
                    :key="imageSet[current_image].image_fullsize"
                    >
                    <image-details 
                            :title="imageSet[current_image].title"
                            :artist="imageSet[current_image].artist"
                            :artist-webpage="imageSet[current_image].artist_webpage" />
                </div>
                <div 
                    v-if="imageSet[current_image].gfycat_name"
                    :key="imageSet[current_image].gfycat_name"
                    style='position:relative;height: 100%;'>
                        <iframe :src="'https://gfycat.com/ifr/' + imageSet[current_image].gfycat_name"
                            frameborder='0'
                            scrolling='no'
                            width='100%'
                            height='100%'
                            style='position:absolute;top:0;left:0'
                            allowfullscreen
                        ></iframe>
                        <image-details 
                            :title="imageSet[current_image].title"
                            :artist="imageSet[current_image].artist"
                            :artist-webpage="imageSet[current_image].artist_webpage" />
                    </div>
            </transition>
            <a @mousedown="previousImage()" class="lightBox__control previousImage"> 
                <i class="fa fa-angle-double-left"> </i>
            </a>
            <a @mousedown="nextImage()" class="lightBox__control nextImage">
                <i class="fa fa-angle-double-right"> </i>
            </a>
        </div>
        <div v-if="imageSet.length" class="lightBox__thumbnailReel" ref="thumbnailReel">
            <div ref="thumbnailContainer" class="lightBox__thumbnailContainer" :style="'left: ' + thumbnailOffset + 'px;'">
                <a
                    v-for="(image, index) in imageSet"
                    @mousedown="selectImage(index)"
                    :key="index">
                    <img class="lightBox__thumbnailImage" ref="activeThumbnail"
                        v-if="image.image_thumbnail"
                        :src="image.image_thumbnail"
                        :class="current_image === index ? {active: true}: {}" />
                    <img class="lightBox__thumbnailImage" ref="activeThumbnail"
                        v-else-if="image.gfycat_name"
                        :src="'http://thumbs.gfycat.com/' + image.gfycat_name + '-thumb100.jpg'"
                        :class="current_image === index ? {active: true}: {}" />    
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import ImageDetails from './LightBox__imageDetails.vue';

export default {
    data() {
        return {
            current_image: 0,
            thumbnailOffset: 0,
        }
    },
    components: {
        ImageDetails
    },
    mounted() {
        this.updateThumbnailOffset();
    },
    methods: {
        updateThumbnailOffset() {
            if (this.$refs.thumbnailReel && this.$refs.activeThumbnail) {

                this.thumbnailOffset = (this.$refs.thumbnailReel.offsetWidth / 2)
                - this.$refs.activeThumbnail[this.current_image].offsetLeft;

                if (this.thumbnailOffset > 0) this.thumbnailOffset = 0;

                if ((this.$refs.thumbnailContainer.lastChild.offsetLeft + this.$refs.thumbnailContainer.lastChild.offsetWidth) <
                this.$refs.thumbnailReel.offsetWidth) this.thumbnailOffset = (this.$refs.thumbnailReel.offsetWidth - (this.$refs.thumbnailContainer.lastChild.offsetLeft
                + this.$refs.thumbnailContainer.lastChild.offsetWidth)) / 2;
            }
        },
        selectImage(index) {
            this.current_image = index;
            this.updateThumbnailOffset();
        },
        nextImage() {
            this.current_image = (this.current_image + 1) % this.$props.imageSet.length;
            this.updateThumbnailOffset();
        },
        previousImage() {
            if (this.current_image === 0) this.current_image = this.$props.imageSet.length - 1;

            else this.current_image = (this.current_image - 1)
            this.updateThumbnailOffset();
        }
    },
    props: {
        title: {
            type: String
        },
        imageSet: {
            default: () => [],
            type: Array
        }
    }
}

</script>


<style>

    .lightBox h1 {
        text-transform: uppercase;
        color: rgb(61, 153, 145);
        font-size: 22px;
        text-align: center;
        font-family: proxima-nova;
        font-weight: 400;
        letter-spacing: 2px;
        margin-bottom: 1em;
    }
    
    .lightBox__canvas {
        height: 600px;
        overflow: hidden;
        text-align: center;
        position: relative;
        background-color: #F7F7F7;
    }

    .lightBox__control {
        display: block;
        height: 100px;
        width: 50px;
        line-height: 100px;
        font-size: 30px;
        position: absolute;
        top: calc(50% - 50px);
        background-color: rgba(0, 0, 0, 0.2);
        opacity: 0.75;
        color: white;
        border-radius: 5px;
    }

    a.lightBox__control  {
        color: white;
        cursor: pointer;
    }

    a.lightBox__control:hover {
        opacity: 1;
    }

    .lightBox__control.nextImage {
        right: 0;
    }

    .lightBox__image {
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        height: 100%;
        width: 100%;
    }

    .lightBox__imageDetails {
        position: absolute;
        top: 0;
        left: 0;
        margin: 25px;
        background-color: rgba(23, 23, 23, 0.3);
        font-family: 'Titillium Web';
        color: white;
        padding: 1em;
        user-select: none;
    }

    @media (max-width: 500px) {
        .lightBox__imageDetails {
            margin: 5px;
            padding: 5px;
        }
    }

    .lightBox__imageDetails .title {
        font-size: 20px;
        font-weight: bold;
        text-shadow: 0px 0px 2px black;
    }

    .lightBox__imageDetails .artist {
        font-size: 14px;
        text-shadow: 0px 0px 2px black;
        font-weight: bold;
        font-style: italic;
    }

    .lightBox__artist a {
        color: white;
        text-decoration: underline;
    }

    .lightBox img {
        height: 100%;
        cursor: pointer;
        opacity: 0.35;
        transition: opacity 0.5s ease;
    }

    .lightBox__thumbnailReel {
        overflow: hidden;
        margin: 1em 0;
    }

    .lightBox__thumbnailImage.active {
        opacity: 1;
    }

    @media (max-width: 500px) {
        .lightBox__canvas {
            height: 400px;
        }
    }

    @media (max-width: 1000px) {
        .lightBox__canvas {
            height: 500px;
        }
    }

    .lightBox__thumbnailContainer {
        position: relative;
        height: 80px;
        transition: left 0.5s ease;
        width: 2000px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

</style>