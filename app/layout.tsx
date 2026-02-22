import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shariff Sufi Foundation | Empowering Youth in Camden",
  description: "Shariff Sufi Foundation is a UK registered CIO supporting young people up to 25. Advancing education, social inclusion, and wellbeing in Camden.",
  openGraph: {
    title: "Shariff Sufi Foundation | Empowering Youth in Camden",
    description: "Supporting young people up to the age of 25 in and around the London Borough of Camden through education and inclusive activities.",
    url: "https://shariffsufifoundation.org",
    siteName: "Shariff Sufi Foundation",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Shariff Sufi Foundation Hero",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shariff Sufi Foundation | Empowering Youth in Camden",
    description: "Supporting young people up to the age of 25 in and around the London Borough of Camden.",
    images: ["/hero.png"],
  },
  keywords: ["Charity", "Camden", "Youth Support", "Education", "Social Inclusion", "Shariff Sufi Foundation"],
  authors: [{ name: "Shariff Sufi Foundation" }],
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
  },
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
