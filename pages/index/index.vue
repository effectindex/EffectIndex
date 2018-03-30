<template>
    <div class="pageContent">
      <effects-sidebar />
      <div style="flex: 3;">
        <nuxt-child />
      </div>
    </div>
</template>

<script>
import EffectsSidebar from '@/components/EffectsSidebar';
import EffectList from '@/components/EffectList/EffectList';

export default {
  components: {
    EffectsSidebar,
    EffectList
  }
}
</script>

<style>
  .pageContent {
    display: flex;
    flex-direction: row;
    padding: 0.5em;
  }

  @media (max-width: 640px) {
    .pageContent {
      flex-direction: column;
    }
  }

  .pageContent__categoryIcon {
    float: right;
    font-size: 50px;
    opacity: 0.6;
    margin: 3px 0px 5px 5px;
  }

  .pageContent p {
    font-family: Titillium Web;
    color: rgba(26, 26, 26, 0.7);
    font-size: 18px;
    font-weight: 400;
    line-height: 28.8px;
    margin: 1em 0;
  }

  .pageContent__paragraph--bold {
    font-weight: bold;
  }

  .pageContent__paragraph a {
    color: rgb(61, 153, 145);
    text-decoration: none;
  }

</style>
