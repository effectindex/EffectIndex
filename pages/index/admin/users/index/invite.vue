<template>
  <div class="inviteUsers">
    <hr>
    <h3> Invite Users </h3>
    
    <label for="inviteUsers__label"> Expiration (optional) </label>
    <client-only>
      <datepicker 
        v-model="expiration"
        :disabled-dates="disabledDates"
        :clear-button="true"
        name="expiration"
        format="dsu MMMM, yyyy"
      />
    </client-only>
    <button @click="generateInviteURL">
      Generate
    </button>
    <div 
      v-if="generatedInvitation"
      class="generatedInvitation"
    >
      <div class="success">
        Invitation Generated
      </div>
      <input
        ref="inviteURLInput"
        :value="inviteURL"
      >
      <button @click="copyURL">
        Copy
      </button>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
  components: {
    Datepicker
  },
  data() {
    return {
      expiration: undefined,
      generatedInvitation: undefined
    };
  },
  computed: {
    disabledDates() {
      return { to: new Date(Date.now()) };
    },
    inviteURL() {
      let hostname = this.hostname;
      return this.generatedInvitation ? hostname + "/user/register/" + this.generatedInvitation._id : "";
    },
    hostname() {
      return process.env.BASE_URL;
    }
  },
  methods: {
    async generateInviteURL() {
      let { invitation } = await this.$store.dispatch("generateInvitation", this.expiration);
      this.generatedInvitation = invitation;

        this.$toasted.show(
          'Invitation generated. Copy and paste the invitation to the person you\'d like to invite.',
          {
            duration: 2000,
            type: 'success'
          }
        );


    },
    clearExpiration() {
      this.expiration = undefined;
    },
    copyURL() {
      this.$refs.inviteURLInput.select();
      document.execCommand("copy");
    }
  }
};
</script>

<style scoped>
.generatedInvitation {
  margin: 2em 0;
}
</style>