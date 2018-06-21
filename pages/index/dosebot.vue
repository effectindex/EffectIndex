<template>
    <div class="pageContent">
      
        <h1> DoseBot <i class="fa fa-heart-o categoryIcon"> </i> </h1>

        <img class="float" height="296px" src="dosebot.png">

        <p> <ext-link href="https://www.dosebot.org">DoseBot</ext-link> is a Discord bot which automatically sources dosage, duration, tolerance, and harm reduction information from <ext-link href="https://psychonautwiki.org">PsychonautWiki</ext-link>. It also sources Subjective Effect information and replications from <ext-link href="https://www.effectindex.com">Effect Index</ext-link>.
        </p>

        <p> DoseBot was created by <ext-link href="https://github.com/GabrielMorris">Cocoa</ext-link>, maethor, voreskin, and josikinz in order to provide Discord communities with easily accessible Subjective Effect information, raising awareness of harm reduction best practices, and familiarizing people with the Effect Index project. DoseBot is completely open source and released under the <ext-link href="http://unlicense.org">Unlicense</ext-link>.
        </p>

        <p>
          To invite DoseBot to your server click <ext-link href="https://discordapp.com/oauth2/authorize?client_id=428071171787980800&scope=bot&permissions=523328">here</ext-link>. The source code is freely available on <ext-link href="https://github.com/GabrielMorris/DoseBot">Github</ext-link>.
        </p>
    </div>
</template>

<script>
import ExtLink from '@/components/ExtLink';

export default {
    components: {
        ExtLink
    },
    head () {
      return {
        title: "DoseBot – Effect Index",
      }
    }
}
</script>

<style scoped>
  .float {
    float: right;
  }

  @media (max-width: 500px) {
    .float {
        float: none;
        margin: 1em auto;
    }
}
</style>
