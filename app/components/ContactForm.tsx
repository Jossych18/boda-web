"use client";

import { useState } from "react";

type ContactFormProps = {
  endpoint: string;
};

export default function ContactForm({ endpoint }: ContactFormProps) {
  const [enviado, setEnviado] = useState(false);
  const [nombre, setNombre] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch(endpoint, {
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
    }
  }

  if (enviado) {
    return (
      <div className="mx-auto mt-10 max-w-4xl rounded-[2rem] border border-[#d8c7b2] bg-[#f8f3ec] p-8 text-center shadow-lg sm:mt-12 sm:p-10">
        <h3 className="text-3xl font-light text-[#3b2b20] sm:text-4xl">
          ¡Gracias{nombre ? `, ${nombre}` : ""}!
        </h3>

        <p className="mt-4 text-base text-[#5a4633] sm:text-lg">
          Hemos recibido tu mensaje 💌
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-4xl space-y-6 sm:mt-12">
      <input type="hidden" name="_subject" value="Nuevo mensaje boda" />

      <div>
        <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#8b6b4f] sm:text-sm">
          Nombre
        </label>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          required
          className="w-full rounded-2xl border border-[#d8c7b2] bg-[#f8f3ec] px-4 py-3.5 text-[#3b2b20] outline-none transition focus:border-[#8b6b4f]"
        />
      </div>

      <div>
        <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#8b6b4f] sm:text-sm">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Tu email"
          required
          className="w-full rounded-2xl border border-[#d8c7b2] bg-[#f8f3ec] px-4 py-3.5 text-[#3b2b20] outline-none transition focus:border-[#8b6b4f]"
        />
      </div>

      <div>
        <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#8b6b4f] sm:text-sm">
          Asunto
        </label>
        <input
          type="text"
          name="asunto"
          placeholder="Escribe el asunto"
          required
          className="w-full rounded-2xl border border-[#d8c7b2] bg-[#f8f3ec] px-4 py-3.5 text-[#3b2b20] outline-none transition focus:border-[#8b6b4f]"
        />
      </div>

      <div>
        <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#8b6b4f] sm:text-sm">
          Mensaje
        </label>
        <textarea
          name="comentario"
          placeholder="Escribe aquí tu mensaje"
          rows={5}
          required
          className="w-full rounded-2xl border border-[#d8c7b2] bg-[#f8f3ec] px-4 py-3.5 text-[#3b2b20] outline-none transition focus:border-[#8b6b4f]"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-[#3b2b20] px-8 py-3 text-xs uppercase tracking-[0.25em] text-white transition hover:bg-[#5a4633] sm:w-auto sm:text-sm"
      >
        Enviar mensaje
      </button>
    </form>
  );
}