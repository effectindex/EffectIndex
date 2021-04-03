export default async function({ route, $axios, redirect }) {
  try {
    const { redirects } = await $axios.$get(`/api/redirects`);
    const { fullPath } = route;
    const foundRedirect = redirects.find( r => r.from === fullPath.slice(1));
    if (foundRedirect) {
      redirect('/' + foundRedirect.to);
    }
  } catch (error) {
    console.log(error);
  }
};