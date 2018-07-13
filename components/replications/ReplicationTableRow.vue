<template>
  <tr>
    <td> <nuxt-link :to="'/admin/replications/' + replication.url"> {{ replication.title }} </nuxt-link> </td>
    <td>
      <ext-link :href="replication.artist_url"> {{ replication.artist }} </ext-link>
    </td>
    <td> {{ replication.type }} </td>
    <td>
      <a 
        style="color: red; cursor: pointer;"
        @click="deleteReplication(replication._id)"> [Delete] </a>
    </td>
  </tr>
</template>

<script>
import ExtLink from "@/components/ExtLink.vue";
export default {
  components: {
    ExtLink
  },
  props: {
    replication: {
      type: Object,
      default: () => null
    }
  },
  methods: {
    deleteReplication(id) {
      this.$emit("deleteReplication", id);
    }
  }
};
</script>

<style>
.replicationTableRow__delete a {
  color: red;
}
</style>