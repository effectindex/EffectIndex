<template>
  <div class="pageContent">
    <h1>
      Contact Us
      <Icon
        filename="envelope.svg"
        class="categoryIcon"
      />
    </h1>

    <p>
      To collectively contact the staff members of this site, please email us at <a href="mailto:effectindex@gmail.com"> effectindex@gmail.com </a>. However, if you would like to contact the site founder directly, please refer to the contact information below:
    </p>

    <p>
      <ul>
        <ul>
          <li><b>Discord</b> - josikinz#1066</li>
          <li><b>Reddit</b> - /u/josikins</li>
          <li><b>Email</b> - <a href="mailto:disregardeverythingisay@gmail.com"> disregardeverythingisay@gmail.com </a></li>
        </ul>
      </ul>
    </p>
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon
  },
  head() {
    return {
      title: "Contact"
    };
  }
};
</script>
