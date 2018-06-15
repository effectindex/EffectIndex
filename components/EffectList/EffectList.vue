<template>
    <div class="effectList">
        <ul class="effectList__classes">
            <li v-if="(listType === 'all' || listType === 'sensory')">
                <ul class="effectList__subclasses">
                    <li> <i class="fa fa-eye effectList__icon"> </i> <h2>  Visual Effects </h2>
                        <ul class="effectList__actions">
                            <action-list title="Enhancements" :effects="filterEffectByTag('visual', 'enhancement')" />
                            <action-list title="Suppressions" :effects="filterEffectByTag('visual', 'suppression')" />
                            <action-list title="Distortions" :effects="filterEffectByTag('visual', 'distortion')" />
                            <action-list title="Geometry" :effects="filterEffectByTag('visual', 'geometry')" />
                            <action-list title="Hallucinatory States" :effects="filterEffectByTag('visual', 'hallucinatory state')" />               
                        </ul>
                    </li>
                    <li> <i class="fa fa-volume-up effectList__icon"> </i> <h2>  Auditory Effects </h2>
                        <ul class="effectList__actions">
                            <action-list :effects="filterEffectByTag('auditory')" />            
                        </ul>
                    </li>
                    <li> <i class="fa fa-hand-paper-o effectList__icon"> </i> <h2>  Tactile Effects </h2>
                        <ul class="effectList__actions">
                            <action-list :effects="filterEffectByTag('tactile')" />            
                        </ul>
                    </li>
                    <li> <i class="fa fa-chain-broken effectList__icon"> </i> <h2>  Disconnective Effects </h2>
                        <ul class="effectList__actions">
                            <action-list :effects="filterEffectByTag('disconnective')" />            
                        </ul>
                    </li>
                    <li> <i class="fa fa-cogs effectList__icon"> </i> <h2>  Multisensory Effects </h2>
                        <ul class="effectList__actions">
                            <action-list :effects="filterEffectByTag('multisensory')" />            
                        </ul>
                    </li>     
                </ul>
            </li>
            <li v-if="(listType === 'all' || listType === 'cognitive')">
                <ul class="effectList__subclasses">
                    <li> <i class="fa fa-user effectList__icon"> </i> <h2>  Cognitive Effects </h2>
                        <ul class="effectList__actions">
                            <action-list title="Enhancements" :effects="filterEffectByTag('cognitive', 'enhancement')" />
                            <action-list title="Suppressions" :effects="filterEffectByTag('cognitive', 'suppression')" />
                            <action-list title="Alterations" :effects="filterEffectByTag('cognitive', 'alteration')" />
                            <action-list title="Psychological States" :effects="filterEffectByTag('cognitive', 'psychological state')" />
                            <action-list title="Transpersonal States" :effects="filterEffectByTag('cognitive', 'transpersonal state')" />               
                        </ul>
                    </li>
                </ul>
            </li>
            <li v-if="(listType === 'all' || listType === 'physical')">
                <ul class="effectList__subclasses">
                    <li> <i class="fa fa-child effectList__icon"> </i> <h2>  Physical Effects </h2>
                        <ul class="effectList__actions">
                            <action-list title="Enhancements" :effects="filterEffectByTag('physical', 'enhancement')" />
                            <action-list title="Suppressions" :effects="filterEffectByTag('physical', 'suppression')" />
                            <action-list title="Alterations" :effects="filterEffectByTag('physical', 'alteration')" />
                            <action-list title="Cardiovascular" :effects="filterEffectByTag('physical', 'cardiovascular')" />
                            <action-list title="Cerebrovascular" :effects="filterEffectByTag('physical', 'cerebrovascular')" />
                            <action-list title="Bodily" :effects="filterEffectByTag('physical', 'bodily')" />             
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import actionList from './effectList__actionList';

export default {
    props: ['listType'],
    components: {
        actionList
    },
    methods: {
        filterEffectByTag(...tags) {
            return this.$store.state.effects.filter(
                (effect) => tags.every((tag) => (effect.tags.indexOf(tag) > -1))
            );
        }
    }
}
</script>


<style>
    .effectList ul {
        margin-bottom: 2em;
        padding-left: 0;
    }

    .effectList__icon {
        color: rgba(26, 26, 26, 0.7);
        font-size: 30px;
        width: 30px;
    }


    .effectList__classes, .effectList__subclasses {
        list-style: none;
        padding-left: 0;
    }

    .effectList__classes > li, .effectList__subclasses > li {
        margin-top: 1em;
        border-bottom: 1px solid #CCC;
    }

    .effectList__classes li:first-child, .effectList__subclasses li:first-child {
        margin-top: 0;
    }

    .effectList__classes > li:last-child, .effectList__subclasses > li:last-child {
        border-bottom: 0;
    }


    .effectList__subclasses h2 {
        color: #3d9991;
        display: inline-block;
        text-transform: uppercase;
        font-family: proxima-nova;
        font-size: 22px;
        font-weight: bold;
        letter-spacing: 2px;
        margin-left: 20px;
    }

    .effectList__actions {
        list-style: none;
        margin-left: 3em;
        padding: 0;
    }

    .effectList__actions h3 {
        text-transform: uppercase;
        font-family: Titillium Web;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 2px;
        margin-top: 1em;
    }

    .effectList__actions > li {
        margin: 0.25em 0;
    }

    .effectList__effect {
        list-style-type: disc;
        color: rgba(26, 26, 26, 0.7);
        margin-left: 2em;
    }

    .effectList__effect > li > a {
        text-decoration: none;
        color: #3d9991;
        font-size: 18px;
        transition: color ease 100ms;
    }

    .effectList__effect > li > a:hover {
        color: #333;
    }

    @media (max-width: 380px) {
        .effectList__icon {
            display: none;
        }

        .effectList__subclasses h2 {
            margin-left: 0;
        }

        .effectList__actions {
            margin-left: 1em;
        }

        .effectList__effect {
            margin-left: 1em;
        }
    }
    

</style>
