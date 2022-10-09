<template>
  <tr>
    <td>
      <nuxt-link :to="'/admin/replications/' + replication.url">
        {{ replication.title }}
      </nuxt-link>
    </td>
    <td style="text-align: center;"> 
      <Icon
        v-if="replication.featured"
        filename="star.svg"
      />
    </td>
    <td style="width: 150px;">
      <ext-link :href="replication.artist_url">
        {{ replication.artist }}
      </ext-link>
    </td>
    <td style="font-style: italic;">
      {{ replication.type }}
    </td>
    <td style="width: 150px;"> 
      <img
        v-if="thumbs"
        :src="'/img/gallery/thumbnails/' + 
          (replication.thumbnail ? replication.thumbnail : replication.resource)"
        class="replicationTableRow__thumbnail"
      >
    </td>
    <td>
      <a 
        style="color: red; cursor: pointer; font-weight: bold;"
        @click="deleteReplication(replication._id)"
      > 
        <Icon
          filename="times.svg"
          color="red"
        />  
      </a>
    </td>
  </tr>
</template>

<script>
import ExtLink from "@/components/ExtLink.vue";
import Icon from '@/components/Icon';

export default {
  components: {
    ExtLink,
    Icon
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

<style scoped>
.replicationTableRow__delete a {
  color: red;
}

.replicationTableRow__thumbnail {
  height: 50px;
}

.icon {
  display: inline-block;
  height: 18px;
  width: 18px;
  opacity: 0.6;
}

.icon:hover {
  opacity: 1;
}

</style>