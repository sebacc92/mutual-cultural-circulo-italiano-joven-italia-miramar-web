import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import Logo from '~/media/logo.png?jsx';
import { _ } from "compiled-i18n";
import { LocaleSelector } from "./locale-selector";
import { NavLink } from "./NavLink";

export default component$(() => {
  const loc = useLocation();
  const { pathname } = loc.url;
  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Eventos", href: "/eventos/" },
    { name: "Trámites", href: "/tramites/" },
    { name: "Alquiler de salones", href: "/alquiler-salones/" },
    { name: "Historia", href: "/historia/" },
    {
      name: "Idiomas",
      href: "#",
      dropdown: true,
      items: [
        { name: "Clases de Italiano", href: "/clases/italiano/" },
        { name: "Clases de Inglés", href: "/clases/ingles/" },
      ],
    },
    { name: "Autoridades", href: "/autoridades/" },
  ]
  return (
    <header class="w-full">
      {/* Top bar with contact info and social media */}
      <div class="relative bg-gradient-to-r from-[#009246] via-white to-[#CE2B37]">
        <div class="container mx-auto px-2 h-auto flex items-center justify-center gap-2 flex-wrap py-2">
          <a
            href="tel:+5492291451937"
            class="flex items-center gap-1 px-2 py-1 rounded-md transition-colors hover:bg-white/20 text-xs"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#006124]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <span class="font-medium text-[#006124]">{_`Llamar`}</span>
          </a>
          <a
            href="mailto:info@circuloitalianomiramar.com.ar"
            class="flex items-center gap-1 px-2 py-1 rounded-md transition-colors hover:bg-white/20 text-xs"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#006124]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            <span class="font-medium text-[#006124]">Email</span>
          </a>
          <Link
            href="/contacto"
            class="bg-[#CE2B37] px-4 py-1 rounded-md text-xs font-medium text-white hover:bg-[#b52532] transition-colors shadow-xs"
            style={{ minWidth: '90px', textAlign: 'center' }}
          >
            {_`Contacto`}
          </Link>
          <LocaleSelector />
          <a
            href="https://www.facebook.com/italianos.enmiramar"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#CE2B37] hover:text-[#b52532] bg-white/90 h-7 w-7 rounded-full transition-colors hover:bg-white flex justify-center items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/italianosenmiramar"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#CE2B37] hover:text-[#b52532] bg-white/90 h-7 w-7 rounded-full transition-colors hover:bg-white flex justify-center items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main header with logo and navigation */}
      <div class="bg-white border-b">
        <div class="container mx-auto px-2 py-2 flex flex-col items-center">
          <div class="flex items-center w-full justify-center gap-2 my-4">
            <Link href="/" class="flex items-center gap-2">
              <Logo
                alt="Círculo Italiano Miramar Logo"
                class="rounded-full"
                style={{ width: '81px', height: '81px' }}
              />
              <div class="block text-center">
                <p class="text-xl font-medium leading-none">Mutual Cultural</p>
                <p class="text-2xl font-bold leading-tight whitespace-normal">Círculo Italiano Joven Italia</p>
              </div>
            </Link>
            <button class="md:hidden ml-2" aria-label="Menu">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav class="hidden md:flex items-center font-bold">
            {navigation.map((item) =>
              item.dropdown ? (
                <div key={item.name} class="relative group">
                  <button class="text-gray-700 text-sm px-4 py-2 transition-colors hover:text-primary flex items-center gap-1">
                    {item.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-4 w-4"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  <div class="absolute left-0 top-full z-10 mt-1 w-48 rounded-md border border-gray-200 bg-white py-2 shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    {item.items.map((subItem) => (
                      <NavLink
                        key={subItem.name}
                        href={subItem.href}
                        class="block px-4 py-2 text-md hover:!text-[#fff] hover:bg-[#009246]"
                        activeClass="!text-green-600"
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.name}
                  href={item.href}
                  class="text-gray-700 hover:!text-[#fff] hover:bg-[#009246] text-md py-2 px-4"
                  activeClass="!text-green-600"
                >
                  {item.name}
                </NavLink>
              ),
            )}
          </nav>
        </div>
      </div>
    </header>
  );
});
