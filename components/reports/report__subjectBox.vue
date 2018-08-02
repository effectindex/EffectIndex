<template>
  <section class="report__infoBox">
    <h2 class="report__infoBoxHeader"> <i class="fa fa-user-o icon" /> Subject </h2>

    <div class="report__infoBoxList">
      <subject-box-list-item
        :value="subject.name"
        label="Name: " />
      <subject-box-list-item
        :value="subject.trip_date"
        label="Trip Date: " />
      <subject-box-list-item
        :value="subject.age"
        label="Age: " />
      <subject-box-list-item
        :value="subject.location"
        label="Location: " />
      <subject-box-list-item
        :value="subject.gender"
        label="Gender: " />
    </div>
  </section>
</template>

<script>
import SubjectBoxListItem from '@/components/reports/report__subjectBoxListItem';

export default {
  components: {
    SubjectBoxListItem
  },
  props: {
    subject: {
      type: Object,
      default: () => {}
    }
  },
};
</script>
