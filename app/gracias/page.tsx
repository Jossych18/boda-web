export default function GraciasPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#3b2b20] px-6 text-[#f5efe6]">
      
      <div className="w-full max-w-2xl rounded-[2rem] bg-[#f5efe6] p-10 text-center text-[#3b2b20] shadow-2xl">
        
        <p className="text-sm uppercase tracking-[0.3em] text-[#8b6b4f]">
          Confirmación recibida
        </p>

        <h1 className="mt-4 text-4xl font-light">
          ¡Gracias!
        </h1>

        <p className="mt-6 text-lg text-[#5a4633] leading-7">
          Hemos recibido tu respuesta 💍
          <br />
          Nos hace muchísima ilusión compartir este día contigo.
        </p>

        <a
          href="/"
          className="inline-block mt-10 rounded-full bg-[#3b2b20] px-8 py-3 text-sm uppercase tracking-[0.25em] text-[#f5efe6] transition hover:bg-[#5a4633]"
        >
          Volver a la invitación
        </a>

      </div>

    </main>
  );
}