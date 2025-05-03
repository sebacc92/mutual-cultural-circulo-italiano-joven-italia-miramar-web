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

      {/* Services Section */}
      <section class="py-16 md:py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              {_`Nuestros servicios`}
            </h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              {_`Descubre todo lo que el Círculo Italiano de Miramar tiene para ofrecerte`}
            </p>
          </div>
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {/* Tarjeta Idiomas */}
            <Card.Root class="transition duration-300 ease-in-out hover:shadow-xl border border-green-600 rounded-xl bg-white/90 shadow-md hover:-translate-y-1 relative overflow-hidden">
              <div class="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-green-600 via-white to-red-600 rounded-t-xl" />
              <Card.Header>
                <Card.Title class="text-xl text-gray-800 font-serif tracking-wide">{_`Idiomas`}</Card.Title>
                <Card.Description class="text-gray-600">{_`Aprende italiano e inglés con nuestros diferentes niveles y propuestas para todas las edades.`}</Card.Description>
              </Card.Header>
              <Card.Footer class="flex gap-3">
                <Button class="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-all border-2 border-green-700">
                  <Link href="/clases/italiano" class="w-full">
                    {_`Italiano`}
                  </Link>
                </Button>
                <Button class="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition-all border-2 border-red-700">
                  <Link href="/clases/ingles" class="w-full">
                    {_`Inglés`}
                  </Link>
                </Button>
              </Card.Footer>
            </Card.Root>
            {/* Tarjeta Eventos */}
            <Card.Root class="transition duration-300 ease-in-out hover:shadow-xl border border-green-600 rounded-xl bg-white/90 shadow-md hover:-translate-y-1 relative overflow-hidden">
              <div class="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-green-600 via-white to-red-600 rounded-t-xl" />
              <Card.Header>
                <Card.Title class="text-xl text-gray-800 font-serif tracking-wide">{_`Eventos Culturales`}</Card.Title>
                <Card.Description class="text-gray-600">{_`Exposiciones, muestras, charlas y eventos que promueven la cultura italiana.`}</Card.Description>
              </Card.Header>
              <Card.Footer>
                <Button class="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-all border-2 border-green-700">
                  <Link href="/eventos" class="w-full">
                    {_`Ver agenda`}
                  </Link>
                </Button>
              </Card.Footer>
            </Card.Root>
            {/* Tarjeta Trámites */}
            <Card.Root class="transition duration-300 ease-in-out hover:shadow-xl border border-green-600 rounded-xl bg-white/90 shadow-md hover:-translate-y-1 relative overflow-hidden">
              <div class="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-green-600 via-white to-red-600 rounded-t-xl" />
              <Card.Header>
                <Card.Title class="text-xl text-gray-800 font-serif tracking-wide">{_`Trámites de Ciudadanía`}</Card.Title>
                <Card.Description class="text-gray-600">{_`Asesoramiento y apoyo en los trámites para obtener la ciudadanía italiana.`}</Card.Description>
              </Card.Header>
              <Card.Footer>
                <Button class="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition-all border-2 border-red-700">
                  <Link href="/tramites" class="w-full">
                    {_`Asesoría`}
                  </Link>
                </Button>
              </Card.Footer>
            </Card.Root>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section class="py-16 md:py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="grid gap-12 md:grid-cols-2 items-center max-w-5xl mx-auto">
            <div class="order-2 md:order-1 relative h-[350px] rounded-lg overflow-hidden shadow-md">
              <ImageStory
                class="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div class="order-1 md:order-2">
              <h2 class="mb-4 text-3xl font-bold text-gray-800">{_`Nuestra Historia`}</h2>
              <p class="mb-6 text-gray-700 text-lg leading-relaxed">
                {_`Desde 1889, somos un pilar de la cultura italiana en Miramar. Nacimos para apoyar a los inmigrantes y hoy seguimos promoviendo el idioma, las tradiciones y el encuentro cultural. Con 136 años de historia, evolucionamos manteniendo nuestro corazón italiano.`}
              </p>
              <Button>
                <Link href="/historia">
                  {_`Conoce más`}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section class="py-16 md:py-20 bg-gradient-to-r from-green-600/80 via-white to-red-600/80">
        <div class="container mx-auto px-4">
          <div class="mx-auto max-w-3xl rounded-lg bg-white p-10 shadow-lg border-2 border-green-600">
            <div class="text-center">
              <h2 class="mb-4 text-3xl md:text-4xl font-bold text-gray-800 font-serif tracking-wide">{_`¿Quieres formar parte?`}</h2>
              <p class="mb-8 text-lg text-gray-600">
                {_`Acércate a nuestra sede o contáctanos para conocer más sobre nuestras actividades, hacerte socio o presentar tu proyecto.`}
              </p>
              <div class="flex flex-wrap justify-center gap-4">
                <div>
                  <Link href="/contacto" class="w-full">
                    <Button class="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-all border-2 border-green-700">
                      {_`Hazte socio`}
                    </Button>
                  </Link>
                </div>
                <div>
                  <Link href="/proyectos" class="w-full">
                    <Button class="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition-all border-2 border-red-700">
                      {_`Presenta tu proyecto`}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: _`Mutual Cultural Círculo Italiano Joven Italia - Miramar`,
  meta: [
    {
      name: "description",
      content: _`Descubre el Círculo Italiano Joven Italia en Miramar. Clases de italiano e inglés, eventos culturales, trámites de ciudadanía y más. 136 años promoviendo la cultura italiana.`,
    },
  ],
};
