<template>
  <div class="redirect-details">
    <div class="redirect-details-info">
      <div class="redirect-from">
        <client-only>
          <nuxt-link
            class="redirect-link"
            :to="'/' + from"
          >
            <span class="domain"> {{ hostname + '/' }}</span>{{ from }}
          </nuxt-link>
        </client-only>
      </div>
      <div class="redirect-separator">
        &#129046;
      </div>
      <div class="redirect-to">
        <client-only>
          <nuxt-link
            class="redirect-link"
            :to="'/' + to"
          >
            <span class="domain"> {{ hostname + '/' }}</span>{{ to }}
          </nuxt-link>
        </client-only>
      </div>
    </div>
    <div
      class="redirect-details-controls"
    >
      <button
        class="edit-button"
        @click="edit"
      >
        Edit
      </button>
      <div style="width: 10px;" />
      <button
        class="delete-button"
        @click="deleteRedirect" 
      >
        Delete
      </button> 
    </div>
  </div>
</template>

<script>
export default {
  props: {
    from: {
      type: String,
      default: 'unknown'
    },
    to: {
      type: String,
      default: 'unknown'
    }
  },
  computed: {
    hostname() {
      return process.client ?
        window.location.hostname + (window.location.port ? ':' + window.location.port : '') :
        '';
    }
  },
  methods: {
    edit () {
      this.$emit('edit');
    },
    deleteRedirect () {
      this.$emit('delete');
    }
  }
};
</script>

<style scoped>
  .redirect-details {
    display: flex;
    padding: 5px 0;
  }

  .redirect-details-info {
    flex: 1;
    display: flex;
    flex-direction: row;
    font-size: 18px;
  }

  .redirect-details-controls {
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .redirect-link {
    color: #666;
  }

  .redirect-separator {
    width: 20px;
    margin: 0 1em;
    color: #888;
    line-height: 27px;
  }

  .delete-button {
    color: red;
  }

  .domain {
    color: #BBB;
  }

  button {
    flex: 1;
    background-color: #F3F3F3;
    border: 1px solid #CCC;
    transition: all 0.25s ease;
    cursor: pointer;
    height: 25px;
  }

  button:hover {
    background-color: #DDD;
  }
</style>