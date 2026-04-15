import { Suspense } from "react";
import RsvpClient from "./RsvpClient";

export default function RsvpPage() {
  return (
    <Suspense fallback={null}>
      <RsvpClient />
    </Suspense>
  );
}