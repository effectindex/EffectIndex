<template>
    <div class="lightBoxContainer">
        <h1> {{ title }} </h1>
        <div class="canvasContainer">
            <transition name="fade">
                <div 
                    v-if="imageSet[current_image].image_fullsize"
                    class="imageContainer"
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
            <a @click="previousImage()" class="lightBoxControl previousImage"> <i class="fa fa-angle-double-left"> </i> </a>
            <a @click="nextImage()" class="lightBoxControl nextImage"> <i class="fa fa-angle-double-right"> </i> </a>
        </div>
        <div class="thumbnailReel" ref="thumbnailReel">
            <div class="thumbnailContainer" :style="'margin-left: ' + thumbnailOffset + 'px;'">
                <a
                    v-for="(image, index) in imageSet"
                    @click="selectImage(index)"
                    :key="image.title">
                    <img ref="activeThumbnail"
                        v-if="image.image_thumbnail"
                        :src="image.image_thumbnail"
                        :style="current_image === index ? 'opacity: 1;': ''" />
                    <img ref="activeThumbnail"
                        v-else-if="image.gfycat_name"
                        :src="'http://thumbs.gfycat.com/' + image.gfycat_name + '-thumb100.jpg'"
                        :style="current_image === index ? 'opacity: 1;': ''" />    
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
            thumbnailOffset: 0
        }
    },
    components: {
        ImageDetails
    },
    mounted() {
        this.thumbnailOffset = (this.$refs.thumbnailReel.offsetWidth / 2) - this.$refs.activeThumbnail[this.current_image].offsetLeft;
    },
    methods: {
        updateThumbnailOffset() {
            this.thumbnailOffset = (this.$refs.thumbnailReel.offsetWidth / 2) - this.$refs.activeThumbnail[this.current_image].offsetLeft;
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
            if (this.current_image === 0) { 
                this.current_image = this.$props.imageSet.length - 1;

            }
            else this.current_image = (this.current_image - 1)
            this.updateThumbnailOffset();
        }
    },
    props: ['title', 'imageSet']
}

</script>


<style>

    .lightBoxContainer {
        border-top: 1px solid #DDD;
        padding-top: 50px;
        margin-top: 50px;
        margin-bottom: 200px;
        height: 600px;
        width: 100%;
    }

    .lightBoxContainer h1 {
        text-transform: uppercase;
        color: rgb(61, 153, 145);
        font-size: 22px;
        text-align: center;
        font-family: proxima-nova;
        font-weight: 400;
        letter-spacing: 2px;
    }
    
    .canvasContainer {
        height: 100%;
        width: 100%;
        overflow: hidden;
        text-align: center;
        position: relative;
        background-color: #F7F7F7;
    }

    .lightBoxControl {
        display: block;
        height: 100px;
        width: 50px;
        line-height: 100px;
        font-size: 30px;
        position: absolute;
        top: calc(50% - 50px);
        background-color:black;
        opacity: 0.2;
        color: white;
        border-radius: 5px;
    }

    a.lightBoxControl {
        color: white;
        cursor: pointer;
    }

    a.lightBoxControl:hover {
        opacity: 0.6;
    }

    .lightBoxControl.nextImage {
        right: 0;
    }

    .imageContainer {
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

    .imageDetailsContainer {
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
        .imageDetailsContainer {
            margin: 5px;
            padding: 5px;
        }
    }

    .imageDetailsContainer .title {
        font-size: 20px;
        font-weight: bold;
        text-shadow: 0px 0px 2px black;
    }

    .imageDetailsContainer .artist {
        font-size: 14px;
        text-shadow: 0px 0px 2px black;
        font-weight: bold;
        font-style: italic;
    }

    .artist a {
        color: white;
        text-decoration: underline;
    }

    .lightBoxContainer img {
        height: 100%;
        cursor: pointer;
        opacity: 0.35;
    }

    .thumbnailReel {
        width: 100%;
        overflow: hidden;
        margin-top: 1em;
        text-align: left;
    }

    @media (max-width: 500px) {
        .lightBoxContainer {
            height: 400px;
        }
    }

    @media (max-width: 1000px) {
        .lightBoxContainer {
            height: 500px;
        }
    }

    .thumbnailContainer {
        position: relative;
        height: 80px;
        transition: margin-left 0.5s ease;
        width: 3000px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

</style>