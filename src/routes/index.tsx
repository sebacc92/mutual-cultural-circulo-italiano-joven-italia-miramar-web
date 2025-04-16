import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { _ } from "compiled-i18n";
import HeroSlider from "~/components/HeroSlider/HeroSlider";
import { Button, Card } from "~/components/ui";
import ImageStory from "~/media/story.jpg?h=500&jsx";

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
            <Card.Footer class="flex gap-2">
              <Button class="w-full" look="primary">
                {_`Italiano`}
              </Button>
              <Button class="w-full" look="primary">
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
              <Button class="w-full" look="primary">
                {_`Ver agenda`}
              </Button>
            </Card.Footer>
          </Card.Root>
          <Card.Root>
            <Card.Header>
              <Card.Title>{_`Trámites de Ciudadanía`}</Card.Title>
              <Card.Description>{_`Asesoramiento y apoyo en los trámites para obtener la ciudadanía italiana.`}</Card.Description>
            </Card.Header>
            <Card.Footer>
              <Button class="w-full" look="primary">
                {_`Consultar`}
              </Button>
            </Card.Footer>
          </Card.Root>
        </div>

        {/* History Section */}
        <section class="bg-muted py-16">
          <div class="container">
            <div class="grid gap-8 md:grid-cols-2 items-center">
              <div class="order-2 md:order-1 relative h-[300px]">
                <ImageStory
                  class="object-cover rounded-lg"
                />
              </div>
              <div class="order-1 md:order-2">
                <h2 class="mb-4 text-3xl font-bold">{_`Nuestra Historia`}</h2>
                <p class="mb-4 text-muted-foreground">
                  {_`El Círculo Italiano de Miramar tiene sus raíces en la comunidad italiana que llegó a la región a
                  finales del siglo XIX. Desde 1889, hemos sido un pilar de la cultura italiana en la ciudad,
                  promoviendo el idioma, las tradiciones y el intercambio cultural.`}
                </p>
                <p class="mb-6 text-muted-foreground">
                  {_`Durante 135 años, nuestra institución ha evolucionado pero manteniendo siempre el objetivo de ser un
                  espacio para la comunidad italiana y todos los amantes de su cultura.`}
                </p>
                <Button look="secondary">
                  <Link href="/historia">{_`Conoce más`}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section class="py-16 bg-gradient-to-r from-italian-green via-white to-italian-red">
          <div class="container">
            <div class="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-md">
              <div class="text-center">
                <h2 class="mb-4 text-3xl font-bold">{_`¿Quieres formar parte?`}</h2>
                <p class="mb-6 text-muted-foreground">
                  {_`Acércate a nuestra sede o contáctanos para conocer más sobre nuestras actividades, hacerte socio o
                  presentar tu proyecto.`}
                </p>
                <div class="flex flex-wrap justify-center gap-4">
                  <Button size="lg" look="primary">
                    <Link href="/contacto">{_`Contáctanos`}</Link>
                  </Button>
                  <Button size="lg" look="secondary">
                    <Link href="/socios">{_`Hazte socio`}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
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
