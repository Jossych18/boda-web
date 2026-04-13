"use client";

import { useState } from "react";
import Link from "next/link";

export default function RsvpPage() {
  const [enviado, setEnviado] = useState(false);
  const [nombre, setNombre] = useState("");
  const [adultos, setAdultos] = useState(1);
  const [ninos, setNinos] = useState(0);

  const PRECIO_ADULTO = 130;
  const PRECIO_NINO = 55;

  const total = adultos * PRECIO_ADULTO + ninos * PRECIO_NINO;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mgopgjpk", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setNombre((data.get("nombre") as string) || "");
      setEnviado(true);
      form.reset();
      setAdultos(1);
      setNinos(0);
    }
  }

  if (enviado) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#3b2b20] px-4 py-10 text-[#f5efe6] sm:px-6">
        <div className="w-full max-w-2xl rounded-[2rem] bg-[#f5efe6] p-8 text-center text-[#3b2b20] shadow-2xl sm:p-10">
          <h1 className="text-3xl font-light sm:text-4xl">
            ¡Gracias{nombre ? `, ${nombre}` : ""}!
          </h1>

          <p className="mt-4 text-base text-[#5a4633] sm:text-lg">
            Hemos recibido tu confirmación 💍
          </p>

          <p className="mt-3 text-sm text-[#8b6b4f] sm:text-base">
            Recuerda realizar la aportación correspondiente antes del 1 de junio
            de 2026 para confirmar la reserva.
          </p>

          <a
            href="/"
            className="mt-8 inline-block rounded-full bg-[#3b2b20] px-6 py-3 text-xs uppercase tracking-[0.25em] text-[#f5efe6] transition hover:bg-[#5a4633] sm:px-8 sm:text-sm"
          >
            Volver a la invitación
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#3b2b20] px-4 py-10 text-[#f5efe6] sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-[#f5efe6] p-6 text-[#3b2b20] shadow-lg sm:p-8 md:p-10">
        <Link
          href="/"
          className="inline-flex items-center text-xs uppercase tracking-[0.25em] text-[#8b6b4f] transition hover:opacity-70 sm:text-sm"
        >
          ← Volver a la invitación
        </Link>

        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[#8b6b4f] sm:text-sm">
          Confirmar asistencia
        </p>

        <h1 className="mt-4 text-3xl font-light sm:text-4xl">RSVP</h1>

        <p className="mt-4 text-base text-[#5a4633] sm:text-lg">
          Nos encantará contar contigo en este día tan especial.
        </p>

        <p className="mt-3 text-sm text-[#8b6b4f] sm:text-base">
          Por favor, confirma tu asistencia y realiza la aportación antes del
          01.06.2026.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6 sm:mt-10">
          <input
            type="hidden"
            name="_subject"
            value="Nueva confirmación de boda 💍"
          />

          <input type="hidden" name="total_aportacion" value={total} />

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#8b6b4f] sm:text-sm">
              Nombre completo
            </label>
            <input
              type="text"
              name="nombre"
              required
              className="w-full rounded-2xl border border-[#d8c7b2] px-4 py-3 outline-none"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#8b6b4f] sm:text-sm">
              ¿Asistirás?
            </label>
            <select
              name="asistencia"
              className="w-full rounded-2xl border border-[#d8c7b2] px-4 py-3 outline-none"
            >
              <option>Sí, asistiré</option>
              <option>No podré asistir</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#8b6b4f] sm:text-sm">
              Número de adultos
            </label>
            <input
              type="number"
              name="adultos"
              min="1"
              value={adultos}
              onChange={(e) => setAdultos(Number(e.target.value))}
              className="w-full rounded-2xl border border-[#d8c7b2] px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#8b6b4f] sm:text-sm">
              Número de niños
            </label>
            <input
              type="number"
              name="ninos"
              min="0"
              value={ninos}
              onChange={(e) => setNinos(Number(e.target.value))}
              className="w-full rounded-2xl border border-[#d8c7b2] px-4 py-3 outline-none"
            />
            <p className="mt-2 text-sm text-[#8b6b4f]">
              Menú infantil disponible para niños de 3 a 12 años.
            </p>
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#8b6b4f] sm:text-sm">
              Menú adultos
            </label>
            <select
              name="menu_adultos"
              className="w-full rounded-2xl border border-[#d8c7b2] px-4 py-3 outline-none"
            >
              <option>Mediterráneo</option>
              <option>Vegetariano</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#8b6b4f] sm:text-sm">
              Número de menús infantiles
            </label>
            <input
              type="number"
              name="menus_infantiles"
              min="0"
              value={ninos}
              onChange={(e) => setNinos(Number(e.target.value))}
              className="w-full rounded-2xl border border-[#d8c7b2] px-4 py-3 outline-none"
              placeholder="0"
            />
          </div>

          <div className="rounded-2xl border border-[#d8c7b2] bg-[#f8f3ec] p-6 text-[#3b2b20]">
            <p className="text-xs uppercase tracking-[0.25em] text-[#8b6b4f] sm:text-sm">
              Importe orientativo
            </p>

            <div className="mt-4 space-y-2 text-sm sm:text-base">
              <p>
                Adultos: {adultos} × {PRECIO_ADULTO} €
              </p>
              <p>
                Menores de 12 años: {ninos} × {PRECIO_NINO} €
              </p>
              <p className="pt-2 text-lg font-medium sm:text-xl">
                Total: {total} €
              </p>
            </div>

            <p className="mt-4 text-sm text-[#5a4633]">
              Por favor, realiza la aportación antes del{" "}
              <strong>1 de junio de 2026</strong>.
            </p>

            <p className="mt-2 text-sm text-[#5a4633]">
              La reserva quedará confirmada una vez recibamos tanto la
              confirmación como la aportación.
            </p>

            <p className="mt-3 text-sm">
              IBAN: <strong>ES54 0073 0100 5905 9909 4910</strong>
            </p>
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#8b6b4f] sm:text-sm">
              Mensaje
            </label>
            <textarea
              name="mensaje"
              rows={4}
              className="w-full rounded-2xl border border-[#d8c7b2] px-4 py-3 outline-none"
              placeholder="Escribe aquí tu mensaje"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[#3b2b20] px-8 py-3 text-xs uppercase tracking-[0.25em] text-[#f5efe6] transition hover:bg-[#5a4633] sm:w-auto sm:text-sm"
          >
            Enviar respuesta
          </button>
        </form>
      </div>
    </main>
  );
}