import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { _ } from "compiled-i18n";

export default component$(() => {
    return (
        <div class="flex min-h-screen flex-col">
            <main class="flex-1">
                {/* Hero Section */}
                <section class="bg-gradient-to-r from-green-600 via-white to-red-600 py-16">
                    <div class="container mx-auto px-4">
                        <div class="text-center">
                            <h1 class="mb-4 text-4xl font-bold">{_`Nuestra Historia`}</h1>
                            <p class="mx-auto mb-6 max-w-2xl text-lg">{_`135 años acompañando a la ciudad de Miramar 🇦🇷🇮🇹`}</p>
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4">
                        <div class="grid gap-12 md:grid-cols-2 items-center max-w-5xl mx-auto">
                            <div>
                                <h2 class="mb-6 text-3xl font-bold">{_`Nuestros orígenes`}</h2>
                                <div class="space-y-4">
                                    <p class="text-gray-600">
                                        {_`El Círculo Italiano de Miramar tiene sus raíces en la comunidad italiana que llegó a la región a finales del siglo XIX. Desde 1889, hemos sido un pilar de la cultura italiana en la ciudad, promoviendo el idioma, las tradiciones y el intercambio cultural.`}
                                    </p>
                                    <p class="text-gray-600">
                                        {_`La Mutual Cultural Círculo Italiano Joven Italia de Miramar fue fundada por inmigrantes italianos que buscaban mantener vivas sus tradiciones y crear un espacio de encuentro para la comunidad italiana en la ciudad.`}
                                    </p>
                                    <p class="text-gray-600">
                                        {_`A lo largo de estos 135 años, nuestra institución ha evolucionado pero manteniendo siempre el objetivo de ser un espacio para la comunidad italiana y todos los amantes de su cultura.`}
                                    </p>
                                </div>
                            </div>
                            <div class="relative h-[400px] flex justify-center">
                                <img
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NiEgbBGLEnpWXV5RvzgV6n1MOyUvJo.png"
                                    alt={_`135 años Círculo Italiano`}
                                    class="object-contain h-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section class="py-16 bg-gray-100">
                    <div class="container mx-auto px-4">
                        <h2 class="mb-12 text-center text-3xl font-bold">{_`Línea de tiempo`}</h2>

                        <div class="mx-auto max-w-3xl">
                            <div class="relative border-l border-green-600 pl-8 pb-8">
                                <div class="absolute -left-3 top-0 h-6 w-6 rounded-full bg-green-600"></div>
                                <div class="mb-8">
                                    <h3 class="mb-2 text-xl font-bold">1889</h3>
                                    <p class="text-gray-600">
                                        {_`Fundación de la Mutual Cultural Círculo Italiano Joven Italia en Miramar por un grupo de inmigrantes italianos.`}
                                    </p>
                                </div>
                            </div>

                            <div class="relative border-l border-green-600 pl-8 pb-8">
                                <div class="absolute -left-3 top-0 h-6 w-6 rounded-full bg-green-600"></div>
                                <div class="mb-8">
                                    <h3 class="mb-2 text-xl font-bold">1920s</h3>
                                    <p class="text-gray-600">
                                        {_`Expansión de las actividades culturales y sociales, incluyendo las primeras clases de italiano y eventos culturales.`}
                                    </p>
                                </div>
                            </div>

                            <div class="relative border-l border-green-600 pl-8 pb-8">
                                <div class="absolute -left-3 top-0 h-6 w-6 rounded-full bg-green-600"></div>
                                <div class="mb-8">
                                    <h3 class="mb-2 text-xl font-bold">1950s</h3>
                                    <p class="text-gray-600">
                                        {_`Construcción de la sede actual en Calle 24 nº 1214, que se ha convertido en un punto de referencia en la ciudad.`}
                                    </p>
                                </div>
                            </div>

                            <div class="relative border-l border-green-600 pl-8 pb-8">
                                <div class="absolute -left-3 top-0 h-6 w-6 rounded-full bg-green-600"></div>
                                <div class="mb-8">
                                    <h3 class="mb-2 text-xl font-bold">1980s</h3>
                                    <p class="text-gray-600">
                                        {_`Renovación de las instalaciones y ampliación de los servicios ofrecidos, incluyendo asesoramiento para trámites de ciudadanía.`}
                                    </p>
                                </div>
                            </div>

                            <div class="relative border-l border-green-600 pl-8 pb-8">
                                <div class="absolute -left-3 top-0 h-6 w-6 rounded-full bg-green-600"></div>
                                <div class="mb-8">
                                    <h3 class="mb-2 text-xl font-bold">2000s</h3>
                                    <p class="text-gray-600">
                                        {_`Modernización de los programas educativos y culturales, adaptándose a las nuevas generaciones.`}
                                    </p>
                                </div>
                            </div>

                            <div class="relative pl-8">
                                <div class="absolute -left-3 top-0 h-6 w-6 rounded-full bg-green-600"></div>
                                <div>
                                    <h3 class="mb-2 text-xl font-bold">2024</h3>
                                    <p class="text-gray-600">
                                        {_`Celebración de los 135 años de historia, reafirmando nuestro compromiso con la promoción de la cultura italiana en Miramar.`}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4">
                        <div class="mb-12 text-center">
                            <h2 class="mb-2 text-3xl font-bold">{_`Nuestros Valores`}</h2>
                            <p class="mx-auto max-w-2xl text-gray-600">
                                {_`Principios que han guiado nuestra institución a lo largo de estos 135 años`}
                            </p>
                        </div>

                        <div class="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
                            <div class="rounded-lg border bg-white p-6 shadow">
                                <div class="mb-4 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                                    <span class="text-2xl text-green-600">🤝</span>
                                </div>
                                <h3 class="mb-2 text-xl font-bold">{_`Comunidad`}</h3>
                                <p class="text-gray-600">
                                    {_`Fomentamos el sentido de pertenencia y la unión entre los miembros de la comunidad italiana y local.`}
                                </p>
                            </div>

                            <div class="rounded-lg border bg-white p-6 shadow">
                                <div class="mb-4 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                                    <span class="text-2xl text-green-600">🏛️</span>
                                </div>
                                <h3 class="mb-2 text-xl font-bold">{_`Cultura`}</h3>
                                <p class="text-gray-600">
                                    {_`Preservamos y promovemos la rica cultura italiana a través de diversas actividades y eventos.`}
                                </p>
                            </div>

                            <div class="rounded-lg border bg-white p-6 shadow">
                                <div class="mb-4 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                                    <span class="text-2xl text-green-600">📚</span>
                                </div>
                                <h3 class="mb-2 text-xl font-bold">{_`Educación`}</h3>
                                <p class="text-gray-600">
                                    {_`Ofrecemos oportunidades de aprendizaje del idioma y la cultura italiana para todas las edades.`}
                                </p>
                            </div>

                            <div class="rounded-lg border bg-white p-6 shadow">
                                <div class="mb-4 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                                    <span class="text-2xl text-green-600">🌉</span>
                                </div>
                                <h3 class="mb-2 text-xl font-bold">{_`Integración`}</h3>
                                <p class="text-gray-600">
                                    {_`Construimos puentes entre la cultura italiana y argentina, enriqueciendo ambas comunidades.`}
                                </p>
                            </div>

                            <div class="rounded-lg border bg-white p-6 shadow">
                                <div class="mb-4 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                                    <span class="text-2xl text-green-600">🔄</span>
                                </div>
                                <h3 class="mb-2 text-xl font-bold">{_`Tradición e Innovación`}</h3>
                                <p class="text-gray-600">
                                    {_`Respetamos nuestras raíces mientras nos adaptamos a los nuevos tiempos y necesidades.`}
                                </p>
                            </div>

                            <div class="rounded-lg border bg-white p-6 shadow">
                                <div class="mb-4 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                                    <span class="text-2xl text-green-600">🤲</span>
                                </div>
                                <h3 class="mb-2 text-xl font-bold">{_`Solidaridad`}</h3>
                                <p class="text-gray-600">
                                    {_`Apoyamos a nuestra comunidad a través de diversas iniciativas sociales y culturales.`}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section class="py-16 bg-gray-100">
                    <div class="container mx-auto px-4">
                        <div class="mb-12 text-center">
                            <h2 class="mb-2 text-3xl font-bold">{_`Galería Histórica`}</h2>
                            <p class="mx-auto max-w-2xl text-gray-600">{_`Un recorrido visual por nuestra historia`}</p>
                        </div>

                        <div class="grid gap-4 md:grid-cols-3 max-w-5xl mx-auto">
                            <div class="relative aspect-square overflow-hidden rounded-lg">
                                <img
                                    src="/images/historia-1.jpg"
                                    alt={_`Imagen histórica 1`}
                                    class="h-full w-full object-cover transition-transform hover:scale-105"
                                />
                            </div>
                            <div class="relative aspect-square overflow-hidden rounded-lg">
                                <img
                                    src="/images/historia-2.jpg"
                                    alt={_`Imagen histórica 2`}
                                    class="h-full w-full object-cover transition-transform hover:scale-105"
                                />
                            </div>
                            <div class="relative aspect-square overflow-hidden rounded-lg">
                                <img
                                    src="/images/historia-3.jpg"
                                    alt={_`Imagen histórica 3`}
                                    class="h-full w-full object-cover transition-transform hover:scale-105"
                                />
                            </div>
                            <div class="relative aspect-square overflow-hidden rounded-lg">
                                <img
                                    src="/images/historia-4.jpg"
                                    alt={_`Imagen histórica 4`}
                                    class="h-full w-full object-cover transition-transform hover:scale-105"
                                />
                            </div>
                            <div class="relative aspect-square overflow-hidden rounded-lg">
                                <img
                                    src="/images/historia-5.jpg"
                                    alt={_`Imagen histórica 5`}
                                    class="h-full w-full object-cover transition-transform hover:scale-105"
                                />
                            </div>
                            <div class="relative aspect-square overflow-hidden rounded-lg">
                                <img
                                    src="/images/historia-6.jpg"
                                    alt={_`Imagen histórica 6`}
                                    class="h-full w-full object-cover transition-transform hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
});

export const head: DocumentHead = {
    title: _`Nuestra Historia - Círculo Italiano Joven Italia`,
    meta: [
        {
            name: "description",
            content: _`Conoce los 135 años de historia del Círculo Italiano Joven Italia de Miramar. Desde 1889 preservando y promoviendo la cultura italiana en la comunidad.`,
        },
    ],
};
