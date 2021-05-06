// Fetches and stores redirects, redirects if redirect matches current route.
export default async function({ route, redirect, store }) {
  try {
    const { list } = store.state.redirects.list ? store.state.redirects : await store.dispatch('redirects/get');
    if (Array.isArray(list)) {
      const foundRedirect = list.find( r => r.from === route.fullPath.slice(1));
      if (foundRedirect && (route.fullPath !== ('/' + foundRedirect.to))) {
        redirect('/' + foundRedirect.to);
      }
    }
  } catch (error) {
    console.log('Redirect middleware error:');
    console.log(error);
  }
};