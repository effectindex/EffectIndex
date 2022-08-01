<template>
  <div class="pageContent">
    <hr>
    <h4> Effects </h4>
    <label for="effectFilter"> Filter by Tag:
      <input
        v-model="filter"
        type="text"
        class="filterInput"
      > <a @click="clearFilter"> (clear) </a> </label>
    <table class="effectTable">
      <thead>
        <tr>
          <td> Title </td>
          <td> Tags </td>
        </tr>
      </thead>
      <effect-table-row
        v-for="effect in filteredEffects"
        :key="effect._id"
        :effect="effect"
        :can-delete="canDelete"
        @deleteEffect="deleteEffect"
      />
    </table>
  </div>
</template>

<script>
import EffectTableRow from "@/components/effects/EffectTableRow.vue";

export default {
  components: {
    EffectTableRow
  },
  middleware: ["auth"],
  scrollToTop: true,
  data() {
    return {
      filter: ""
    };
  },
  computed: {
    filteredEffects() {
      return this.filter
        ? this.$store.state.effects.list.filter(effect =>
            effect.tags.some(tag => tag.indexOf(this.filter) > -1)
          )
        : this.$store.state.effects.list;
    },
    canDelete() {
      return this.$auth.hasScope('admin-effects');
    }
  },
  mounted() {
    this.$store.dispatch("effects/get");
  },
  methods: {
    deleteEffect(id) {


 try {

        this.$toasted.show('Really delete?', {
          action: [{
              text: 'Yes, delete!',
              onClick: async (e, toastObject) => {
                try {
                  await this.$store.dispatch("effects/delete", id);
                  toastObject.goAway(0);
                  this.$toasted.show(
                    'The effect has been successfully deleted.',
                    {
                      duration: 2000,
                      type: 'success'
                    }
                  );
                  this.$store.dispatch("effects/get");
                } catch (error) {
                  if (error.response) {
                    this.$toasted.show(error.response.data.message,
                    {
                      duration: 2000,
                      type: 'error'
                    });
                  } else {
                    console.log(error);
                  }
                }
              }
            },
            {
              text: 'No, keep!',
              onClick: (e, toastObject) => toastObject.goAway()
            }]
        });
      } catch (error) {
        console.log(error);
      }


//  try {

//         this.$toasted.show('Really delete?', {
//           action: [{
//               text: 'Yes, delete!',
//               onClick: async (e, toastObject) => {
//                 try {
//                   await this.$axios.delete(`/api/articles/${id}`);
//                   toastObject.goAway(0);
//                   this.$toasted.show(
//                     'The report has been successfully deleted.',
//                     {
//                       duration: 2000,
//                       type: 'success'
//                     }
//                   );
//                   this.$fetch();
//                 } catch (error) {
//                   if (error.response) {
//                     this.$toasted.show(error.response.data.message,
//                     {
//                       duration: 2000,
//                       type: 'error'
//                     });
//                   } else {
//                     console.log(error);
//                   }
//                 }
//               }
//             },
//             {
//               text: 'No, keep!',
//               onClick: (e, toastObject) => toastObject.goAway()
//             }]
//         });
//       } catch (error) {
//         console.log(error);
//       }

    },
    clearFilter() {
      this.filter = "";
    }
  }
};
</script>

<style scoped>
thead {
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

table {
  margin-top: 1em;
}

.filterInput {
  height: 30px;
  padding: 0.25em;
  margin-left: 1em;
  font-size: 16px;
  border: 1px solid #ccc;
}
</style>
