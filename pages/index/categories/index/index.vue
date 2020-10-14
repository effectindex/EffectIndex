<template>
  <div class="pageContent">
    <h1> 
      Effect Categories
      <Icon
        filename="sitemap.svg"
        class="categoryIcon"
      />
    </h1>

    <div>
      <h2> Auditory Effects </h2>
      <p> Effects which diminish or modify a person's sense of hearing. </p>
    </div>

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