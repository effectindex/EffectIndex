<template>
    <div class="pageContent">
        <i class="fa fa-picture-o categoryIcon"> </i>
        <h1> Replications </h1>
        <p> 
             <span class="bold"> Replications </span> are image, video, and audio recreations of the
             sensory experiences produced by the various subjective effects that a user may encounter
             under the influence of hallucinogens. Replications may be created intentionally or 
             unintentionally, as long as they accurately convey the effect being shown. They serve
             the purpose of documenting certain experiences in a level of detail which descriptive
             language is incapable of describing.
        </p>
        <p>
            This page will serve as a dedicated index of as many replication examples as possible in 
            the form of images, animations, and videos. These are primarily sourced from our subreddit, 
            through <nuxt-link to="/artists"> dedicated artists </nuxt-link> such as 
            <nuxt-link to="/people/StingrayZ"> StingrayZ </nuxt-link>,
            <nuxt-link to="/people/Zenx2"> Zenx2 </nuxt-link>, 
            and from various sources throughout the internet. It is worth noting that while the artist 
            is credited for each replication wherever possible, if you would like your artwork removed
            or its link altered please do not hesitate to contact me at disregardeverythingisay@gmail.com.
        </p>
        <light-box title="Autonomous Entities" :image-set="$store.state.gallery.autonomous_entities" />
        <light-box title="Colour Enhancement" :image-set="$store.state.gallery.colour_enhancement" />
        <light-box title="Drifting" :image-set="$store.state.gallery.drifting" />
        <light-box title="Environmental Cubism" :image-set="$store.state.gallery.environmental_cubism" />
        <light-box title="Environmental Patterning" :image-set="$store.state.gallery.environmental_patterning" />
        <light-box title="Geometry" :image-set="$store.state.gallery.geometry" />
        <light-box title="Fractals" :image-set="$store.state.gallery.fractals" />
        <light-box title="Scenery Slicing" :image-set="$store.state.gallery.scenery_slicing" />
        <light-box title="Recursion" :image-set="$store.state.gallery.recursion" />
        <light-box title="Symmetrical Texture Repetition" :image-set="$store.state.gallery.symmetrical_texture_repetition" />
        <light-box title="Shadow People" :image-set="$store.state.gallery.shadow_people" />
        <light-box title="Tracers" :image-set="$store.state.gallery.tracers" />
    </div>
</template>

<script>
import LightBox from '@/components/LightBox/LightBox.vue';

export default {
    components: {
        LightBox
    }
}
</script>