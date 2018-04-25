    <template>
        <div>
            <h1> {{ (this.effect ? 'Update' : 'Add') }} an Effect </h1>

            <div>
                <label> Name </label>
                <input class="input__singleLine" v-model="name" />
            </div>

            <div>
                <label> Description </label>
                <textarea class="input__textarea" v-model="description"> </textarea>
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
                substance_classes: this.effect ? this.effect.substance_classes : []
            }
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
                    related_substances: this.related_substances,
                    citations: this.citations,
                    external_links: this.external_links,
                    see_also: this.see_also,
                    tags: this.tags
                });
            }
        },
        props: ['effect'],
        middleware: ['auth'],
        components: {
            CitationInput,
            SubstanceInput,
            LinkInput,
            SeeAlsoInput,
            TagInput
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

    .input__textarea {
        width: 100%;
        min-height: 500px;
        padding: 1em;
    }

    .input__singleLine, textarea {
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