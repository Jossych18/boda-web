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

  if (!open) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5efe6] px-6 text-center text-[#3b2b20]">
        <div className="w-full max-w-md rounded-[2rem] border border-[#d9cbb9] bg-white p-10 shadow-2xl">
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
            className="mt-8 rounded-full bg-[#3b2b20] px-8 py-3 text-white"
          >
            Abrir invitación
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#f5efe6] text-[#3b2b20]">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center text-center">
        <Image
          src="/novios.jpg"
          alt="novios"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-white">
          <h1 className={`text-6xl ${greatVibes.className}`}>
            {boda.nombres}
          </h1>

          <p className="mt-4 text-xl">
            {boda.fecha} · {boda.hora}
          </p>

          <p className="mt-2">
            {boda.lugar} — {boda.ciudad}
          </p>

          <div className="mt-6">
            <Countdown />
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
            <a
              href="/rsvp"
              className="rounded-full border px-6 py-3"
            >
              Confirmar asistencia
            </a>

            <a
              href={boda.mapsUrl}
              target="_blank"
              className="rounded-full bg-white px-6 py-3 text-black"
            >
              Ver ubicación
            </a>
          </div>
        </div>
      </section>

      {/* BLOG + INVITACIÓN */}
      <FadeIn>
        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl space-y-16">

            {/* HISTORIA */}
            <div className="grid md:grid-cols-2 gap-10 bg-white p-10 rounded-[2rem] shadow">
              <Image
                src="/alianzas-doradas.jpg"
                alt="alianzas"
                width={800}
                height={600}
                className="rounded-xl"
              />

              <div>
                <h2 className="text-4xl font-light">Nuestra historia</h2>

                <p className="mt-6">
                  Este es el blog del que será el día más importante de nuestras vidas.
                </p>
              </div>
            </div>

            {/* INVITACIÓN OFICIAL */}
            <div className="grid md:grid-cols-2 overflow-hidden rounded-[2rem] shadow-xl">
              <div className="relative min-h-[400px]">
                <Image
                  src="/flores-boho.jpg"
                  alt="decoración"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-[#f5efe6] p-10">
                <h2 className="text-4xl font-light">
                  Invitación oficial
                </h2>

                <div className="mt-8 space-y-6 text-[#5a4633] leading-8">

                  <p>
                    Nos hace muchísima ilusión invitaros a formar parte de uno de
                    los días más importantes de nuestras vidas.
                  </p>

                  <p>
                    Para poder organizar cada detalle con todo el cariño que
                    merece, os pedimos que confirméis vuestra asistencia y
                    realicéis la aportación correspondiente
                    <strong> antes del 1 de junio de 2026</strong>.
                  </p>

                  <p>La aportación es de:</p>

                  <ul className="list-disc pl-5">
                    <li><strong>130 € por adulto</strong></li>
                    <li><strong>55 € menores de 12 años</strong></li>
                  </ul>

                  <p>
                    Si deseáis traer acompañantes, por favor consultadlo
                    previamente.
                  </p>

                  <p>
                    La reserva quedará confirmada una vez recibamos la aportación.
                  </p>

                  <p>
                    Número de cuenta:
                  </p>

                  <p className="font-semibold">
                    ES54 0073 0100 5905 9909 4910
                  </p>

                  <p>
                    Con cariño,
                  </p>

                  <p className="font-semibold">
                    Brigitte & Alexander 💍
                  </p>

                </div>
              </div>
            </div>

          </div>
        </section>
      </FadeIn>

      {/* RSVP */}
      <FadeIn>
        <section id="rsvp" className="px-6 pb-20 text-center">
          <h2 className="text-4xl font-light">Confirma tu asistencia</h2>

          <a
            href="/rsvp"
            className="mt-6 inline-block bg-[#3b2b20] text-white px-6 py-3 rounded-full"
          >
            Ir al formulario
          </a>
        </section>
      </FadeIn>

      {/* CONTACTO */}
      <FadeIn>
        <section className="px-6 pb-20">
          <ContactForm endpoint={boda.contactoFormUrl} />
        </section>
      </FadeIn>

      {/* GALERÍA */}
      <FadeIn>
        <section className="px-6 pb-20 text-center">
          <h2 className="text-3xl font-light">Galería</h2>

          <a
            href={boda.galeriaUrl}
            target="_blank"
            className="mt-6 inline-block bg-[#3b2b20] text-white px-6 py-3 rounded-full"
          >
            Ver galería
          </a>
        </section>
      </FadeIn>

      <MusicToggle />
    </main>
  );
}