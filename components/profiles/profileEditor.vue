<template>
    <div>
        <form @submit.prevent="submit">

            <label> Username
            <input type="text" v-model="profile.username"> </label>

            <label> Profile Body 
            <textarea v-model="profile.body"> </textarea> </label>

            <label> Profile Image 
            <input v-model="profile.profileImage" type="text"> </label>

            <profile-image :filename="profile.profileImage" :username="profile.username"></profile-image>

            <button type="submit"> {{ id ? 'Update' : 'Save' }} </button>
        </form>

        <p v-show="errorMessage">
            <span class="errorMessage"> Ungood. {{ errorMessage }} </span>
        </p>

        <p v-show="success">
            <span class="success" > Profile {{ id ? 'updated' : 'added' }}! </span>
        </p>

    </div>
</template>

<script>

import ProfileImage from '@/components/profiles/profileImage.vue';

export default {
    data() {
        return {
            profile: {
                _id: undefined,
                username: '',
                profileBody: '',
                profileImage: '',
            },
            success: false,
            errorMessage: ''
        }
    },
    methods: {
        submit() {
            this.id ? this.submitModified() : this.submitNew()
        },

        async submitNew() {

            let profile = this.profile;
            delete profile._id;

            try {
                let response = await this.$axios.$post('/api/profiles/', { profile });
                if (response) this.success = true;
            } catch (error) {
                if ('error' in error.response.data) this.errorMessage = error.response.data.error.message;
            }
        },
        async submitModified() {

            let profile = this.profile;

            try {
                let response = await this.$axios.$put('/api/profiles/' + this.profile._id, { profile });
                if (response) this.success = true;
            } catch (error) {
                if ('error' in error.response.data) this.errorMessage = error.response.data.error.message;
            }
        },
        async grabProfile() {
            if (this.id) {
                let { profile } = await this.$axios.$get('/api/profiles/' + this.id);
                if (profile) this.profile = profile;
            }
        }
    },
    async mounted() {
        this.grabProfile();
    },
    components: {
        ProfileImage
    },
    props: ['id']
}

</script>