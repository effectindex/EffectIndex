<template>
  <tr>
    <td>
      <nuxt-link :to="'/admin/replications/' + replication.url">
        {{ replication.title }}
      </nuxt-link>
    </td>
    <td style="width: 150px;">
      <ext-link :href="replication.artist_url">
        {{ replication.artist }}
      </ext-link>
    </td>
    <td style="width: 150px;"> 
      <img
        v-show="thumbs"
        :src="'/img/gallery/thumbnails/' + 
          (replication.thumbnail ? replication.thumbnail : replication.resource)"
        class="replicationTableRow__thumbnail"
      >
    </td>
    <td style="font-style: italic;">
      {{ replication.type }}
    </td>
    <td>
      <a 
        style="color: red; cursor: pointer; font-weight: bold;"
        @click="deleteReplication(replication._id)"
      > 
        <fa
          :icon="['far', 'times']"
          class="fa"
        />  
      </a>
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
    },
    thumbs: {
      type: Boolean,
      default: false
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

.replicationTableRow__thumbnail {
  height: 50px;
}
</style>