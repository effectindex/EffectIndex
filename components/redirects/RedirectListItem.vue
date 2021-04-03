<template>
  <li class="redirect-list-item">
    <redirect-details
      v-if="mode === 'display'"
      :from="redirect.from"
      :to="redirect.to"
      @edit="changeMode('edit')"
      @delete="deleteRedirect"
    />
    <redirect-edit-details
      v-else
      :from="redirect.from"
      :to="redirect.to"
      @cancel="changeMode('display')"
      @update="updateRedirect"
    />
  </li>
</template>

<script>
  import RedirectDetails from '@/components/redirects/RedirectDetails';
  import RedirectEditDetails from '@/components/redirects/RedirectEditDetails';

  export default {
    components: {
      RedirectDetails,
      RedirectEditDetails
    },
    props: {
      redirect: {
        type: Object,
        default: () => ({
          _id: undefined,
          from: undefined,
          to: undefined
        })
      }
    },
    data() {
      return {
        mode: 'display'
      };
    },
    methods: {
      deleteRedirect () {
        this.$emit('delete', this.redirect._id);
      },
      updateRedirect (redirect) {;
        this.$emit('update', { _id: this.redirect._id, ...redirect });
        this.changeMode('display');
      },
      changeMode(mode) {
        this.mode = mode;
      }
    }
  };
</script>

<style scoped>

  .redirect-list-item-controls {
    width: 150px;
    display: flex;
    justify-content: space-between;
    margin-left: 1em;
  }

  .redirect-list-item-controls button {
    flex: 1;
  }

  a {
    cursor: pointer;
  }

  .delete-button {
    color: red;
  }
</style>