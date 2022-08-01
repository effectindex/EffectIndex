<template>
  <div class="pageContent">
    <h1> Missing Data </h1>

    <h2> Effects </h2>
    <table>
      <thead>
        <tr>
          <td class="name">
            Name
          </td> <td> long summary </td> <td> social media img </td>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="effect in effects"
          :key="effect._id"
        >
          <td>
            <nuxt-link :to="`/admin/effects/${effect.url}`">
              {{ effect.name }}
            </nuxt-link>
          </td>
          <td> {{ hasField(effect, 'long_summary_raw') ? 'YES' : 'MISSING' }} </td>
          <td> {{ hasField(effect, 'social_media_image') ? 'YES' : 'MISSING' }} </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  async fetch({ store }) {
    await store.dispatch("effects/get");
  },
  computed: {
    effects() {
      return this.$store.state.effects.list;
    }
  },
  methods: {
    hasField(entity, name) {
      if (!(typeof(entity) === 'object')) return false;
      if (name in entity) {
        if ((typeof entity[name]) === 'string') {
          if (entity[name].length > 0) return true;
        }
      }
      return false;
    }
  }
};
</script>

<style scoped>
 thead td {
   width: 200px;
 }

 .name {
   width: 300px;
 }
</style>
