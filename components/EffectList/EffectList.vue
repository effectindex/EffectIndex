<template>
    <div class="effectList">
        <ul class="effectList__classes">
            <li v-if="(listType === 'all' || listType === 'sensory')">
                <ul class="effectList__subclasses">
                    <li> <i class="fa fa-eye effectList__icon"> </i> <h2>  Visual Effects </h2>
                        <ul class="effectList__actions">
                            <action-list title="Enhancements" :effects="getEffects('sensory', 'visual', 'enhancement')" />
                            <action-list title="Suppressions" :effects="getEffects('sensory', 'visual', 'suppression')" />
                            <action-list title="Distortions" :effects="getEffects('sensory', 'visual', 'distortion')" />
                            <action-list title="Geometry" :effects="getEffects('sensory', 'visual', 'geometry')" />
                            <action-list title="Hallucinatory States" :effects="getEffects('sensory', 'visual', 'hallucinatory state')" />               
                        </ul>
                    </li>
                    <li> <i class="fa fa-volume-up effectList__icon"> </i> <h2>  Auditory Effects </h2>
                        <ul class="effectList__actions">
                            <action-list :effects="getEffects('sensory', 'auditory')" />            
                        </ul>
                    </li>
                    <li> <i class="fa fa-hand-paper-o effectList__icon"> </i> <h2>  Tactile Effects </h2>
                        <ul class="effectList__actions">
                            <action-list :effects="getEffects('sensory', 'tactile')" />            
                        </ul>
                    </li>
                    <li> <i class="fa fa-chain-broken effectList__icon"> </i> <h2>  Disconnective Effects </h2>
                        <ul class="effectList__actions">
                            <action-list :effects="getEffects('sensory', 'disconnective')" />            
                        </ul>
                    </li>
                    <li> <i class="fa fa-cogs effectList__icon"> </i> <h2>  Multisensory Effects </h2>
                        <ul class="effectList__actions">
                            <action-list :effects="getEffects('sensory', 'multisensory')" />            
                        </ul>
                    </li>     
                </ul>
            </li>
            <li v-if="(listType === 'all' || listType === 'cognitive')">
                <ul class="effectList__subclasses">
                    <li> <i class="fa fa-user effectList__icon"> </i> <h2>  Cognitive Effects </h2>
                        <ul class="effectList__actions">
                            <action-list title="Enhancements" :effects="getEffects('cognitive', '', 'enhancement')" />
                            <action-list title="Suppressions" :effects="getEffects('cognitive', '', 'suppression')" />
                            <action-list title="Alterations" :effects="getEffects('cognitive', '', 'alteration')" />
                            <action-list title="Psychological States" :effects="getEffects('cognitive', '', 'psychological state')" />
                            <action-list title="Transpersonal States" :effects="getEffects('cognitive', '', 'transpersonal state')" />               
                        </ul>
                    </li>
                </ul>
            </li>
            <li v-if="(listType === 'all' || listType === 'physical')">
                <ul class="effectList__subclasses">
                    <li> <i class="fa fa-child effectList__icon"> </i> <h2>  Physical Effects </h2>
                        <ul class="effectList__actions">
                            <action-list title="Enhancements" :effects="getEffects('physical', '', 'enhancement')" />
                            <action-list title="Suppressions" :effects="getEffects('physical', '', 'suppression')" />
                            <action-list title="Alterations" :effects="getEffects('physical', '', 'alteration')" />
                            <action-list title="Cardiovascular" :effects="getEffects('physical', 'cardiovascular')" />
                            <action-list title="Cerebrovascular" :effects="getEffects('physical', 'cerebrovascular')" />
                            <action-list title="Bodily" :effects="getEffects('physical', 'bodily')" />             
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import effects from '@/data/effects';
import actionList from './effectList__actionList';

export default {
    data () {
        return {
            effects
        }
    },
    props: ['listType'],
    components: {
        actionList
    },
    methods: {
        getEffects(effectClass, effectSubclass, effectAction) {
            return this.effects.filter((effect) => {
                return ( (effect.class === effectClass)
                    && ( (effect.subclass === effectSubclass) || (!effectSubclass) )
                    && ( (effect.action === effectAction) || (!effectAction) )
                    );
            });
        }
    }
}
</script>


<style>
    .effectList {
        margin-top: 3em;
    }

    .effectList__icon {
        color: rgba(26, 26, 26, 0.7);
        font-size: 30px;
        width: 30px;
    }

    .effectList__classes, .effectList__subclasses {
        list-style: none;
        padding-left: 0;
        margin-top: 1em;
        padding-bottom: 1em;
    }

    .effectList__classes > li, .effectList__subclasses > li {
        margin-top: 1em;
        border-bottom: 1px solid #AAA;
        margin-bottom: 20px;
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
        border-bottom: 3px dotted #CCC;
    }

    .effectList__actions {
        list-style: none;
        margin-top: 1em;
        margin-left: 50px;
        padding: 0;
    }

    .effectList__actions h3 {
        text-transform: uppercase;
        font-family: Titillium Web;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 2px;
    }

    .effectList__actions > li {
        margin: 1em 0;
    }

    .effectList__effect {
        margin-top: 1em;
        list-style-type: disc;
        color: rgba(26, 26, 26, 0.7);
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

</style>
