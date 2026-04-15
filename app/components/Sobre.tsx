"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Sobre({
  setInvitado,
  setAdultosInvitados,
  setNinosInvitados,
}: any) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const nombreUrl = searchParams.get("r");
    const adultosUrl = searchParams.get("ad");
    const ninosUrl = searchParams.get("ni");

    if (nombreUrl) setInvitado(nombreUrl);

    if (adultosUrl) {
      const n = Number(adultosUrl);
      if (!Number.isNaN(n)) setAdultosInvitados(n);
    }

    if (ninosUrl) {
      const n = Number(ninosUrl);
      if (!Number.isNaN(n)) setNinosInvitados(n);
    }
  }, [searchParams]);

  return null;
}