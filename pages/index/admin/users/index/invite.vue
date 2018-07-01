<template>
    <div class="inviteUsers">
        <hr />
        <h3> Invite Users </h3>
        
        <label for="inviteUsers__label"> Expiration (optional) </label>
        <no-ssr>
            <datepicker 
                :disabledDates="disabledDates"
                v-model="expiration"
                name="expiration"
                format="dsu MMMM, yyyy" 
                :clear-button="true"
                clear-button-icon="fa fa-times"
                >
            </datepicker>
        </no-ssr>
        <button @click="generateInviteURL"> Generate </button>
        <div v-if="generatedInvitation" class="generatedInvitation">
            <div class="success"> Invitation Generated </div>
            <input ref="inviteURLInput" :value="inviteURL" />
            <button @click="copyURL"> Copy </button>
        </div>
    </div>

</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
    data() {
        return {
            expiration: undefined,
            generatedInvitation: undefined
        }
    },
    components: {
        Datepicker
    },
    computed: {
        disabledDates() { return { to: new Date(Date.now()) }; },
        inviteURL() { return this.generatedInvitation ? this.hostname + 'user/register/' + this.generatedInvitation._id : ''; },
        hostname() { return this.$axios.defaults.baseURL; }
    },
    methods: {
        async generateInviteURL() {
            try {
                let { invitation } = await this.$axios.$post('/api/invitations/generate', { expiration: this.expiration });
                this.generatedInvitation = invitation;
            } catch (err) {
                console.log(err);
            }
        },
        clearExpiration() {
            this.expiration = undefined;
        },
        copyURL() {
            this.$refs.inviteURLInput.select();
            document.execCommand("copy");
        }
    }
}

</script>

<style scoped>
    .generatedInvitation {
        margin: 2em 0;
    }
</style>