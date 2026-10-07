import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Blue Studios | Event Photography",
  description: "Creative, professional photography for weddings, celebrations, portraits, graduations and corporate events.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
