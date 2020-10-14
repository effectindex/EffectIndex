<template>
  <div class="pageContent">
    <h1> 
      Categories 
      <Icon
        filename="sitemap.svg"
        class="categoryIcon"
      />
    </h1>


    <ul>
      <li> Sensory </li>
      <li> Cognitive </li>
      <li> Physical </li>
    </ul>
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon
  }  
};
</script>