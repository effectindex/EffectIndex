<template>
  <div class="content">
    <section 
      :class="{ sectionContainerPulledout: navbarPullout }"
      class="sectionContainer"
    >
      <header-nav />
      <div class="page">
        <nuxt-child />
      </div>
      <custom-footer />
    </section>
    <pullout-menu />
    <modal
      v-if="modalActive"
      :active="modalActive"
      :type="modalData.type"
      :src="(modalData.type === 'image') ? modalData.resource : modalData.resource"
      @toggleModal="toggleModal" 
    />
  </div>
</template>

<script>
import HeaderNav from "@/components/header/HeaderNav.vue";
import CustomFooter from "@/components/footer/Footer.vue";
import PulloutMenu from "@/components/PulloutMenu/PulloutMenu.vue";
import Modal from "@/components/Modal";

export default {
  name: 'EffectIndex',
  components: {
    HeaderNav,
    CustomFooter,
    PulloutMenu,
    Modal
  },
  computed: {
    navbarPullout() {
      return this.$store.state.navbar_pullout;
    },
    modalActive() {
      return this.$store.state.modal.active;
    },
    modalData() {
      return {
        type: this.$store.state.modal.type,
        resource: this.$store.state.modal.resource
      };
    }
  },
  methods: {
    toggleModal() {
      this.$store.commit("toggle_modal");
    }
  },
  head() {
    return {
      titleTemplate: "%s - Effect Index",
      title: "Home",
      meta: [
        { name: 'description', hid: 'description', content: "A resource dedicated to establishing the field of formalised subjective effect documentation." },
        { name: 'apple-mobile-web-app-title', hid: 'apple-mobile-web-app-title', content: "Effect Index" },
        // Open Graph
        { name: 'og:title', hid: 'og:title', content: "Effect Index" },
        { name: 'og:description', hid: 'og:description', content: "A resource dedicated to establishing the field of formalised subjective effect documentation." },
        { name: 'og:type', hid: 'og:type', content: 'website' },
        { name: 'og:url', hid: 'og:url', content: 'https://effectindex.com' },
        { name: 'og:image', hid: 'og:image', content: 'https://effectindex.com/logo-letter.png' },
        // Twitter Card
        { name: 'twitter:card', hid: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', hid: 'twitter:title', content: "Effect Index" },
        { name: 'twitter:description', hid: 'twitter:description', content: "A resource dedicated to establishing the field of formalised subjective effect documentation." },
        { name: 'twitter:image', hid: 'twitter:image', content: 'https://effectindex.com/logo-letter.png' },
        { name: 'twitter:image:alt', hid: 'twitter:image:alt', content: 'Effect Index Logo' }
      ]
    };
  }
};
</script>