import { Great_Vibes, Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";

export const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// 👇 AÑADE ESTO
export const apricot = localFont({
  src: "./fonts/apricot.ttf",
});