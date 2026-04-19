"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Sobre({
  setInvitado,
  setAdultosInvitados,
  setNinosInvitados,
}: {
  setInvitado: (value: string) => void;
  setAdultosInvitados: (value: number | null) => void;
  setNinosInvitados: (value: number | null) => void;
}) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const nombreUrl = searchParams.get("r");
    const adultosUrl = searchParams.get("ad");
    const ninosUrl = searchParams.get("ni");

    // Nombre invitado
    setInvitado(nombreUrl || "");

    // Adultos
    if (adultosUrl) {
      const adultosNum = Number(adultosUrl);
      setAdultosInvitados(!Number.isNaN(adultosNum) ? adultosNum : null);
    } else {
      setAdultosInvitados(null);
    }

    // Niños
    if (ninosUrl) {
      const ninosNum = Number(ninosUrl);
      setNinosInvitados(!Number.isNaN(ninosNum) ? ninosNum : null);
    } else {
      setNinosInvitados(null);
    }
  }, [searchParams, setInvitado, setAdultosInvitados, setNinosInvitados]);

  return null;
}