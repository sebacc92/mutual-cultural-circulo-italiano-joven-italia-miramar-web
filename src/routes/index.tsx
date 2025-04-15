import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LuCheck } from "@qwikest/icons/lucide";
import { _ } from "compiled-i18n";
import HeroSlider from "~/components/HeroSlider/HeroSlider";
import { Button, Card } from "~/components/ui";

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
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card.Root>
            <Card.Header>
              <Card.Title>{_`Idiomas`}</Card.Title>
              <Card.Description>{_`Aprende italiano e inglés con nuestros diferentes niveles y propuestas para todas las edades.`}</Card.Description>
            </Card.Header>
            <Card.Footer>
              <Button class="w-full">
                {_`Italiano`}
              </Button>
              <Button class="w-full">
                {_`Inglés`}
              </Button>
            </Card.Footer>
          </Card.Root>
          <Card.Root>
            <Card.Header>
              <Card.Title>{_`Eventos Culturales`}</Card.Title>
              <Card.Description>{_`Exposiciones, muestras, charlas y eventos que promueven la cultura italiana.`}</Card.Description>
            </Card.Header>
            <Card.Footer>
              <Button class="w-full">
                <LuCheck class="mr-2 h-4 w-4" /> {_`Ver agenda`}
              </Button>
            </Card.Footer>
          </Card.Root>
          <Card.Root>
            <Card.Header>
              <Card.Title>{_`Trámites de Ciudadanía`}</Card.Title>
              <Card.Description>{_`Asesoramiento y apoyo en los trámites para obtener la ciudadanía italiana.`}</Card.Description>
            </Card.Header>
            <Card.Footer>
              <Button class="w-full">
                <LuCheck class="mr-2 h-4 w-4" /> {_`Consultar`}
              </Button>
            </Card.Footer>
          </Card.Root>
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
