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
} from "lucide-react";

import { greatVibes, apricot } from "./fonts";
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
};

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [invitado, setInvitado] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("open") === "1") setOpen(true);
  }, []);

  if (!open) {
    return (
      <>
        <Suspense fallback={null}>
          <Sobre setInvitado={setInvitado} />
        </Suspense>

        <div className="flex min-h-screen items-center justify-center bg-[#f5efe6]">
          <div className="text-center">
            <Image
              src="/sobre.png"
              alt="Sobre"
              width={300}
              height={200}
            />

            {invitado && (
              <p className={`mt-2 text-2xl ${apricot.className}`}>
                Para {invitado}
              </p>
            )}

            <button
              onClick={() => setOpen(true)}
              className="mt-6 rounded-full bg-[#3b2b20] px-6 py-3 text-white"
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
        <Sobre setInvitado={setInvitado} />
      </Suspense>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center text-center">
        <Image
          src="/novios.jpg"
          alt=""
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-white">
          <h1 className={`text-5xl ${apricot.className}`}>
            {boda.nombres}
          </h1>

          <p className="mt-4">{boda.fecha}</p>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#f5efe6] p-8">
          <h2 className="text-3xl mb-6">Nuestra historia</h2>

          <p>
            Dicen que las grandes historias empiezan sin planearse…
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Image src="/hijo1.jpeg" alt="" width={500} height={400} />
            <Image src="/hijo2.jpeg" alt="" width={500} height={400} />
          </div>
        </div>
      </section>

      {/* INVITACION */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#f5efe6] p-8">
          <h2 className="text-3xl mb-6">Invitación</h2>

          <p>
            Gracias de corazón por acompañarnos.
          </p>

          <ul className="mt-4">
            <li>130€ adulto</li>
            <li>55€ niño</li>
          </ul>
        </div>
      </section>

      <div className="fixed bottom-5 right-5">
        <MusicToggle />
      </div>
    </main>
  );
}