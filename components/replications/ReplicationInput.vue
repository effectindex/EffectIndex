<template>
    <div>
        <h1> {{ replication ? 'Update' : 'Add' }} Replication </h1>
        <div>
            <label> Title: </label>
            <input class="input__singleLine" v-model="title" />
        </div>
        <div>
            <label> Artist: </label>
            <input class="input__singleLine" v-model="artist" />
        </div>
        <div>
            <label> Artist Webpage: </label>
            <input class="input__singleLine" v-model="artist_url" />
        </div>
        <div>
            <label> Associated Effects: </label>
            <ul class="effectList">
                <li v-for="effect in $store.state.dbeffects" :key="effect.id">
                    <input 
                        type="checkbox"
                        :id="effect.name"
                        class="effectList__checkbox"
                        :value="effect._id"
                        v-model="associated_effects" />
                        {{ effect.name }}
                </li>
            </ul>
        </div>        
        <div>
            <label> Description: </label>
            <input class="input__singleLine" v-model="description" />
        </div>
        <div>
            <label> Date: </label>
            <input class="input__singleLine" v-model="date" />
        </div>
        <div class="input__typeSelector">
            <label> Type: </label>
            <input type="radio" id="radioButton__image" value="image" v-model="type">
            <label for="radioButton__image"> Image </label>
            <input type="radio" id="radioButton__gfycat" value="gfycat" v-model="type">
            <label for="radioButton__image"> Gfycat </label>
            <input type="radio" id="radioButton__audio" value="audio" v-model="type">
            <label for="radioButton__image"> Audio </label>           
        </div>

        <div>
            <label> {{this.type === 'gfycat' ? 'Gfycat ID' : 'Filename' }}: </label>
            <input class="input__singleLine" v-model="resource" />
        </div>
        <div v-show="(type === 'gfycat')">
            <label> Thumbnail: </label>
            <input class="input__singleLine" v-model="thumbnail" />
        </div>
 
        <div v-if="(type === 'image')" class="replicationInput__imagePreview">
            <img v-show="resource" :src="'/gallery/' + resource" height="200" />
            <img v-show="resource" :src="'/gallery/thumbnails/' + resource" />
        </div>

        <div class="replicationInput__gfycatPreview" v-else-if="(type === 'gfycat')">
            <iframe :src="'https://gfycat.com/ifr/' + resource"
                frameborder='0'
                scrolling='no'
                height='200'
            ></iframe>
            <img v-show="thumbnail" :src="'/gallery/thumbnails/' + thumbnail" />
        </div>

        <div class="replicationInput__audioPreview" v-else-if="(type === 'audio')">
            <audio-player :src="'/audio/' + resource" :title="title" :artist="artist" />
        </div>

        <div class="replication__buttons">
            <button @click="submitReplication()"> Save </button> <nuxt-link tag="button" to="/replications/"> Cancel </nuxt-link>
        </div>
    </div>
</template>

<script>
import AudioPlayer from '@/components/AudioPlayer/AudioPlayer.vue';

    export default {
        data () {
            return {
                id: this.replication ? this.replication._id : '',
                resource: this.replication ? this.replication.resource : '',
                thumbnail: this.replication ? this.replication.thumbnail : '',
                type: this.replication ? this.replication.type : '',
                title: this.replication ? this.replication.title : '',
                url: this.replication ? this.replication.url : '',
                artist: this.replication ? this.replication.artist : '',
                artist_url: this.replication ? this.replication.artist_url : '',
                description: this.replication ? this.replication.description : '',
                date: this.replication ? this.replication.date : '',
                associated_effects: this.replication ? this.replication.associated_effects : []
            }
        },
        mounted () {
            this.$store.dispatch('getEffects');
        },
        components: {
            AudioPlayer
        },
        methods: {
            submitReplication() {
                let replication = {
                    id: this.id,
                    type: this.type,
                    resource: this.resource,
                    title: this.title,
                    artist: this.artist,
                    artist_url: this.artist_url,
                    description: this.description,
                    date: this.date,
                    associated_effects: this.associated_effects
                }

                this.$emit(this.replication ? 'edit-replication': 'new-replication', replication);

                
            }
        },
        props: ['replication'],
        middleware: ['auth'],
    }
</script>

<style scoped>

    .effectList {
        columns: 3;
        font-size: 14px;
        color: black;
        list-style: none;
        padding: 0;
    }

    .effectList__checkbox {
        margin-right: 1em;
    }

    label {
        display: block;
        margin: 1em 0;
        font-family: 'proxima-nova';
        text-transform: uppercase;
        letter-spacing: 1px;

    }

    .input__typeSelector > label {
        display: inline-block;
        margin: 1em 2em 0 0;
    }

    .input__typeSelector > input {
        display: inline-block;
        margin-right: 1em;
        cursor: pointer;
    }

    .input__textarea {
        width: 100%;
        min-height: 500px;
        padding: 1em;
    }

    .replicationInput__gfycatPreview {
        padding-top: 1em;
    }

    .replicationInput__gfycatPreview img {
        margin-left: 1em;
    }

    .replicationInput__imagePreview img {
        margin-top: 1em;
        margin-right: 1em;
    }

    .replicationInput__audioPreview {
        padding-top: 1em;
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

    .replication__buttons button {
        margin-right: 1em;
    }

    button:hover { opacity: 1; }
</style>