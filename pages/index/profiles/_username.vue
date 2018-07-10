<template>
    <div class="pageContent">
        <div v-if="profile.username">
            <h1> {{ profile.username }} </h1>
            <profile-image :filename="profile.profileImageFull" :username="profile.username" class="float"/>
            <div v-if="profile.body" v-html="$md.render(profile.body)"> </div>
            <div v-if="replications.length > 0" style="clear: both; margin-top: 2em;">
                <hr />
                <h3> Replications </h3>
                <light-box
                    :imageSet="replications"
                    base="/img/gallery/"
                    />
            </div>
        </div>
        <div v-else>
            <h1> Profile not found </h1>
        </div>
    </div>
</template>

<script>
import ProfileImage from '@/components/profiles/profileImage.vue';
import LightBox from '@/components/LightBox/LightBox.vue';

export default {
    data() {
        return {
            profile: {},
            replications: []
        }
    },
    async asyncData(app) {
        try {
            let { profile } = await app.$axios.$get('/api/profiles/user/' + app.params.username);
            let { replications } = await app.$axios.$get('/api/replications/byartist/' + app.params.username);
            return {profile, replications};
        } catch (error) {
            console.log(error);
        }
    },
    components: {
        ProfileImage,
        LightBox
    }
}
</script>

<style scoped>
  .float {
    float: right; 
    border: 1px solid #E5E5E5; 
    padding: 0.2em;
  }

  @media (max-width: 650px) {
    .float {
        float: none;
        margin: 1em auto;
    }
}
</style>
