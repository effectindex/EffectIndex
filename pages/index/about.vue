<template>
  <div class="pageContent">
    <h1>
      About
      <Icon
        filename="heart.svg"
        class="categoryIcon"
      />
    </h1>

    <p>
      Effect Index serves as the platform for the Subjective Effect Index (SEI), 
      a resource containing formalised documentation of the vast number of distinct 
      subjective states which may occur under the influence of hallucinogens. We strive 
      to comprehensively document and describe the wide variety of potential hallucinogenic
      experiences. The SEI is presented in an easily readable format that contains not only
      descriptions, but also informed analysis and image, video, and audio replications
      of these effects.
    </p>

    <p>
      We believe that in pioneering formalised subjective effect documentation we may demystify
      the psychedelic experience, which has the potential to allow hallucinogen usage to become
      more culturally acceptable, better understood, and create a platform on top of which these
      substances may be more easily studied.
    </p>

    <p>
      Effect Index was initially founded as a side project on 30 June, 2017 by Josie Kins, the
      founder of <ext-link href="http://www.psychonautwiki.org">
        PsychonautWiki
      </ext-link> and
      <ext-link href="http://disregardeverythingisay.com/">
        DisregardEverythingISay
      </ext-link>.
      It serves as a platform for content
      that has been in constant development for the previous six years on these sites. However,
      the aforementioned content is now hosted on its own dedicated platform in the hope of further
      spreading the documentation and creating a universal terminology set which gives people the
      vernacular to fully describe experiences that were previously considered ineffable.
    </p>

    <p>
      If you find this project interesting, we encourage you to join our active community
      within both our <ext-link href="http://reddit.com/r/replications">
        subreddit
      </ext-link>,
      and if you'd like to contribute,
      <ext-link href="https://www.reddit.com/message/compose/?to=josikins">
        send Josikinz a message
      </ext-link>
      for an invite to our private Discord.
    </p>
  </div>
</template>

<script>
import Icon from '@/components/Icon';
import ExtLink from "@/components/ExtLink";

export default {
  components: {
    ExtLink,
    Icon
  },
  head() {
    return {
      title: "About"
    };
  }
};
</script>
