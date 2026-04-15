"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  House,
  Heart,
  Mail,
  CircleCheck,
  Phone,
  Images,
  MapPinned,
} from "lucide-react";
import { greatVibes } from "./fonts";
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
  { href: "#rsvp", id: "rsvp", label: "RSVP", icon: CircleCheck },
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
        <Sobre
          setInvitado={setInvitado}
          setAdultosInvitados={setAdultosInvitados}
          setNinosInvitados={setNinosInvitados}
        />

        <div className="flex min-h-screen items-center justify-center bg-[#f5efe6] px-4 py-10 text-center text-[#3b2b20] sm:px-6">
          <div className="w-full max-w-md rounded-[2rem] border border-[#d9cbb9] bg-white p-8 shadow-2xl sm:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8b6b4f]">
              Invitación
            </p>

            <h1 className={`mt-6 text-4xl sm:text-5xl ${greatVibes.className}`}>
              {boda.nombres}
            </h1>

            {invitado ? (
              <p className="mt-5 text-base leading-7 text-[#5a4633] sm:text-lg">
                Para <strong>{invitado}</strong>
              </p>
            ) : (
              <p className="mt-5 text-sm leading-7 text-[#5a4633] sm:text-base sm:leading-8">
                Tenemos el placer de invitarte a compartir con nosotros uno de los
                días más importantes de nuestras vidas.
              </p>
            )}

            {(adultosInvitados !== null || ninosInvitados !== null) && (
              <div className="mt-5 rounded-[1.5rem] border border-[#e7d8c7] bg-[#faf6f1] p-4 text-sm leading-7 text-[#5a4633]">
                <p className="text-xs uppercase tracking-[0.25em] text-[#8b6b4f]">
                  Sobre personalizado
                </p>

                <p className="mt-3">
                  Invitación prevista para{" "}
                  <strong>{adultosInvitados ?? 0}</strong> adulto(s)
                  {ninosInvitados !== null && (
                    <>
                      {" "}y <strong>{ninosInvitados}</strong> niño(s)
                    </>
                  )}
                  .
                </p>
              </div>
            )}

            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-[#8b6b4f]">
              {boda.fecha}
            </p>

            <button
              onClick={() => setOpen(true)}
              className="mt-8 rounded-full bg-[#3b2b20] px-8 py-3 text-white transition duration-300 hover:bg-[#5a4633]"
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
      <Sobre
        setInvitado={setInvitado}
        setAdultosInvitados={setAdultosInvitados}
        setNinosInvitados={setNinosInvitados}
      />

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
                Invitación TEST
              </p>
              <h2 className={`mt-2 text-3xl ${greatVibes.className}`}>
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
            className={`mt-4 text-4xl text-white sm:text-5xl md:text-7xl ${greatVibes.className}`}
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
          <div className="mx-auto max-w-6xl space-y-10 md:space-y-16">
            <div className="grid items-center gap-8 rounded-[2rem] bg-white p-6 shadow-xl sm:p-8 md:grid-cols-2 md:gap-10 md:p-10">
              <div className="overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/alianzas-doradas.jpg"
                  alt="alianzas"
                  width={900}
                  height={700}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#8b6b4f] sm:text-sm">
                  Blog de boda
                </p>

                <h2 className="mt-4 text-3xl font-light sm:text-4xl">
                  Nuestra historia
                </h2>

                <div className="mt-6 space-y-5 text-sm leading-7 text-[#5a4633] sm:mt-8 sm:text-base sm:leading-8">
                  <p>Hola a todos!!!</p>

                  <p>
                    Este es el blog del que será el día más importante de
                    nuestras vidas ¡¡¡nuestra boda!!!
                  </p>

                  <p>
                    Será un día super especial que queremos compartir con todos
                    vosotros, pero hasta que llegue aún tenemos mucho trabajo
                    por delante. Usaremos este blog para manteneros al día de
                    cualquier novedad y para explicaros cómo llevamos todo lo de
                    la organización, los nervios, el estrés y muchísima
                    felicidad.
                  </p>

                  <p>
                    Esperamos que disfrutéis tanto como nosotros, un abrazo
                    muuuy grande!!!
                  </p>
                </div>
              </div>
            </div>

            <div
              id="invitacion"
              className="grid overflow-hidden rounded-[2rem] shadow-xl md:grid-cols-2"
            >
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
                    Nos hace muchísima ilusión invitaros a formar parte de uno
                    de los días más importantes de nuestras vidas. Queremos
                    celebrar nuestro amor rodeados de las personas que más
                    queremos, y vosotros sois una parte muy especial de ello.
                  </p>

                  <p>
                    El día estará lleno de momentos inolvidables, risas y mucho
                    cariño, y nos encantaría compartirlo con todos vosotros.
                  </p>

                  <p>
                    La celebración del banquete tendrá lugar en Complejo La
                    Cigüeña.
                  </p>

                  <p>
                    Para poder organizar cada detalle con todo el cariño que
                    merece, os pedimos que confirméis vuestra asistencia y
                    realicéis la aportación correspondiente
                    <strong> antes del 1 de junio de 2026</strong>.
                  </p>

                  <p>La aportación es de:</p>

                  <ul className="list-disc space-y-2 pl-5">
                    <li>
                      <strong>130 € por comensal adulto</strong>
                    </li>
                    <li>
                      <strong>55 € por menor de 12 años</strong>
                    </li>
                  </ul>

                  <p>
                    Si deseáis consultar la asistencia de acompañantes o
                    personas adicionales, os pedimos que nos lo comentéis
                    previamente, ya que necesitamos cerrar el número de
                    comensales con antelación.
                  </p>

                  <p>
                    La reserva quedará confirmada una vez recibamos tanto la
                    confirmación como la aportación.
                  </p>

                  <p>
                    Podéis realizar el ingreso en el siguiente número de cuenta:
                  </p>

                  <p className="text-base font-medium tracking-wide text-[#3b2b20] sm:text-lg md:text-xl">
                    ES54 0073 0100 5905 9909 4910
                  </p>

                  <p>
                    Gracias de corazón por formar parte de este momento tan
                    especial para nosotros.
                  </p>

                  <p>Con muchísimo cariño,</p>

                  <p className="text-base font-medium text-[#3b2b20] sm:text-lg md:text-xl">
                    Brigitte &amp; Alexander 💍
                  </p>
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
          <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#3b2b20] p-8 text-white shadow-xl sm:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d6c2a8] sm:text-sm">
              Confirma tu asistencia
            </p>

            <h2 className="mt-4 text-3xl font-light sm:text-4xl">RSVP</h2>

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
          <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#f5efe6] p-6 shadow-xl sm:p-8 md:p-10">
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
          <div className="mx-auto max-w-3xl rounded-[1.5rem] bg-[#f5efe6] p-6 shadow-lg sm:p-8">
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

      <footer className="border-t border-[#d9cbb9] bg-[#efe6db] px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#8b6b4f]">
            Gracias por acompañarnos
          </p>

          <h2 className={`mt-4 text-4xl text-[#3b2b20] sm:text-5xl ${greatVibes.className}`}>
            Brigitte &amp; Alexander
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#5a4633] sm:text-base">
            Con muchísima ilusión esperamos celebrar este día junto a vosotros.
          </p>

          <p className="mt-4 text-sm text-[#5a4633]">
            {boda.fecha} · {boda.lugar}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/rsvp"
              className="rounded-full bg-[#3b2b20] px-6 py-3 text-sm text-white transition hover:bg-[#5a4633]"
            >
              Confirmar asistencia
            </a>

            <a
              href={boda.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#3b2b20] px-6 py-3 text-sm text-[#3b2b20] transition hover:bg-white"
            >
              Ver ubicación
            </a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-40">
        <MusicToggle />
      </div>
    </main>
  );
}/ /   t e s t   c a m b i o  
 