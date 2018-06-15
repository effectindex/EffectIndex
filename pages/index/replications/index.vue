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
    <hr />
    <effect-selector :effects="replicated_effects" :selected="selected_effect" />
    <h3 style="text-align: center;"> {{ selected_effect_name }} </h3>
    <light-box
        :imageSet="replications.filter((effect) => effect.associated_effects.indexOf(selected_effect) >= 0)" base="/gallery/"
        />

</div>
</template>

<script>
import EffectSelector from '@/components/EffectSelector.vue';
import LightBox from '@/components/LightBox/LightBox.vue';

export default {
    components: {
        EffectSelector,
        LightBox
    },
    computed: {
        replicated_effects () { return this.$store.state.gallery.replicated_effects; },
        replications () { return this.$store.state.gallery.replications },
        selected_effect () { return this.$store.state.gallery.selected_effect; },
        selected_effect_name () {
            let selected_effect = this.replicated_effects.find((val) => val._id === this.selected_effect);

            return (selected_effect) ? selected_effect['name'] : '';
        }
    },
    async fetch ({ store, params }) { await store.dispatch('getGallery'); }
}
</script>