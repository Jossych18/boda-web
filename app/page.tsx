"use client";

import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import {
  House,
  Heart,
  Mail,
  CircleCheck,
  Phone,
  Images,
  MapPinned,
  Shirt,
} from "lucide-react";
import { apricot } from "./fonts";
import ContactForm from "./components/ContactForm";
import FadeIn from "./components/FadeIn";
import Countdown from "./components/Countdown";
import MusicToggle from "./components/MusicToggle";
import Sobre from "./components/Sobre";

const boda = {
  nombres: "Brigitte & Alexander",
  mensaje: "¡NOS CASAMOS!",
  fecha: "19 de Junio de 2026",
  hora: "18:00",
  lugar: "Complejo La Cigüeña",
  ciudad: "Madrid, España",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Complejo+La+Cig%C3%BCe%C3%B1a+Madrid",
  galeriaUrl:
    "https://drive.google.com/drive/folders/1mM-gea6B3jjAFZ1Wt45cbf48LCBJG8Rf?usp=sharing",
  contactoFormUrl: "https://formspree.io/f/xeepyyey",
};

const navLinks = [
  { href: "#bienvenidos", id: "bienvenidos", label: "Bienvenidos", icon: House },
  { href: "#blog", id: "blog", label: "Historia", icon: Heart },
  { href: "#invitacion", id: "invitacion", label: "Invitación", icon: Mail },
  { href: "#vestimenta", id: "vestimenta", label: "Vestimenta", icon: Shirt },
  { href: "#rsvp", id: "rsvp", label: "Formulario", icon: CircleCheck },
  { href: "#contacto", id: "contacto", label: "Contacto", icon: Phone },
  { href: "#galeria", id: "galeria", label: "Galería", icon: Images },
];

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("bienvenidos");

  const [invitado, setInvitado] = useState("");
  const [adultosInvitados, setAdultosInvitados] = useState<number | null>(null);
  const [ninosInvitados, setNinosInvitados] = useState<number | null>(null);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const shouldOpen =
      params.get("open") === "1" || window.location.hash === "#bienvenidos";

    if (shouldOpen) {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!open) return;

    const sections = navLinks
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [open]);

  if (!open) {
    return (
      <>
        <Suspense fallback={null}>
          <Sobre
            setInvitado={setInvitado}
            setAdultosInvitados={setAdultosInvitados}
            setNinosInvitados={setNinosInvitados}
          />
        </Suspense>

        <div className="flex min-h-screen items-center justify-center bg-[#f5efe6] px-4 py-10">
          <div className="w-full max-w-md rounded-[2rem] border border-[#d9cbb9] bg-white p-6 text-center shadow-2xl sm:p-8">
            <div className="relative mx-auto w-full max-w-[300px]">
              {invitado && (
                <div className="mb-4 text-center">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#8b6b4f]">
                    Para
                  </p>
                  <p
                    className={`mt-2 text-2xl leading-none text-[#3b2b20] sm:text-3xl ${apricot.className}`}
                  >
                    {invitado}
                  </p>
                </div>
              )}

              <Image
                src="/sobre.png"
                alt="Sobre de invitación"
                width={300}
                height={220}
                className="mx-auto h-auto w-full object-contain"
                priority
              />
            </div>

            <button
              onClick={() => setOpen(true)}
              className="mt-4 rounded-full bg-[#3b2b20] px-8 py-3 text-white transition duration-300 hover:bg-[#5a4633]"
            >
              Abrir sobre
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <main className="bg-[#f5efe6] text-[#3b2b20]">
      <Suspense fallback={null}>
        <Sobre
          setInvitado={setInvitado}
          setAdultosInvitados={setAdultosInvitados}
          setNinosInvitados={setNinosInvitados}
        />
      </Suspense>

      <div
        className={`fixed inset-0 z-[60] bg-black/30 backdrop-blur-[3px] transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      <aside
        className={`fixed left-0 top-0 z-[70] flex h-full w-[88%] max-w-sm flex-col bg-[#f5efe6]/98 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="border-b border-[#d9cbb9] px-6 py-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-[#8b6b4f]">
                Invitación
              </p>
              <h2 className={`mt-2 text-3xl ${apricot.className}`}>
                Brigitte &amp; Alexander
              </h2>
              <p className="mt-2 text-sm text-[#5a4633]">{boda.fecha}</p>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9cbb9] bg-white/70 text-[#3b2b20] transition hover:bg-white"
              aria-label="Cerrar menú"
            >
              ✕
            </button>
          </div>
        </div>

        <nav className="flex flex-col px-4 py-4">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`flex items-center justify-between rounded-2xl px-3 py-4 transition ${
                  isActive ? "bg-white shadow-sm" : "hover:bg-white/70"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      isActive
                        ? "bg-[#3b2b20] text-white"
                        : "bg-[#efe5d8] text-[#6b4f3a]"
                    }`}
                  >
                    <Icon size={18} />
                  </div>

                  <span
                    className={`text-[15px] ${
                      isActive ? "font-medium text-[#3b2b20]" : "text-[#3b2b20]"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>

                <span
                  className={`text-xl ${
                    isActive ? "text-[#3b2b20]" : "text-[#8b6b4f]"
                  }`}
                >
                  ›
                </span>
              </a>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-[#d9cbb9] px-6 py-6">
          <div className="rounded-[1.5rem] bg-white/70 p-4 shadow-sm ring-1 ring-[#e8ddd1]">
            <p className="text-xs uppercase tracking-[0.25em] text-[#8b6b4f]">
              Nuestra boda
            </p>
            <p className="mt-2 text-sm leading-6 text-[#5a4633]">
              Gracias por acompañarnos en este día tan especial 💍
            </p>
          </div>
        </div>
      </aside>

      <header className="sticky top-0 z-50 border-b border-[#d9cbb9] bg-[#f5efe6]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:py-5">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9cbb9] bg-white/70 text-[#3b2b20] transition hover:bg-white md:hidden"
              aria-label="Abrir menú"
            >
              <div className="relative h-5 w-5">
                <span
                  className={`absolute left-0 top-[4px] h-[2px] w-5 origin-center rounded-full bg-[#3b2b20] transition duration-300 ${
                    menuOpen ? "translate-y-[5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[9px] h-[2px] w-5 rounded-full bg-[#3b2b20] transition duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-[2px] w-5 origin-center rounded-full bg-[#3b2b20] transition duration-300 ${
                    menuOpen ? "-translate-y-[5px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>

            <a
              href="#bienvenidos"
              className="text-2xl font-light tracking-[0.2em] sm:text-3xl md:text-4xl"
            >
              A&amp;B
            </a>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative pb-1 text-sm uppercase tracking-[0.22em] transition ${
                    isActive ? "text-[#3b2b20]" : "hover:text-[#8b6b4f]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#3b2b20] transition-all duration-300 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>
        </div>
      </header>

      <section
        id="bienvenidos"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12 text-center sm:px-6"
      >
        <Image
          src="/novios.jpg"
          alt="Foto de los novios"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#2a1d15]/50" />

        <div className="relative z-10 w-full max-w-5xl rounded-[2rem] border border-white/20 bg-white/10 px-6 py-8 shadow-2xl backdrop-blur-md sm:px-8 sm:py-10 md:rounded-[2.5rem] md:px-16 md:py-14">
          <p className="text-xs uppercase tracking-[0.35em] text-white/90 sm:text-sm md:text-base">
            {boda.mensaje}
          </p>

          <h1
            className={`mt-4 text-4xl text-white sm:text-5xl md:text-7xl ${apricot.className}`}
          >
            {boda.nombres}
          </h1>

          <div className="mt-5">
            <Countdown />
          </div>

          <p className="mt-5 text-sm text-white sm:text-base md:text-xl">
            {boda.fecha} · {boda.hora}
          </p>

          <p className="mt-2 text-xs text-[#e6d7c3] sm:text-sm md:text-base">
            {boda.lugar} — {boda.ciudad}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="/rsvp"
              className="rounded-full border border-white px-8 py-3 text-sm text-white transition hover:bg-white hover:text-black"
            >
              Confirmar asistencia
            </a>

            <a
              href={boda.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm text-black transition hover:opacity-90"
            >
              <MapPinned size={16} />
              Ver ubicación
            </a>
          </div>
        </div>
      </section>

      <FadeIn>
        <section id="blog" className="px-4 py-14 sm:px-6 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#e5d8ca] bg-[#f5efe6] p-6 shadow-xl sm:p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8b6b4f] sm:text-sm">
              Nuestra historia
            </p>

            <h2 className="mt-4 text-3xl font-light sm:text-4xl">
              Así empezó todo
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-[#5a4633] sm:mt-8 sm:text-base sm:leading-8">
              <p>
                Dicen que las grandes historias empiezan sin planearse… y la
                nuestra es el mejor ejemplo.
              </p>

              <p>
                Yo tenía 18, él 22, y nos conocimos gracias a amigos en común.
                Lo que empezó como algo sin importancia… bueno, claramente se
                nos fue un poco de las manos 😄
              </p>

              <p>
                Porque casi sin darnos cuenta, llegó Mathias. Y en lugar de
                salir corriendo, hicimos lo contrario: nos unimos más que nunca.
                Crecimos rápido, aprendimos sobre la marcha… pero siempre
                juntos.
              </p>

              <p>
                Seis años después, como si no hubiéramos tenido suficiente
                aventura, decidimos sumar a Thiago al equipo.
              </p>

              <p>
                Tres años comprometidos, dos hijos, mil historias… y por fin
                este año decimos: “vale, ahora sí, vamos a hacerlo oficial”.
              </p>

              <p>
                No ha sido perfecto, pero ha sido nuestro. Y sinceramente… no lo
                cambiaría por nada.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-[1.5rem] shadow-md">
                <Image
                  src="/hijo1.jpeg"
                  alt="Foto de Mathias"
                  width={900}
                  height={700}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="overflow-hidden rounded-[1.5rem] shadow-md">
                <Image
                  src="/hijo2.jpeg"
                  alt="Foto de Thiago"
                  width={900}
                  height={700}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section id="invitacion" className="px-4 pb-14 sm:px-6 sm:pb-16 md:pb-20">
          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-[#e5d8ca] shadow-xl md:grid-cols-2">
            <div className="relative min-h-[280px] md:min-h-[560px]">
              <Image
                src="/flores-boho.jpg"
                alt="decoración"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="bg-[#f5efe6] p-6 sm:p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-[#8b6b4f] sm:text-sm">
                Invitación oficial
              </p>

              <h2 className="mt-4 text-3xl font-light sm:text-4xl">
                Queridos familiares y amigos
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-7 text-[#5a4633] sm:mt-8 sm:text-base sm:leading-8">
                <p>
                  Gracias de corazón por acompañarnos en un momento tan
                  importante para nosotros. Nos hace muchísima ilusión poder
                  celebrar este día rodeados de las personas que más queremos.
                </p>

                <p>
                  Para organizar todo con cariño, os pedimos que confirméis
                  vuestra asistencia antes del{" "}
                  <strong>1 de junio de 2026</strong>.
                </p>

                <p>La aportación orientativa es:</p>

                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong>130 € por comensal adulto</strong>
                  </li>
                  <li>
                    <strong>55 € por menor de 12 años</strong>
                  </li>
                </ul>

                <p>
                  Si necesitáis consultar cualquier cambio o acompañante
                  adicional, os agradecemos que nos lo comentéis previamente.
                </p>

                <p>
                  IBAN: <strong>ES54 0073 0100 5905 9909 4910</strong>
                </p>

                <p>
                  Gracias por formar parte de nuestra historia y por compartir
                  con nosotros este día tan especial.
                </p>

                <p className={`text-base text-[#3b2b20] sm:text-lg md:text-xl ${apricot.className}`}>
                  Brigitte &amp; Alexander 💍
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section id="vestimenta" className="px-4 pb-14 sm:px-6 sm:pb-16 md:pb-20">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#e5d8ca] bg-[#f5efe6] p-6 shadow-xl sm:p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8b6b4f] sm:text-sm">
              Código de vestimenta
            </p>

            <h2 className="mt-4 text-3xl font-light sm:text-4xl">
              Formal o semiformal
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[#d8c7b2] bg-[#faf6f1] p-6">
                <h3 className="text-xl font-medium text-[#3b2b20]">Mujer</h3>
                <p className="mt-4 text-sm leading-7 text-[#5a4633] sm:text-base">
                  Estilo formal o semiformal largo. Recomendamos un look elegante
                  y cómodo para disfrutar de toda la celebración.
                </p>

                <ul className="mt-4 space-y-2 text-sm leading-7 text-[#5a4633] sm:text-base">
                  <li>• Vestido largo o midi elegante</li>
                  <li>• Tacones o calzado formal</li>
                  <li>• Accesorios discretos o brillantes</li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="h-8 w-8 rounded-full border border-[#d8c7b2] bg-[#d8c5b2]" />
                  <span className="h-8 w-8 rounded-full border border-[#d8c7b2] bg-[#c9d4c2]" />
                  <span className="h-8 w-8 rounded-full border border-[#d8c7b2] bg-[#b8c7d9]" />
                  <span className="h-8 w-8 rounded-full border border-[#d8c7b2] bg-[#e8d6d0]" />
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-[#d8c7b2] bg-[#faf6f1] p-6">
                <h3 className="text-xl font-medium text-[#3b2b20]">Hombre</h3>
                <p className="mt-4 text-sm leading-7 text-[#5a4633] sm:text-base">
                  Estilo formal o semiformal. Un conjunto clásico y elegante será
                  perfecto para la ocasión.
                </p>

                <ul className="mt-4 space-y-2 text-sm leading-7 text-[#5a4633] sm:text-base">
                  <li>• Traje o conjunto semiformal</li>
                  <li>• Camisa clara</li>
                  <li>• Zapato formal</li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="h-8 w-8 rounded-full border border-[#d8c7b2] bg-[#1f2a44]" />
                  <span className="h-8 w-8 rounded-full border border-[#d8c7b2] bg-[#6f7c8b]" />
                  <span className="h-8 w-8 rounded-full border border-[#d8c7b2] bg-[#8c7a67]" />
                  <span className="h-8 w-8 rounded-full border border-[#d8c7b2] bg-[#d4d0c8]" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section
          id="rsvp"
          className="px-4 pb-14 text-center sm:px-6 sm:pb-16 md:pb-20"
        >
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#2f2219] bg-[#3b2b20] p-8 text-white shadow-xl sm:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d6c2a8] sm:text-sm">
              Confirma tu asistencia
            </p>

            <h2 className="mt-4 text-3xl font-light sm:text-4xl">
              Formulario de asistencia
            </h2>

            <p className="mt-4 text-base sm:text-xl">
              ¿Nos acompañas o te lo pierdes?
            </p>

            <a
              href="/rsvp"
              className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm text-[#3b2b20] transition hover:scale-105"
            >
              Ir al formulario
            </a>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section
          id="contacto"
          className="px-4 pb-14 sm:px-6 sm:pb-16 md:pb-20"
        >
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#e5d8ca] bg-[#f5efe6] p-6 shadow-xl sm:p-8 md:p-10">
            <h2 className="mb-6 text-center text-3xl font-light sm:text-4xl">
              ¿Alguna duda?
            </h2>

            <ContactForm endpoint={boda.contactoFormUrl} />
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section
          id="galeria"
          className="px-4 pb-20 text-center sm:px-6 sm:pb-24"
        >
          <div className="mx-auto max-w-3xl rounded-[1.5rem] border border-[#e5d8ca] bg-[#f5efe6] p-6 shadow-lg sm:p-8">
            <h2 className="text-2xl font-light sm:text-3xl">
              Comparte tus fotos
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#5a4633] sm:text-base">
              Escanea el código o entra directamente en la galería para subir y
              ver recuerdos de este día tan especial.
            </p>

            <Image
              src="/qr-galeria.png"
              alt="QR galería"
              width={150}
              height={150}
              className="mx-auto mt-6"
            />

            <a
              href={boda.galeriaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-[#3b2b20] px-6 py-3 text-sm text-white transition hover:scale-105"
            >
              Ver galería
            </a>
          </div>
        </section>
      </FadeIn>

      <div className="fixed bottom-5 right-5 z-40">
        <MusicToggle />
      </div>
    </main>
  );
}