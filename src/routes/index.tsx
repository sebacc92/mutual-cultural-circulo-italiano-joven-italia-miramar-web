import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { _ } from "compiled-i18n";
import HeroSlider from "~/components/HeroSlider/HeroSlider";
import { Card } from "~/components/ui";
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
            <Card.Root class="transition duration-300 ease-in-out hover:shadow-lg border border-gray-200">
              <Card.Header>
                <Card.Title class="text-xl text-gray-800">{_`Idiomas`}</Card.Title>
                <Card.Description class="text-gray-600">{_`Aprende italiano e inglés con nuestros diferentes niveles y propuestas para todas las edades.`}</Card.Description>
              </Card.Header>
              <Card.Footer class="flex gap-3">
                <Link href="/idiomas/italiano" class="w-full">
                  {_`Italiano`}
                </Link>
                <Link href="/idiomas/ingles" class="w-full">
                  {_`Inglés`}
                </Link>
              </Card.Footer>
            </Card.Root>
            
            <Card.Root class="transition duration-300 ease-in-out hover:shadow-lg border border-gray-200">
              <Card.Header>
                <Card.Title class="text-xl text-gray-800">{_`Eventos Culturales`}</Card.Title>
                <Card.Description class="text-gray-600">{_`Exposiciones, muestras, charlas y eventos que promueven la cultura italiana.`}</Card.Description>
              </Card.Header>
              <Card.Footer>
                <Link href="/eventos" class="w-full">
                  {_`Ver agenda`}
                </Link>
              </Card.Footer>
            </Card.Root>
            
            <Card.Root class="transition duration-300 ease-in-out hover:shadow-lg border border-gray-200">
              <Card.Header>
                <Card.Title class="text-xl text-gray-800">{_`Trámites de Ciudadanía`}</Card.Title>
                <Card.Description class="text-gray-600">{_`Asesoramiento y apoyo en los trámites para obtener la ciudadanía italiana.`}</Card.Description>
              </Card.Header>
              <Card.Footer>
                  <Link href="/tramites" class="w-full">
                  {_`Consultar`}
                </Link>
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
                {_`Desde 1889, somos un pilar de la cultura italiana en Miramar. Nacimos para apoyar a los inmigrantes y hoy seguimos promoviendo el idioma, las tradiciones y el encuentro cultural. Con 135 años de historia, evolucionamos manteniendo nuestro corazón italiano.`}
              </p>
              <Link href="/historia">
                {_`Conoce más`}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section class="py-16 md:py-20 bg-gradient-to-r from-green-600/80 via-white to-red-600/80">
        <div class="container mx-auto px-4">
          <div class="mx-auto max-w-3xl rounded-lg bg-white p-10 shadow-lg">
            <div class="text-center">
              <h2 class="mb-4 text-3xl md:text-4xl font-bold text-gray-800">{_`¿Quieres formar parte?`}</h2>
              <p class="mb-8 text-lg text-gray-600">
                {_`Acércate a nuestra sede o contáctanos para conocer más sobre nuestras actividades, hacerte socio o presentar tu proyecto.`}
              </p>
              <div class="flex flex-wrap justify-center gap-4">
                <Link href="/contacto">
                  {_`Contáctanos`}
                </Link>
                <Link href="/socios">
                  {_`Hazte socio`}
                </Link>
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
      content: _`Descubre el Círculo Italiano Joven Italia en Miramar. Clases de italiano e inglés, eventos culturales, trámites de ciudadanía y más. 135 años promoviendo la cultura italiana.`,
    },
  ],
};
