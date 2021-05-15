<template>
  <div class="pageContent">
    <Icon
      filename="trash.svg"
      class="categoryIcon"
    />
    <h1> Administration </h1>
    <nuxt-link to="/admin/redirects">
      Redirects
    </nuxt-link>
    <nuxt-link to="/admin">
      Users
    </nuxt-link>
    <nuxt-link to="/admin/blog">
      Blog
    </nuxt-link>
    <nuxt-child style="margin: 2em 0;" />
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  middleware: 'auth',
  components: {
    Icon
  },
  head() {
    return {
      title: "Administration"
    };
  },
  scrollToTop: true
};
</script>

<style scoped>

.tasksContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.taskContainer:first-child {
  margin-left: 0;
}

.taskContainer:last-child {
  margin-right: 0;
}

.dangerZone {
  display: block;
  cursor: pointer;
  color: white;
  border: 3px solid yellow;
  margin: 1em;
  font-weight: bold;
  background-color: red;
  padding: 0.5em;
}

.dangerZone:hover {
  color: orange;
}

.taskContainer {
  border: 1px solid #eee;
  padding: 1em;
  margin: 0.5em;
  flex: 1;
  min-width: 400px;
  background-color: rgb(252, 252, 252);
}

.taskContainer h3 {
  margin: 0;
  margin-bottom: 1em;
}

.serverOptionsContainer {
  padding: 0.5em;
  border: 2px solid #666;
  margin: 1em 0;
  text-align: center;
}

.serverOptionsContainer h3 {
  margin: 0.25em 0 1em 0;
}

.admin {
  background-color: white;
  height: 100vh;
  padding: 2em;
}

ul {
  list-style: none;
  padding: 0;
}

p {
  font-style: italic;
  font-size: 0.9em;
}
</style>