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
  galeriaUrl: "https://drive.google.com/drive/folders/1mM-gea6B3jjAFZ1Wt45cbf48LCBJG8Rf?usp=sharing",
  contactoFormUrl: "https://formspree.io/f/xeepyyey",
};

export default function HomePage() {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5efe6] px-6 text-center text-[#3b2b20]">
        <div className="w-full max-w-md rounded-[2rem] border border-[#d9cbb9] bg-white p-10 shadow-2xl transition-all duration-700 hover:scale-[1.02]">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8b6b4f]">
            Invitación
          </p>

          <h1 className={`mt-6 text-5xl ${greatVibes.className}`}>
            {boda.nombres}
          </h1>

          <p className="mt-6 leading-8 text-[#5a4633]">
            Tenemos el placer de invitarte a compartir con nosotros uno de los
            días más importantes de nuestras vidas.
          </p>

          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-[#8b6b4f]">
            {boda.fecha}
          </p>

          <button
            onClick={() => setOpen(true)}
            className="mt-8 rounded-full bg-[#3b2b20] px-8 py-3 text-white transition-all duration-500 hover:scale-110 hover:bg-[#5a4633]"
          >
            Abrir invitación
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="animate-fadeIn bg-[#f5efe6] text-[#3b2b20]">
      <header className="sticky top-0 z-50 border-b border-[#d9cbb9] bg-[#f5efe6]/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-6 md:py-5">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#bienvenidos"
              className="text-3xl font-light tracking-wide md:text-4xl"
            >
              A&amp;B
            </a>

            <div className="hidden md:block">
              <nav className="flex gap-8 text-sm uppercase tracking-[0.22em]">
                <a href="#bienvenidos" className="transition hover:text-[#8b6b4f]">
                  ¡Bienvenidos!
                </a>
                <a href="#blog" className="transition hover:text-[#8b6b4f]">
                  Blog de boda
                </a>
                <a href="#rsvp" className="transition hover:text-[#8b6b4f]">
                  Confirma tu asistencia
                </a>
                <a href="#contacto" className="transition hover:text-[#8b6b4f]">
                  Contáctanos
                </a>
                <a href="#galeria" className="transition hover:text-[#8b6b4f]">
                  Galería
                </a>
              </nav>
            </div>
          </div>

          <div className="mt-4 overflow-x-auto md:hidden">
            <nav className="flex min-w-max gap-6 whitespace-nowrap text-xs uppercase tracking-[0.2em]">
              <a href="#bienvenidos" className="transition hover:text-[#8b6b4f]">
                ¡Bienvenidos!
              </a>
              <a href="#blog" className="transition hover:text-[#8b6b4f]">
                Blog de boda
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
        </div>
      </header>

      <section
        id="bienvenidos"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12 text-center md:px-6"
      >
        <Image
          src="/novios.jpg"
          alt="Foto de los novios"
          fill
          priority
          className="object-cover blur-[2px]"
        />

        <div className="absolute inset-0 bg-[#2a1d15]/50" />

        <div className="relative z-10 w-full max-w-5xl rounded-[2.5rem] border border-white/20 bg-white/10 px-8 py-10 shadow-2xl backdrop-blur-md md:max-w-6xl md:px-16 md:py-14">
          <p className="text-sm uppercase tracking-[0.35em] text-white/90 md:text-base">
            {boda.mensaje}
          </p>

          <h1
            className={`mt-4 text-5xl text-white md:text-7xl ${greatVibes.className}`}
          >
            {boda.nombres}
          </h1>

          <div className="mt-5">
            <Countdown />
          </div>

          <p className="mt-5 text-base text-white md:text-xl">
            {boda.fecha} · {boda.hora}
          </p>

          <p className="mt-2 text-sm text-[#e6d7c3] md:text-base">
            {boda.lugar} — {boda.ciudad}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/rsvp"
              className="rounded-full border border-white px-8 py-3 text-white transition hover:scale-105 hover:bg-white hover:text-black"
            >
              Confirmar asistencia
            </a>

            <a
              href={boda.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-3 text-black transition hover:scale-105"
            >
              Ver ubicación
            </a>
          </div>
        </div>
      </section>

      <FadeIn>
        <section id="blog" className="px-6 py-20">
          <div className="mx-auto max-w-6xl space-y-16">
            <div className="grid items-center gap-10 rounded-[2rem] bg-[#f5efe6] p-8 shadow-xl md:grid-cols-2 md:p-10">
              <div className="overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/alianzas-doradas.jpg"
                  alt="alianzas"
                  width={900}
                  height={700}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#8b6b4f]">
                  Blog de boda
                </p>

                <h2 className="mt-4 text-4xl font-light">Nuestra historia</h2>

                <div className="mt-8 space-y-6 leading-8 text-[#5a4633]">
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

            <div className="grid overflow-hidden rounded-[2rem] shadow-xl md:grid-cols-2">
              <div className="relative min-h-[320px] md:min-h-[560px]">
                <Image
                  src="/flores-boho.jpg"
                  alt="decoración"
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              <div className="bg-[#f5efe6] p-8 md:p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#8b6b4f]">
                  Invitación oficial
                </p>

                <h2 className="mt-4 text-4xl font-light">
                  Queridos familiares y amigos
                </h2>

                <div className="mt-8 space-y-6 leading-8 text-[#5a4633]">
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
                    Como sabéis, organizar este día conlleva muchos detalles,
                    por eso queríamos comentaros con total confianza que el
                    coste del cubierto es aproximadamente de 130€ por persona.
                  </p>

                  <p>
                    Para poder organizar cada detalle con todo el cariño que
                    merece, os agradeceríamos que confirméis vuestra asistencia
                    antes del 20 de mayo.
                  </p>

                  <p>
                    Si deseáis acompañarnos en la celebración, podéis hacerlo
                    mediante ingreso en el siguiente número de cuenta:
                  </p>

                  <p className="text-lg font-medium tracking-wide text-[#3b2b20] md:text-xl">
                    ES54 0073 0100 5905 9909 4910
                  </p>

                  <p>
                    Gracias de corazón por formar parte de este momento tan
                    especial para nosotros.
                  </p>

                  <p>Con muchísimo cariño,</p>

                  <p className="text-lg font-medium text-[#3b2b20] md:text-xl">
                    Brigitte &amp; Alexander 💍
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section id="rsvp" className="px-6 pb-20 text-center">
          <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#3b2b20] p-10 text-white shadow-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d6c2a8]">
              Confirma tu asistencia
            </p>

            <h2 className="mt-4 text-4xl font-light">RSVP</h2>

            <p className="mt-4 text-xl">
              ¿Nos acompañas o te lo pierdes?
            </p>

            <a
              href="/rsvp"
              className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-[#3b2b20] transition hover:scale-105"
            >
              Ir al formulario
            </a>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section id="contacto" className="px-6 pb-20">
          <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#f5efe6] p-8 shadow-xl md:p-10">
            <h2 className="mb-6 text-center text-4xl font-light">
              ¿Alguna duda?
            </h2>

            <ContactForm endpoint={boda.contactoFormUrl} />
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section id="galeria" className="px-6 pb-24 text-center">
          <div className="mx-auto max-w-3xl rounded-[1.5rem] bg-[#f5efe6] p-8 shadow-lg">
            <h2 className="text-3xl font-light">Comparte tus fotos</h2>

            <Image
              src="/qr-galeria.png"
              alt="qr"
              width={150}
              height={150}
              className="mx-auto mt-6"
            />

            <a
              href={boda.galeriaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-[#3b2b20] px-6 py-3 text-white transition hover:scale-105"
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