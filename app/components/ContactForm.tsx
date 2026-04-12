"use client";

import { useState } from "react";

export default function ContactForm({ endpoint }: { endpoint: string }) {
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
      <div className="mx-auto mt-12 max-w-4xl rounded-[1.5rem] bg-[#f8f3ec] p-10 text-center">
        <h3 className="text-4xl font-light text-[#3b2b20]">
          ¡Gracias{nombre ? `, ${nombre}` : ""}!
        </h3>

        <p className="mt-4 text-lg text-[#5a4633]">
          Hemos recibido tu mensaje 💌
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-12 max-w-4xl space-y-5">
      <input type="hidden" name="_subject" value="Nuevo mensaje boda" />

      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        required
        className="w-full rounded-xl border border-[#d9cbb9] bg-[#f8f3ec] px-5 py-4"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full rounded-xl border border-[#d9cbb9] bg-[#f8f3ec] px-5 py-4"
      />

      <input
        type="text"
        name="asunto"
        placeholder="Asunto"
        required
        className="w-full rounded-xl border border-[#d9cbb9] bg-[#f8f3ec] px-5 py-4"
      />

      <textarea
        name="comentario"
        placeholder="Comentario"
        rows={5}
        required
        className="w-full rounded-xl border border-[#d9cbb9] bg-[#f8f3ec] px-5 py-4"
      />

      <button
        type="submit"
        className="w-full rounded-xl bg-[#3b2b20] py-4 text-white"
      >
        Enviar comentario
      </button>
    </form>
  );
}