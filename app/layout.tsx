// /d/Dev/dwellness-platform/app/layout.tsx

'use client';

import '../styles/globals.css';
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
       
        {children}
        
      </body>
    </html>
  );
}
