import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { LuCalendar, LuClock, LuMapPin } from "@qwikest/icons/lucide";
import { Button } from "~/components/ui/button/button";
import { _ } from "compiled-i18n";

const eventos = [
    {
        id: "bienal-arte-2025",
        title: "Bienal de Arte 2025",
        date: "Sábado 5 de Abril - 19hs",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cP9qd0B8BbVFb6VnIrSYDYaeOtYGVw.png",
        description:
            "Muestra de arte pequeño formato. Destacándose la presentación de una obra de Raquel Forner, proveniente del Museo Pcial. de Bellas Artes, Emilio Pettoruti.",
        location: "Mutual Cultural Círculo Italiano, Calle 24 n1214",
    },
    {
        id: "cena-bienal-2025",
        title: "Cena Bienal 2025",
        date: "Jueves 10 de Abril - 21hs",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-d9PNSvU4MNqCngV983dWaJ93rqNoK3.png",
        description:
            "Menú: Bruschette, lasagne, fragole con panna montata, bebidas. Precios: Socios $20.000, No socios $25.000. Anticipadas hasta martes 8/04 $18.000 socios y $23.000 no socios.",
        location: "Mutual Cultural Círculo Italiano, Calle 24 n1214",
    },
    {
        id: "charla-museo-rodante",
        title: "Charla: Un Museo Rodante",
        date: "Jueves 11 de Abril - 17:30hs",
        image: "/images/placeholder-evento.jpg",
        description:
            "Importante charla a cargo de Federico Rovituso: 'Un Museo Rodante' con colecciones e historias del Museo Provincial de Bellas Artes Emilio Pettoruti.",
        location: "Mutual Cultural Círculo Italiano, Calle 24 n1214",
    },
    {
        id: "inicio-clases-italiano",
        title: "Inicio Clases de Italiano",
        date: "Lunes 17 de Marzo",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1RsMvba8MpkNeAZHIRkhdrxBiRwPSj.png",
        description:
            "Arranca el ciclo lectivo 2025 de clases de Italiano, con sus diferentes niveles y propuestas para todas las edades. Inscripciones abiertas hasta el 4 de abril.",
        location: "Mutual Cultural Círculo Italiano, Calle 24 n1214",
    },
];

// Utilidad para parsear fechas en formato "Día de la semana D de Mes - HShs" o "Lunes 17 de Marzo"
function parseEventoDate(dateStr: string): Date | null {
    // Intentar extraer día, mes y año
    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    const regex = /([0-9]{1,2}) de ([A-Za-záéíóúñ]+)(?: - (\d{1,2})h)?/i;
    const match = dateStr.match(regex);
    if (match) {
        const dia = parseInt(match[1], 10);
        const mes = meses.findIndex(m => m.toLowerCase() === match[2].toLowerCase());
        const anio = 2025; // Hardcodeado para este dataset
        if (mes >= 0) {
            return new Date(anio, mes, dia);
        }
    }
    // Si no matchea, intentar con otro formato (ej: "Lunes 17 de Marzo")
    const regex2 = /([0-9]{1,2}) de ([A-Za-záéíóúñ]+)/i;
    const match2 = dateStr.match(regex2);
    if (match2) {
        const dia = parseInt(match2[1], 10);
        const mes = meses.findIndex(m => m.toLowerCase() === match2[2].toLowerCase());
        const anio = 2025;
        if (mes >= 0) {
            return new Date(anio, mes, dia);
        }
    }
    return null;
}

const today = new Date(2025, 3, 27); // 27 de abril de 2025 (mes 3 = abril)

const eventosProximos = eventos.filter(e => {
    const fecha = parseEventoDate(e.date);
    return fecha && fecha >= today;
});
const eventosPasados = eventos.filter(e => {
    const fecha = parseEventoDate(e.date);
    return fecha && fecha < today;
});

