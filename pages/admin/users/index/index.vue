<template>
  <div class="pageContent">
    <div class="page-controls">
      <nuxt-link 
        to="/admin/users"
      >
        Users
      </nuxt-link>

      <nuxt-link
        to="/admin/users/invite"
        class="create-invitation-link"
      >
        Generate an Invitation
      </nuxt-link>
      <nuxt-link
        to="/admin/users/invitations"
        class="create-invitation-link"
      >
        Manage Invitations
      </nuxt-link>
    </div>
    <hr>
    <nuxt-child />
  </div>
</template>

<style scoped>
  .page-controls {
    margin: 1em 0;
    display: flex;
  }

  .page-controls a {
    margin-right: 2em;
  }

</style>
