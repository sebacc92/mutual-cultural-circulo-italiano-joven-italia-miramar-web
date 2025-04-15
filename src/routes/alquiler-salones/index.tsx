import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <>
            <h1>Alquiler de salones 👋</h1>
            <div>
                Alquiler de salones
            </div>
        </>
    );
});

export const head: DocumentHead = {
    title: "Mutual Cultural Círculo Italiano Joven Italia",
    meta: [
        {
            name: "description",
            content: "Acompañando a la ciudad de Miramar hace 135 años 💚| Ciclo de charlas, Clases de Italiano 🤍| Muestras, Eventos ❤️| Trámites de Ciudadanía y +",
        },
    ],
};
