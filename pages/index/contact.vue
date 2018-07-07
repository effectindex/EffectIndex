<template>
    <div class="pageContent">
      
        <h1> Contact <i class="fa fa-envelope-o categoryIcon"> </i> </h1>

        <p>Effect Index project member contact information:
          <ul>
            <li> <b> Josie </b> - Project Manager </li>
            <ul>
              <li> <b> Email </b>- disregardeverythingisay@gmail.com </li>
              <li> <b> Discord </b>- josikinz#1823 </li>
              <li> <b> Telegram </b>- @josikinz </li>
              <li> <b> reddit </b>- josikins </li>
            </ul>
            <li> <b> Gabriel </b>- Sysop</li>
            <ul>
              <li> <b> Discord </b>- Cocoa#1234 </li>
              <li> <b> reddit </b>- Cocoa-Bunny </li>
            </ul>
            <li> <b> Kaylee </b>- Subjective Effect Documentation</li>
            <ul>
              <li> <b> Discord </b>- Kaytwo#7029 </li>
            </ul>
          </ul>
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
        title: "Contact – Effect Index",
      }
    }
}
</script>
