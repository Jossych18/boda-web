"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

type SobreProps = {
  setInvitado: (value: string) => void;
  setAdultosInvitados?: (value: number | null) => void;
  setNinosInvitados?: (value: number | null) => void;
};

export default function Sobre({
  setInvitado,
  setAdultosInvitados,
  setNinosInvitados,
}: SobreProps) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const nombreUrl = searchParams.get("r");
    const adultosUrl = searchParams.get("ad");
    const ninosUrl = searchParams.get("ni");

    setInvitado(nombreUrl || "");

    if (setAdultosInvitados) {
      if (adultosUrl) {
        const adultosNum = Number(adultosUrl);
        setAdultosInvitados(!Number.isNaN(adultosNum) ? adultosNum : null);
      } else {
        setAdultosInvitados(null);
      }
    }

    if (setNinosInvitados) {
      if (ninosUrl) {
        const ninosNum = Number(ninosUrl);
        setNinosInvitados(!Number.isNaN(ninosNum) ? ninosNum : null);
      } else {
        setNinosInvitados(null);
      }
    }
  }, [searchParams, setInvitado, setAdultosInvitados, setNinosInvitados]);

  return null;
}