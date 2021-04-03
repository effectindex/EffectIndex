// Fetches and stores redirects, redirects if redirect matches current route.
export default async function({ route, redirect, store }) {
  try {
    const { redirects } = store.state.redirects ? store.state : await store.dispatch('getRedirects');
    if (Array.isArray(redirects)) {
      const foundRedirect = redirects.find( r => r.from === route.fullPath.slice(1));
      if (foundRedirect && (route.fullPath !== ('/' + foundRedirect.to))) {
        redirect('/' + foundRedirect.to);
      }
    }
  } catch (error) {
    console.log('Redirect middleware error:');
    console.log(error);
  }
};