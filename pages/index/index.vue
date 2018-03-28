<template>
    <div class="pageContent">
      <div style="flex: 1;">
        <effects-sidebar />
      </div>
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
    flex-flow: row;
  }

  .pageContent__categoryIcon {
    float: right;
    padding-left: 20px;
    font-size: 50px;
    opacity: 0.6;
  }

  .pageContent p {
    font-family: Titillium Web;
    color: rgba(26, 26, 26, 0.7);
    font-size: 18px;
    font-weight: 400;
    line-height: 28.8px;
    margin: 1em;
  }

  .pageContent__paragraph--bold {
    font-weight: bold;
  }

  .pageContent__paragraph a {
    color: rgb(61, 153, 145);
    text-decoration: none;
  }

</style>
