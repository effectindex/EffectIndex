<template>
  <div class="pageContent">

    <h1> Contact Us
      <fa
        :icon="['far', 'envelope']"
        class="fa categoryIcon" />
    </h1>

    <p>
      To collectively contact the staff members of this site, please email us at <a href="mailto:effectindex@gmail.com"> effectindex@gmail.com</a>. </p>
    <p>However, if you would like to specifically contact the <nuxt-link to="/profiles/Josie">site founder</nuxt-link>, please see her various online handles below:</p>
    <p>
      <ul>
        <li><b>Email</b> - <a href="mailto:disregardeverythingisay@gmail.com"> disregardeverythingisay@gmail.com</a></li>
        <li><b>Discord</b> - josikinz#1066</li>
        <li><b>reddit</b> - <ext-link href="https://reddit.com/u/josikins">/u/josikins</ext-link></li>
        <li><b>Telegram</b> - @josikinz</li>
        
      </ul>
    </p>
  </div>
</template>

<script>
import ExtLink from "@/components/ExtLink";

export default {
  components: {
    ExtLink
  },
  head() {
    return {
      title: "Contact"
    };
  }
};
</script>
