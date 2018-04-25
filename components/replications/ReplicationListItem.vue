<template>
    <li class="replication">
        <div v-if="replication.type === 'image'">
            <img v-if="replication.resource" :src="'/gallery/thumbnails/' + replication.resource" />
        </div>
        <div v-else-if="replication.type === 'gfycat'">
            <img v-if="replication.thumbnail" :src="'/gallery/thumbnails/' + replication.thumbnail" />
            <iframe v-else-if="replication.resource" :src="'https://gfycat.com/ifr/' + replication.resource"
                frameborder='0'
                scrolling='no'
                height='200'
            ></iframe>
            <i v-else class="fa fa-image"> </i>
        </div>
        <div v-else-if="replication.type === 'audio'">
            <AudioPlayer :src="replication.resource" simple="true" />
        </div>

        <div>
            <span class="replication__title"> {{ replication.title }} </span> by
            <span class="replication__artist">
                <ext-link v-if="replication.artist_url" :href="replication.artist_url"> {{ replication.artist }} </ext-link>
                <span v-else> {{ replication.artist }} </span>
            </span>
        </div>
        
        <div class="replication__controls" v-show="$auth.loggedIn">
            <nuxt-link :to="'/replications/' + replication.url + '/edit'"> Edit </nuxt-link>
            <a @click="deleteReplication(replication._id)"> Delete </a>
        </div> 
    </li>

</template>

<script>
import ExtLink from '@/components/ExtLink.vue'
import AudioPlayer from '@/components/AudioPlayer/AudioPlayer.vue';

export default {
    props: ['replication'],
    components: {
        ExtLink,
        AudioPlayer
    },
    methods: {
        deleteReplication(id) {
            this.$emit('deleteReplication', id);
        }
    }
}
</script>

<style>

.replication__title {
    font-weight: bold;
}
.replication {
    color: black;
    height: 250px;
    display: inline-block;
    padding: 1em;
    text-align: center;
}

</style>