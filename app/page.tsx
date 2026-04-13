"use client";

import { useState } from "react";
import Image from "next/image";
import { greatVibes } from "./fonts";
import ContactForm from "./components/ContactForm";
import FadeIn from "./components/FadeIn";
import Countdown from "./components/Countdown";
import MusicToggle from "./components/MusicToggle";

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

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  if (!open) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5efe6] px-4 py-10 text-center text-[#3b2b20] sm:px-6">
        <div className="w-full max-w-md rounded-[2rem] border border-[#d9cbb9] bg-white p-8 shadow-2xl sm:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8b6b4f]">
            Invitación
          </p>

          <h1 className={`mt-6 text-4xl sm:text-5xl ${greatVibes.className}`}>
            {boda.nombres}
          </h1>

          <p className="mt-6 text-sm leading-7 text-[#5a4633] sm:text-base sm:leading-8">
            Tenemos el placer de invitarte a compartir con nosotros uno de los
            días más importantes de nuestras vidas.
          </p>

          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-[#8b6b4f]">
            {boda.fecha}
          </p>

          <button
            onClick={() => setOpen(true)}
            className="mt-8 rounded-full bg-[#3b2b20] px-8 py-3 text-white transition hover:bg-[#5a4633]"
          >
            Abrir invitación
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#f5efe6] text-[#3b2b20]">
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/35 md:hidden"
          onClick={closeMenu}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-[70] h-full w-[85%] max-w-sm bg-[#f5efe6] shadow-2xl transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#d9cbb9] px-5 py-5">
          <span className="text-lg tracking-[0.2em] text-[#3b2b20]">MENÚ</span>
          <button
            type="button"
            onClick={closeMenu}
            className="text-3xl leading-none text-[#3b2b20]"
            aria-label="Cerrar menú"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col px-5 py-4 text-base text-[#3b2b20]">
          <a
            href="#bienvenidos"
            onClick={closeMenu}
            className="border-b border-[#e4d8cb] py-4"
          >
            Bienvenidos
          </a>
          <a
            href="#blog"
            onClick={closeMenu}
            className="border-b border-[#e4d8cb] py-4"
          >
            Nuestra historia
          </a>
          <a
            href="#invitacion"
            onClick={closeMenu}
            className="border-b border-[#e4d8cb] py-4"
          >
            Invitación oficial
          </a>
          <a
            href="#rsvp"
            onClick={closeMenu}
            className="border-b border-[#e4d8cb] py-4"
          >
            Confirmar asistencia
          </a>
          <a
            href="#contacto"
            onClick={closeMenu}
            className="border-b border-[#e4d8cb] py-4"
          >
            Contacto
          </a>
          <a
            href="#galeria"
            onClick={closeMenu}
            className="border-b border-[#e4d8cb] py-4"
          >
            Galería
          </a>
        </nav>
      </aside>

      <header className="sticky top-0 z-50 border-b border-[#d9cbb9] bg-[#f5efe6]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:py-5">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9cbb9] md:hidden"
              aria-label="Abrir menú"
            >
              <span className="text-2xl leading-none">☰</span>
            </button>

            <a
              href="#bienvenidos"
              className="text-2xl font-light tracking-[0.2em] sm:text-3xl md:text-4xl"
            >
              A&amp;B
            </a>
          </div>

          <nav className="hidden gap-8 text-sm uppercase tracking-[0.22em] md:flex">
            <a href="#bienvenidos" className="transition hover:text-[#8b6b4f]">
              Bienvenidos
            </a>
            <a href="#blog" className="transition hover:text-[#8b6b4f]">
              Historia
            </a>
            <a href="#invitacion" className="transition hover:text-[#8b6b4f]">
              Invitación
            </a>
            <a href="#rsvp" className="transition hover:text-[#8b6b4f]">
              RSVP
            </a>
            <a href="#contacto" className="transition hover:text-[#8b6b4f]">
              Contacto
            </a>
            <a href="#galeria" className="transition hover:text-[#8b6b4f]">
              Galería
            </a>
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
              className="rounded-full bg-white px-8 py-3 text-sm text-black transition hover:opacity-90"
            >
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

      <MusicToggle />
    </main>
  );
}