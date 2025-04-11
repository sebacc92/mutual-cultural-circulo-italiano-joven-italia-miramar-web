import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import Logo from '~/media/logo.png?jsx';

export default component$(() => {
  const loc = useLocation();
  const { pathname } = loc.url;
  return (
    <header class="w-full">
      {/* Top bar with contact info and social media */}
      <div class="bg-gradient-to-r from-[#009246] via-white to-[#CE2B37] text-white">
        <div class="container mx-auto px-4 h-12 flex justify-between items-center">
          <div class="flex items-center gap-6">
            <a href="tel:+5492291451937" class="flex items-center gap-2 hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span class={`text-sm ${pathname === '/' ? 'text-[#009246]' : 'text-gray-700'}`}>Llamar</span>
            </a>
            <a href="mailto:info@circuloitalianomiramar.com.ar" class="flex items-center gap-2 hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <span class={`text-sm ${pathname === '/' ? 'text-[#009246]' : 'text-gray-700'}`}>Email</span>
            </a>
          </div>
          <div class="flex items-center gap-6">
            <div class="flex items-center gap-4">
              <a href="https://www.facebook.com/italianos.enmiramar" target="_blank" rel="noopener noreferrer" class="text-[#CE2B37] hover:text-[#b52532] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/italianosenmiramar" target="_blank" rel="noopener noreferrer" class="text-[#CE2B37] hover:text-[#b52532] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            <Link href="/contacto" class="bg-[#CE2B37] px-6 py-1 rounded text-sm text-white hover:bg-[#b52532] transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      </div>

      {/* Main header with logo and navigation */}
      <div class="bg-white border-b">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
          <div class="flex items-center">
            <Link href="/" class="flex items-center gap-2">
              <Logo
                alt="Círculo Italiano Miramar Logo"
                class="rounded-full"
                style={{ width: '70px', height: '70px'}}
              />
              <div class="hidden md:block">
                <p class="text-sm font-medium">Mutual Cultural</p>
                <p class="text-xl font-bold">Círculo Italiano Joven Italia</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav class="hidden md:flex items-center gap-8">
            <Link href="/" class="text-gray-700 hover:text-[#CE2B37] text-sm">Inicio</Link>
            <Link href="/autoridades" class="text-gray-700 hover:text-[#CE2B37] text-sm">Autoridades</Link>
            <Link href="/noticias" class="text-gray-700 hover:text-[#CE2B37] text-sm">Noticias</Link>
            <Link href="/agenda" class="text-gray-700 hover:text-[#CE2B37] text-sm">Agenda</Link>
            <Link href="/galeria" class="text-gray-700 hover:text-[#CE2B37] text-sm">Galería de fotos</Link>
            <Link href="/alquiler" class="text-gray-700 hover:text-[#CE2B37] text-sm">Alquiler de salones</Link>
          </nav>

          {/* Mobile menu button */}
          <button class="md:hidden" aria-label="Menu">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
});
