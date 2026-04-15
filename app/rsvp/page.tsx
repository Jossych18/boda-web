"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function RsvpPage() {
  const searchParams = useSearchParams();

  const [enviado, setEnviado] = useState(false);
  const [nombre, setNombre] = useState("");
  const [nombreInput, setNombreInput] = useState("");
  const [asistencia, setAsistencia] = useState("Sí, asistiré");
  const [adultos, setAdultos] = useState(1);
  const [ninos, setNinos] = useState(0);

  const PRECIO_ADULTO = 130;
  const PRECIO_NINO = 55;

  const asistira = asistencia === "Sí, asistiré";
  const total = asistira ? adultos * PRECIO_ADULTO + ninos * PRECIO_NINO : 0;

  useEffect(() => {
    const nombreUrl = searchParams.get("r");
    const adultosUrl = searchParams.get("ad");
    const ninosUrl = searchParams.get("ni");

    if (nombreUrl) {
      setNombreInput(nombreUrl);
    }

    if (adultosUrl) {
      const adultosNum = Number(adultosUrl);
      if (!Number.isNaN(adultosNum) && adultosNum > 0) {
        setAdultos(adultosNum);
      }
    }

    if (ninosUrl) {
      const ninosNum = Number(ninosUrl);
      if (!Number.isNaN(ninosNum) && ninosNum >= 0) {
        setNinos(ninosNum);
      }
    }
  }, [searchParams]);

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
      setAsistencia("Sí, asistiré");
      setAdultos(1);
      setNinos(0);
      setNombreInput("");
    }
  }

  if (enviado) {
    return (
      <main className="min-h-screen bg-[#3b2b20] px-4 py-10 text-[#f5efe6] sm:px-6 sm:py-16">
        <div className="mx-auto flex min-h-[80vh] max-w-3xl items-center justify-center">
          <div className="w-full rounded-[2rem] border border-[#e5d8ca] bg-[#f5efe6] p-8 text-center text-[#3b2b20] shadow-2xl sm:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8b6b4f]">
              Confirmación recibida
            </p>

            <h1 className="mt-4 text-3xl font-light sm:text-4xl">
              ¡Gracias{nombre ? `, ${nombre}` : ""}!
            </h1>

            <p className="mt-4 text-base leading-7 text-[#5a4633] sm:text-lg">
              Hemos recibido tu respuesta 💍
            </p>

            <p className="mt-3 text-sm leading-7 text-[#8b6b4f] sm:text-base">
              {asistira
                ? "Recuerda realizar la aportación correspondiente antes del 1 de junio de 2026 para confirmar la reserva."
                : "Gracias por avisarnos con antelación."}
            </p>

            <Link
              href="/"
              className="mt-8 inline-block rounded-full bg-[#3b2b20] px-8 py-3 text-xs uppercase tracking-[0.25em] text-[#f5efe6] transition hover:bg-[#5a4633] sm:text-sm"
            >
              Volver a la invitación
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#3b2b20] px-4 py-10 text-[#f5efe6] sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[2rem] border border-[#e5d8ca] bg-[#f5efe6] p-6 text-[#3b2b20] shadow-2xl sm:p-8 md:p-10">
          <Link
            href="/"
            className="inline-flex items-center text-xs uppercase tracking-[0.25em] text-[#8b6b4f] transition hover:opacity-70 sm:text-sm"
          >
            ← Volver a la invitación
          </Link>

          <div className="mt-6 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8b6b4f] sm:text-sm">
              Confirmar asistencia
            </p>

            <h1 className="mt-4 text-3xl font-light sm:text-4xl md:text-5xl">
              RSVP
            </h1>

            <p className="mt-4 text-base leading-7 text-[#5a4633] sm:text-lg">
              Nos encantará contar contigo en este día tan especial.
            </p>

            <p className="mt-3 text-sm leading-7 text-[#8b6b4f] sm:text-base">
              Por favor, confirma tu asistencia y realiza la aportación antes del{" "}
              <strong>01.06.2026</strong>.
            </p>
          </div>

          {(nombreInput || adultos || ninos >= 0) && (
            <div className="mt-6 rounded-[1.5rem] border border-[#d8c7b2] bg-[#f8f3ec] p-5 text-sm leading-7 text-[#5a4633]">
              <p className="text-xs uppercase tracking-[0.25em] text-[#8b6b4f] sm:text-sm">
                Invitación personalizada
              </p>

              {nombreInput && (
                <p className="mt-3">
                  Invitación preparada para: <strong>{nombreInput}</strong>
                </p>
              )}

              <p className="mt-2">
                Plazas previstas: <strong>{adultos}</strong> adulto(s) y{" "}
                <strong>{ninos}</strong> niño(s).
              </p>

              <p className="mt-2 text-[#8b6b4f]">
                Si necesitas consultar cualquier cambio o acompañante adicional,
                por favor coméntalo previamente con nosotros.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-6 sm:mt-10">
            <input
              type="hidden"
              name="_subject"
              value="Nueva confirmación de boda 💍"
            />
            <input type="hidden" name="total_aportacion" value={total} />

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#8b6b4f] sm:text-sm">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="nombre"
                  required
                  value={nombreInput}
                  onChange={(e) => setNombreInput(e.target.value)}
                  className="w-full rounded-2xl border border-[#d8c7b2] bg-[#fcfaf7] px-4 py-3.5 text-[#3b2b20] outline-none transition focus:border-[#8b6b4f]"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#8b6b4f] sm:text-sm">
                  ¿Asistirás?
                </label>
                <select
                  name="asistencia"
                  value={asistencia}
                  onChange={(e) => setAsistencia(e.target.value)}
                  className="w-full rounded-2xl border border-[#d8c7b2] bg-[#fcfaf7] px-4 py-3.5 text-[#3b2b20] outline-none transition focus:border-[#8b6b4f]"
                >
                  <option>Sí, asistiré</option>
                  <option>No podré asistir</option>
                </select>
              </div>
            </div>

            {asistira && (
              <>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#8b6b4f] sm:text-sm">
                      Número de adultos
                    </label>
                    <input
                      type="number"
                      name="adultos"
                      min="1"
                      value={adultos}
                      onChange={(e) =>
                        setAdultos(Math.max(1, Number(e.target.value) || 1))
                      }
                      className="w-full rounded-2xl border border-[#d8c7b2] bg-[#fcfaf7] px-4 py-3.5 text-[#3b2b20] outline-none transition focus:border-[#8b6b4f]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#8b6b4f] sm:text-sm">
                      Niños menores de 12 años
                    </label>
                    <input
                      type="number"
                      name="ninos"
                      min="0"
                      value={ninos}
                      onChange={(e) =>
                        setNinos(Math.max(0, Number(e.target.value) || 0))
                      }
                      className="w-full rounded-2xl border border-[#d8c7b2] bg-[#fcfaf7] px-4 py-3.5 text-[#3b2b20] outline-none transition focus:border-[#8b6b4f]"
                    />
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-[#d8c7b2] bg-[#f8f3ec] p-6 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#8b6b4f] sm:text-sm">
                    Importe orientativo
                  </p>

                  <div className="mt-4 grid gap-3 text-sm text-[#5a4633] sm:text-base">
                    <p>
                      Adultos: {adultos} × {PRECIO_ADULTO} €
                    </p>
                    <p>
                      Menores de 12 años: {ninos} × {PRECIO_NINO} €
                    </p>
                    <p className="pt-2 text-lg font-medium text-[#3b2b20] sm:text-xl">
                      Total: {total} €
                    </p>
                  </div>

                  <div className="mt-5 space-y-2 text-sm leading-7 text-[#5a4633]">
                    <p>
                      Por favor, realiza la aportación antes del{" "}
                      <strong>1 de junio de 2026</strong>.
                    </p>
                    <p>
                      La reserva quedará confirmada una vez recibamos tanto la
                      confirmación como la aportación.
                    </p>
                    <p>
                      IBAN: <strong>ES54 0073 0100 5905 9909 4910</strong>
                    </p>
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#8b6b4f] sm:text-sm">
                Mensaje
              </label>
              <textarea
                name="mensaje"
                rows={4}
                className="w-full rounded-2xl border border-[#d8c7b2] bg-[#fcfaf7] px-4 py-3.5 text-[#3b2b20] outline-none transition focus:border-[#8b6b4f]"
                placeholder="Escribe aquí tu mensaje"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="rounded-full bg-[#3b2b20] px-8 py-3 text-xs uppercase tracking-[0.25em] text-[#f5efe6] transition hover:bg-[#5a4633] sm:text-sm"
              >
                Enviar respuesta
              </button>

              <p className="text-sm text-[#8b6b4f]">
                {asistira
                  ? "Recuerda: la asistencia queda confirmada con el pago."
                  : "Tu respuesta se enviará al momento."}
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}