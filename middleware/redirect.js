// Fetches and stores redirects, redirects if redirect matches current route.
export default async function ({route, redirect, store}) {
  try {
    if (!store.state.redirects.fetched) await store.dispatch('redirects/get');
    const foundRedirect = store.state.redirects.list.find(r => r.from === route.fullPath.slice(1) || r.from + "/" === route.fullPath.slice(1));
    if (foundRedirect && (route.fullPath !== ('/' + foundRedirect.to))) {
      redirect('/' + foundRedirect.to);
    }
  } catch (error) {
    console.log('Redirect middleware error:');
    console.log(error);
  }
};
