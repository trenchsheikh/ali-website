import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shariff Sufi Foundation | Empowering Youth in Camden",
  description: "Shariff Sufi Foundation is a UK registered CIO supporting young people up to 25. Advancing education, social inclusion, and wellbeing in Camden.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
