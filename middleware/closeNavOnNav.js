// Closes navigation pullout on route change.
export default async function({ store }) {
  store.dispatch('closePullout');
};