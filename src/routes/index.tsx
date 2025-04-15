import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { _ } from "compiled-i18n";
import HeroSlider from "~/components/HeroSlider/HeroSlider";

export default component$(() => {
  return (
    <>
      <HeroSlider />
      
      <div class="container mx-auto px-4 py-12">
        <h1 class="text-3xl md:text-4xl font-bold text-center mb-8">
          {_`Bienvenidos al Círculo Italiano`}
        </h1>
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-lg mb-6">
            {_`Acompañando a la ciudad de Miramar hace 135 años con cultura, tradición y comunidad.`}
          </p>
          <p class="text-lg mb-6">
            {_`Descubre todo lo que el Círculo Italiano de Miramar tiene para ofrecerte`}
          </p>
        </div>
      </div>

      
    </>
  );
});

export const head: DocumentHead = {
  title: _`Mutual Cultural Círculo Italiano Joven Italia`,
  meta: [
    {
      name: "description",
      content: _`Acompañando a la ciudad de Miramar hace 135 años 💚| Ciclo de charlas, Clases de Italiano 🤍| Muestras, Eventos ❤️| Trámites de Ciudadanía y +`,
    },
  ],
};