export default component$(() => {
    return (
        <div class="flex min-h-screen flex-col">
            <main class="flex-1">
                {/* Hero Section */}
                <section class="bg-red-600 py-16 text-white">
                    <div class="container mx-auto px-4">
                        <div class="text-center">
                            <h1 class="mb-4 text-4xl font-bold">{_`Eventos y Muestras`}</h1>
                            <p class="mx-auto mb-6 max-w-2xl text-lg">
                                {_`Descubre todas las actividades culturales, sociales y educativas que organizamos en el Círculo Italiano de Miramar`}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Próximos Eventos */}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4">
                        <h2 class="text-2xl font-bold mb-8 text-green-700">{_`Próximos eventos`}</h2>
                        <div class="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
                            {eventosProximos.length === 0 && (
                                <p class="col-span-2 text-gray-500">{_`No hay eventos próximos.`}</p>
                            )}
                            {eventosProximos.map((evento) => (
                                <div key={evento.id} class="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    <div class="relative h-64">
                                        <img src={evento.image} alt={evento.title} class="w-full h-full object-cover" />
                                    </div>
                                    <div class="p-6 border-b">
                                        <h3 class="text-xl font-medium">{evento.title}</h3>
                                        <div class="flex items-center gap-2 text-gray-600 mt-1">
                                            <LuCalendar class="h-4 w-4" />
                                            <span>{evento.date}</span>
                                        </div>
                                    </div>
                                    <div class="p-6">
                                        <p class="mb-4 text-gray-600">{evento.description}</p>
                                        <div class="flex items-center gap-2 text-sm text-gray-600">
                                            <LuMapPin class="h-4 w-4" />
                                            <span>{evento.location}</span>
                                        </div>
                                    </div>
                                    <div class="p-6 pt-0">
                                        <Button look="primary" class="bg-red-600 hover:bg-red-700">
                                            <Link href={`/eventos/${evento.id}`}>{_`Más información`}</Link>
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Eventos Celebrados */}
                <section class="py-8 bg-white">
                    <div class="container mx-auto px-4">
                        <h2 class="text-2xl font-bold mb-8 text-gray-500">{_`Eventos celebrados`}</h2>
                        <div class="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
                            {eventosPasados.length === 0 && (
                                <p class="col-span-2 text-gray-400">{_`No hay eventos celebrados aún.`}</p>
                            )}
                            {eventosPasados.map((evento) => (
                                <div key={evento.id} class="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow opacity-70">
                                    <div class="relative h-64">
                                        <img src={evento.image} alt={evento.title} class="w-full h-full object-cover" />
                                    </div>
                                    <div class="p-6 border-b">
                                        <h3 class="text-xl font-medium">{evento.title}</h3>
                                        <div class="flex items-center gap-2 text-gray-600 mt-1">
                                            <LuCalendar class="h-4 w-4" />
                                            <span>{evento.date}</span>
                                        </div>
                                    </div>
                                    <div class="p-6">
                                        <p class="mb-4 text-gray-600">{evento.description}</p>
                                        <div class="flex items-center gap-2 text-sm text-gray-600">
                                            <LuMapPin class="h-4 w-4" />
                                            <span>{evento.location}</span>
                                        </div>
                                    </div>
                                    <div class="p-6 pt-0">
                                        <Button look="primary" class="bg-red-600 hover:bg-red-700 opacity-80 cursor-default" disabled>
                                            {_`Finalizado`}
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Venue Rental */}
                <section class="py-16 bg-gray-100">
                    <div class="container mx-auto px-4">
                        <div class="grid gap-8 md:grid-cols-2 items-center max-w-5xl mx-auto">
                            <div>
                                <h2 class="mb-4 text-3xl font-bold">{_`Alquiler de Salones`}</h2>
                                <p class="mb-6 text-gray-600">
                                    {_`Ofrecemos nuestros espacios para eventos sociales, culturales y educativos:`}
                                </p>
                                <ul class="mb-6 space-y-3">
                                    <li class="flex items-start gap-2">
                                        <div class="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                                        <span>{_`Fiestas y celebraciones`}</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <div class="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                                        <span>{_`Congresos, seminarios y charlas`}</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <div class="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                                        <span>{_`Exposiciones y muestras`}</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <div class="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                                        <span>{_`Capacitaciones, cursos y talleres`}</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <div class="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                                        <span>{_`Cenas y almuerzos`}</span>
                                    </li>
                                </ul>
                                <Button look="primary" class="bg-red-600 hover:bg-red-700">
                                    <Link href="/contacto?asunto=alquiler">{_`Consultar disponibilidad`}</Link>
                                </Button>
                            </div>
                            <div class="relative">
                                <img
                                    src="/images/salones-circulo-italiano.jpg"
                                    alt={_`Salones del Círculo Italiano`}
                                    class="object-cover rounded-lg max-h-[300px] w-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Calendar */}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4">
                        <div class="mb-12 text-center">
                            <h2 class="mb-2 text-3xl font-bold">{_`Calendario de Actividades`}</h2>
                            <p class="mx-auto max-w-2xl text-gray-600">
                                {_`Mantente al día con todas nuestras actividades y eventos`}
                            </p>
                        </div>

                        <div class="mx-auto max-w-4xl rounded-lg border p-6">
                            <div class="grid gap-4">
                                <div class="flex items-center justify-between border-b pb-4">
                                    <div>
                                        <h3 class="font-bold">{_`Abril 2025`}</h3>
                                    </div>
                                    <div class="flex gap-2">
                                        <Button look="outline" size="sm">
                                            {_`Anterior`}
                                        </Button>
                                        <Button look="outline" size="sm">
                                            {_`Siguiente`}
                                        </Button>
                                    </div>
                                </div>

                                <div class="space-y-4">
                                    {eventos.map((evento) => (
                                        <div key={evento.id} class="flex gap-4 border-b pb-4">
                                            <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-gray-100">
                                                <LuCalendar class="h-6 w-6" />
                                            </div>
                                            <div class="flex-1">
                                                <h4 class="font-medium">{evento.title}</h4>
                                                <div class="flex items-center gap-2 text-sm text-gray-600">
                                                    <LuClock class="h-4 w-4" />
                                                    <span>{evento.date}</span>
                                                </div>
                                            </div>
                                            <Button look="outline" size="sm">
                                                <Link href={`/eventos/${evento.id}`}>{_`Ver`}</Link>
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section class="bg-red-600 py-16 text-white">
                    <div class="container mx-auto px-4 text-center">
                        <h2 class="mb-4 text-3xl font-bold">{_`¿Tienes un proyecto cultural?`}</h2>
                        <p class="mx-auto mb-8 max-w-2xl text-lg">
                            {_`Acércanos tu propuesta. Estamos abiertos a colaboraciones y nuevas iniciativas culturales.`}
                        </p>
                        <Button look="outline" size="lg" class="bg-white text-red-600 hover:bg-white/90">
                            <Link href="/contacto?asunto=proyecto">{_`Presentar proyecto`}</Link>
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    );
});

export const head: DocumentHead = {
    title: _`Eventos y Muestras - Círculo Italiano Joven Italia`,
    meta: [
        {
            name: "description",
            content: _`Descubre los eventos culturales, sociales y educativos organizados por el Círculo Italiano de Miramar. Muestras, cenas, charlas y más.`,
        },
    ],
};
