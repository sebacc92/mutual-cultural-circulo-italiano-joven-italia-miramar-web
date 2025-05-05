import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import {guessLocale} from 'compiled-i18n'
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
  // La lógica del locale se mueve a onRequest
};

// Mover la lógica de detección de locale a onRequest
export const onRequest: RequestHandler = async ({ query, headers, locale }) => {
	// Allow overriding locale with query param `locale`
	const maybeLocale = query.get('locale') || headers.get('accept-language')
  console.log('onRequest maybeLocale:', maybeLocale) // Añadir log para depuración
	locale(guessLocale(maybeLocale))
};

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
