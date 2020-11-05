<template>
  <div class="pageContent effectCategories">
    <h1> 
      Effect Categories
      <Icon
        filename="sitemap.svg"
        class="categoryIcon"
      />
    </h1>
    <p>
      This page serves as an index of the various categories of effect found within our <nuxt-link to="/effects"> 
        Subjective Effect Index. 
      </nuxt-link>
    </p>
    <hr>
    <IndexCategory
      name="Visual Effects"
      description="Visual effects are defined as any subjective effect that directly alters a person's sense of sight. "
      page="visual-effects"
      icon="eye.svg"
    />

    <IndexCategory
      name="Visual Enhancements"
      description="Visual enhancements are defined as any subjective effect that improves one's ability to perceive the external environment through their sense of sight. "
      page="visual-enhancements"
      icon="arrow-up.svg"
    />

    <IndexCategory
      name="Visual Suppressions"
      description="Visual suppressions are defined as any subjective effect that decreases a person's ability to perceive the external environment through their sense of sight. "
      page="visual-suppressions"
      icon="arrow-down.svg"
    />

    <IndexCategory
      name="Visual Distortions"
      description="Visual distortions are defined as any subjective effect that alters the perception or appearance of pre-existing visual data without adding any entirely new content. "
      page="visual-distortions"
      icon="distortions.svg"
    />

    <IndexCategory
      name="Hallucinatory Effects"
      description="Hallucinatory states are defined as any subjective effect that changes the perception or appearance of pre-existing visual data by adding entirely new content in a manner similar to dreams. "
      page="hallucinatory-states"
      icon="dragon.svg"
    />

    <IndexCategory
      name="Auditory Effects"
      description="Effects which diminish or modify a person's sense of hearing."
      page="auditory-effects"
      icon="volume-up.svg"
    />

    <IndexCategory
      name="Smell &amp; Taste Effects"
      description="Smell and taste effects are defined as any subjective effect that directly alters either a person's sense of smell or taste."
      page="smell-and-taste-effects"
      icon="utensils.svg"
    />

    <IndexCategory
      name="Tactile Effects"
      description="Tactile effects are defined as any subjective effect that directly alters a person's sense of touch. "
      page="tactile-effects"
      icon="hand-paper.svg"
    />

    <IndexCategory
      name="Disconnective Effects"
      description="Disconnective effects are defined as any subjective effect that feels as if it disconnects one from the external environment, their senses, and/or their consciousness. "
      page="disconnective-effects"
      icon="disconnective.svg"
    />

    <IndexCategory
      name="Multisensory Effects"
      description="Multisensory effects are defined as any subjective effect that directly alters two or more senses at a time. "
      page="multisensory-effects"
      icon="cogs.svg"
    />

    <IndexCategory
      name="Cognitive Effects"
      description="Cognitive effects are subjective effects that directly alter or introduce new content to an element of a person's cognition. "
      page="cognitive-effects"
      icon="user.svg"
    />

    <IndexCategory
      name="Cognitive Enhancements"
      description="Cognitive enhancements are defined as any subjective effect that increases or raises the intensity of a facet of a person's cognition. "
      page="cognitive-enhancements"
      icon="arrow-up.svg"
    />

    <IndexCategory
      name="Cognitive Suppressions"
      description="Cognitive suppressions are defined as any subjective effect that decreases the intensity of a facet of a person's cognition. "
      page="cognitive-suppressions"
      icon="arrow-down.svg"
    />

    <IndexCategory
      name="Novel Cognitive States"
      description="Novel cognitive states are defined as any cognitive effect that does not merely amplify or suppress familiar states of mind; rather, it induces an experience that is qualitatively different from that of ordinary consciousness. "
      page="novel-cognitive-states"
      icon="lightbulb.svg"
    />

    <IndexCategory
      name="Psychological States"
      description="Psychological states are defined as any cognitive effect that is either established within the psychological literature or arises as a result of the complex interplay between more simplistic components such as cognitive enhancements and suppressions."
      page="psychological-states"
      icon="psychological.svg"
    />

    <IndexCategory
      name="Transpersonal States"
      description="Transpersonal states are defined as any subjective effect that feels as if it alters a person's cognition in a manner that relates to their place in the universe, the inner workings of reality or consciousness, and/or the context of their existence. The highest manifestations of these effects fall under what are commonly known as 'peak', 'transcendent' or 'transformative' experiences. "
      page="transpersonal-states"
      icon="infinity.svg"
    />

    <IndexCategory
      name="Physical Effects"
      description="Physical effects are subjective effects that directly alter a person's perception of their physical body or its physiological functions. "
      page="physical-effects"
      icon="heart-rate.svg"
    />

    <IndexCategory
      name="Physical Enhancements"
      description="Physical enhancements are defined as any subjective effect that increases or intensifies a facet of a person's physical body. "
      page="physical-enhancements"
      icon="arrow-up.svg"
    />

    <IndexCategory
      name="Physical Suppressions"
      description="Physical suppressions are defined as any subjective effect that decreases or reduces a facet of a person's physical body. "
      page="physical-suppressions"
      icon="arrow-down.svg"
    />

    <IndexCategory
      name="Physical Alterations"
      description="Physical alterations are defined as any subjective effect that changes a facet of a person's physical body in a manner which does not involve a clearly definable enhancement or suppression."
      page="physical-alterations"
      icon="cogs.svg"
    />

    <IndexCategory
      name="Uncomfortable Physical Effects"
      description="Uncomfortable physical effects are defined as any substance-induced alteration of a person's physical state that is unpleasant, undesirable, painful, or otherwise a source of distress."
      page="uncomfortable-physical-effects"
      icon="frown.svg"
    />

    <IndexCategory
      name="Cardiovascular Effects"
      description="Cardiovascular effects are defined as any uncomfortable physical effect that relates to the heart and blood vessels. "
      page="cardiovascular-effects"
      icon="heart.svg"
    />

    <IndexCategory
      name="Cerebrovascular Effects"
      description="Cerebrovascular effects are defined as any uncomfortable physical effect that relates to the brain and its blood vessels. "
      page="cerebrovascular-effects"
      icon="brain.svg"
    />

    <IndexCategory
      name="Uncomfortable Bodily Effects"
      description="Uncomfortable bodily effects are defined as any uncomfortable physical effect that relates to the overall body and cannot be categorized as cardiovascular or cerebrovascular."
      page="uncomfortable-bodily-effects"
      icon="child.svg"
    />
  </div>
</template>

<script>
import Icon from '@/components/Icon';
import IndexCategory from '@/components/categories/IndexCategory';

export default {
  components: {
    Icon,
    IndexCategory
  }  
};
</script>

<style>
  .effectCategories > .indexCategory:not(:last-child) {
    border-bottom: 1px solid #EAEAEA;
  }

  .effectCategories > .indexCategory:nth-child(odd) {
    background-color: #F3F3F3;
  }

  .effectCategories h1 {
    margin-bottom: 35px;
  }
</style>