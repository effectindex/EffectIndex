    <template>
        <div>
            <div>
                <label> Name </label>
                <input class="effectEditor__input" v-model="name" />
            </div>

            <div>
                <label> Description </label>
                <textarea class="effectEditor__textarea effectEditor__description" v-model="description"> </textarea>
            </div>

            <div class="effectEditor__showHide">
                <a @click="toggleDetails()"> {{this.showDetails ? 'Hide' : 'Show'}} Details </a>
            </div>

            <div v-show="showDetails">
                <div>
                    <label> Citations </label>
                    <citation-input v-model="citations" />
                </div>

                <div>
                    <label> Short Summary </label>
                    <textarea class="effectEditor__textarea effectEditor__summary" v-model="summary"> </textarea>
                </div>

                <div>
                    <label> Analysis </label>
                    <textarea class="effectEditor__textarea effectEditor__analysis" v-model="analysis"> </textarea>
                </div>

                <div>
                    <label> Related Substances </label>
                    <substance-input v-model="related_substances" />
                </div>

                <div>
                    <label> External Links </label>
                    <link-input v-model="external_links" />
                </div>    

                <div>
                    <label> See Also </label>
                    <see-also-input v-model="see_also" />
                </div>

                <div>
                    <label> Tags </label>
                    <tag-input v-model="tags" />
                </div>

                <div>
                    <label> Contributors </label>
                    <contributor-input v-model="contributors" />
                </div>

                <div>
                    <label> Gallery Order </label>
                    <ol v-if="!gallery_order.length">
                        <li v-for="(replication, index) in associated_replications" :key="replication._id">
                            {{ replication.title }}
                            [<a @click="moveReplicationUp(index)">Up </a>
                            | <a @click="moveReplicationDown(index)"> Down </a>
                            | <a @click="removeReplication(index)"> Remove</a>]
                        </li>
                    </ol>
                    <ol v-else>
                        <li v-for="(replication, index) in combined_order" :key="replication._id">
                            {{ replication.title }}
                            [<a @click="moveReplicationUp(index)">Up </a>
                            | <a @click="moveReplicationDown(index)"> Down </a>
                            | <a @click="removeReplication(index)"> Remove</a>]
                        </li>
                    </ol>
                </div>

            </div>

            <div class="effectEditor__buttons">
                <button style="background-color: #DFD;" @click="submitEffect"> Save </button> 
                <nuxt-link tag="button" :to="'/effects/' + url"> Cancel </nuxt-link>
            </div>

        </div>
    </template>

<script>
    import CitationInput from '@/components/effects/effectEditor__citationInput';
    import SubstanceInput from '@/components/effects/effectEditor__substanceInput';
    import LinkInput from '@/components/effects/effectEditor__linkInput.vue';
    import SeeAlsoInput from '@/components/effects/effectEditor__seeAlsoInput.vue';
    import TagInput from '@/components/effects/effectEditor__tagInput.vue';
    import ContributorInput from '@/components/effects/effectEditor__contributorInput.vue';

    export default {
        data () {
            return {
                showDetails: false,
                id: this.effect ? this.effect._id : undefined,
                name: this.effect ? this.effect.name : '',
                description: this.effect ? this.effect.description_raw : '',
                citations: this.effect ? this.effect.citations : [],
                url: this.effect ? this.effect.url : '',
                related_substances: this.effect ? this.effect.related_substances : [],
                external_links: this.effect ? this.effect.external_links : [],
                see_also: this.effect ? this.effect.see_also : [],
                tags: this.effect ? this.effect.tags : [],
                contributors: this.effect ? this.effect.contributors : [],
                summary: this.effect ? this.effect.summary_raw : '',
                analysis: this.effect ? this.effect.analysis_raw : '',
                gallery_order: this.effect ? this.effect.gallery_order : [],
            }
        },
        computed: {
            combined_order() {
                let combined = this.gallery_order || [];

                this.associated_replications.forEach((replication) => {
                    let foundInOrder = this.gallery_order.find((order_item) => order_item._id === replication._id);
                    if (!foundInOrder) combined.push({ _id: replication._id, title: replication.title });
                });

                return combined;
            },
            associated_replications()  {
                let replications =  this.$store.state.gallery.replications;
                return replications.filter((replication) => replication.associated_effects.indexOf(this.id) >= 0)
            }  
        },
        mounted () {
            this.$store.dispatch('getGallery');
        },
        methods: {
            toggleDetails() {
                this.showDetails = !this.showDetails;
            },
            submitEffect() {
                this.$emit(this.effect ? 'edit-effect': 'new-effect', {
                    id: this.id,
                    name: this.name,
                    description: this.description,
                    citations: this.citations,
                    related_substances: this.related_substances,
                    external_links: this.external_links,
                    see_also: this.see_also,
                    tags: this.tags,
                    summary: this.summary,
                    analysis: this.analysis,
                    contributors: this.contributors,
                    gallery_order: this.gallery_order
                });
            },
            makeGalleryOrder() {
                this.associated_replications.forEach((replication) => {
                    this.gallery_order.push({_id: replication._id, title: replication.title})
                });
            },
            moveReplicationDown(index) {
                if (!this.gallery_order.length) this.makeGalleryOrder();
                if (index < (this.gallery_order.length - 1)) {
                    let swap = this.gallery_order[index];
                    this.gallery_order.splice(index, 1, this.gallery_order[index + 1]);
                    this.gallery_order.splice(index + 1, 1, swap);
                }
            },
            moveReplicationUp(index) {
                if (!this.gallery_order.length) this.makeGalleryOrder();
                if (index > 0) {
                    let swap = this.gallery_order[index];
                    this.gallery_order.splice(index, 1, this.gallery_order[index - 1]);
                    this.gallery_order.splice(index - 1, 1, swap);
                }
            },
            removeReplication(index) {
                if (!this.gallery_order.length) this.makeGalleryOrder();
                this.gallery_order.splice(index, 1);
            }
        },
        props: ['effect'],
        middleware: ['auth'],
        components: {
            CitationInput,
            SubstanceInput,
            LinkInput,
            SeeAlsoInput,
            TagInput,
            ContributorInput
        }
    }
</script>

<style>
    label {
        display: block;
        margin: 1em 0;
        font-family: 'proxima-nova';
        text-transform: uppercase;
        letter-spacing: 1px;

    }

    .effectEditor__textarea {
        width: 100%;
        padding: 1em;
    }

    .effectEditor__textarea.effectEditor__description {
        min-height: 500px;
    }

    .effectEditor__textarea.effectEditor__analysis {
        min-height: 300px;
    }

    .effectEditor__input, .effectEditor__textarea {
        font-family: 'Titillium Web';
        border: 1px solid #CCCCCC;
        padding: 0.5em 1em;
        font-size: 16px;
        width: 100%;
    }

    .effectEditor__showHide {
        font-size: 14px;
        text-align: right;
        user-select: none;
    }

    a { cursor: pointer; }

    button {
        background-color: transparent;
        border: 1px solid #CCC;
        width: 100px;
        padding: 1em;
        margin-top: 1em;
        opacity: 0.6;
        cursor: pointer;
    }

    .effectEditor__buttons button {
        margin-right: 1em;
    }

    button:hover { opacity: 1; }
</style>