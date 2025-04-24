// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google';
import DynamicFavicon from "./DynamicFavicon";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "AspireDrive",
  description: "AspireDrive - The only storage solution you need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link id="favicon" rel="icon" href="/assets/light-theme-icon/favicon.ico" />
      </head>
      <body className={`${montserrat.variable} font-montserrat antialiased`}>
        <DynamicFavicon />
        {children} {/* This will be app/(root)/layout.tsx or page.tsx */}
      </body>
    </html>
  );
}