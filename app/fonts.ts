import { Great_Vibes } from "next/font/google";
import localFont from "next/font/local";

export const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

// 👇 AÑADE ESTO
export const apricot = localFont({
  src: "./fonts/apricot.ttf",
});