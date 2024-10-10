import '../styles/globals.css';
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { domain: string };
}): Promise<Metadata | null> {
  const domain = decodeURIComponent(params.domain);

  return {
    title: "Dwellness",
    description: "Empowering your journey to wellness, one step at a time.",
    openGraph: {
      title: "Dwellness",
      description: "Empowering your journey to wellness, one step at a time.",
      images: ["/default-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Dwellness",
      description: "Empowering your journey to wellness, one step at a time.",
      images: ["/default-image.png"],
      creator: "@dwellness",
    },
    icons: ["/logo.svg"],
    metadataBase: new URL(`https://${domain}`),
  };
}

export default function RootLayout({
  params,
  children,
}: {
  params: { domain: string };
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-default">
        <Header />
        <main className="mt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}