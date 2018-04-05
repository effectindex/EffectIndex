<template>
    <div class="pageContent">
        <h1> Acuity Enhancement  <i class="fa fa-eye categoryIcon"> </i> </h1>
        
        <p>
            <span class="bold"> Acuity enhancement </span> can be described as an enhancement of the clearness and clarity of vision.
            This results in the visual details of the external environment becoming sharpened to the point where
            the edges of objects become perceived as extremely focused, clear and defined. The experience of acuity
            enhancement can be likened to bringing a camera or projector lens that was slightly blurry into focus.
            At its highest level, one may experience the perception that they can now observe and comprehend 
            their entire visual field simultaneously, including their peripheral vision. This is in contrast
            to a sober person, who is typically only able to perceive the small area of central vision in detail. <reference to="1" />
        </p>

        <p>
            While under the influence of this effect, it is very common for people to suddenly notice patterns
            and details in the environment <reference to="2" no="1" /> they may have never previously noticed or appreciated. For example,
            when looking at sceneries, nature, and everyday textures the complexity and perceived beauty of the 
            visual input often becomes suddenly obvious.  <reference to="2" no="2" />
        </p>

        <p>
            Acuity enhancement is often accompanied by other coinciding effects such as 
            <nuxt-link to="/effects/colour-enhancement"> colour enhancement </nuxt-link> and
            <nuxt-link to="/effects/pattern-recognition-enhancement"> pattern recognition enhancement. </nuxt-link> 
            It is most <reference to="3" /> commonly induced under the influence of mild dosages
            of psychedelic compounds, such as LSD, psilocybin, and mescaline. However, it can also occur to a 
            lesser extent under the influence of certain stimulants and dissociatives such as MDMA or 3-MeO-PCP.
        </p>

        <hr />

        <h3> Replications </h3>

        <light-box 
            :image-set="[
                {
                    title: 'Towel',
                    artist: 'Chelsea Morgan',
                    image_fullsize: '/gallery/Towel.jpg',
                    image_thumbnail: '/gallery/thumbnails/Towel.jpg'
                },
                {
                    title: 'LSD Tree Bark',
                    artist: 'Chelsea Morgan',
                    image_fullsize: '/gallery/Tree_Bark.jpg',
                    image_thumbnail: '/gallery/thumbnails/Tree_Bark.jpg'
                },
                {
                    title: 'Moss on Tree Bark',
                    artist: 'Chelsea Morgan',
                    image_fullsize: '/gallery/Moss_on_tree_bark.jpg',
                    image_thumbnail: '/gallery/thumbnails/Moss_on_tree_bark.jpg'
                },                  
            ]"
         />

         <hr />

         <h3> Psychoactive Substances </h3>

         <related-substances 
            :substanceList="$store.state.effects.find((effect) => effect.name === 'Acuity Enhancement')['associated_substances']" />

        <hr />

        <h4> See Also </h4>

        <ul>
            <li> <nuxt-link to="/visual/"> Visual Effects </nuxt-link> </li>
            <li> <nuxt-link to="/effects/colour-enhancement"> Colour Enhancement </nuxt-link> </li>
            <li> <nuxt-link to="/effects/acuity-suppression"> Acuity Suppression </nuxt-link> </li>
        </ul>

        <h4> External Links </h4>

        <ul>
            <li> <ext-link href="https://en.wikipedia.org/wiki/Visual_acuity"> Visual Effects </ext-link> </li>
        </ul>

        <hr />

        <h4> Citations </h4>
        <citation-list>
            <citation from="1">
                <ext-link href="https://www.erowid.org/chemicals/14b/14b_storage1.shtml">
                    https://www.erowid.org/chemicals/14b/14b_storage1.shtml
                </ext-link>
                | 1,4-Butanediol &amp; GBL Storage - 1,4-B &amp; GBL May Dissolve Some Plastics by Erowid (Jul 2001) 
            </citation>
            <citation from="2" no="2">
                <ext-link href="https://www.erowid.org/chemicals/14b/14b_storage1.shtml">
                    https://www.erowid.org/chemicals/14b/14b_storage1.shtml
                </ext-link>
                | 1,4-Butanediol &amp; GBL Storage - 1,4-B &amp; GBL May Dissolve Some Plastics by Erowid (Jul 2001) 
            </citation>    
            <citation from="3">
                <ext-link href="https://www.erowid.org/chemicals/14b/14b_storage1.shtml">
                    https://www.erowid.org/chemicals/14b/14b_storage1.shtml
                </ext-link>
                | 1,4-Butanediol &amp; GBL Storage - 1,4-B &amp; GBL May Dissolve Some Plastics by Erowid (Jul 2001) 
            </citation>    
            <citation from="4">
                <ext-link href="https://www.erowid.org/chemicals/14b/14b_storage1.shtml">
                    https://www.erowid.org/chemicals/14b/14b_storage1.shtml
                </ext-link>
                | 1,4-Butanediol &amp; GBL Storage - 1,4-B &amp; GBL May Dissolve Some Plastics by Erowid (Jul 2001) 
            </citation>    
            <citation from="5">
                <ext-link href="https://www.erowid.org/chemicals/14b/14b_storage1.shtml">
                    https://www.erowid.org/chemicals/14b/14b_storage1.shtml
                </ext-link>
                | 1,4-Butanediol &amp; GBL Storage - 1,4-B &amp; GBL May Dissolve Some Plastics by Erowid (Jul 2001) 
            </citation>    
            <citation from="6">
                <ext-link href="https://www.erowid.org/chemicals/14b/14b_storage1.shtml">
                    https://www.erowid.org/chemicals/14b/14b_storage1.shtml
                </ext-link>
                | 1,4-Butanediol &amp; GBL Storage - 1,4-B &amp; GBL May Dissolve Some Plastics by Erowid (Jul 2001) 
            </citation>                                                                                                                                 
        </citation-list>
    </div>
</template>

<script>
import LightBox from '@/components/LightBox/LightBox.vue';
import RelatedSubstances from '@/components/RelatedSubstances.vue';
import Reference from '@/components/Reference.vue';
import Citation from '@/components/Citation.vue';
import CitationList from '@/components/CitationList.vue';
import ExtLink from '@/components/ExtLink.vue';

export default {
    components: {
        LightBox,
        RelatedSubstances,
        Reference,
        Citation,
        CitationList,
        ExtLink
    }
}
</script>