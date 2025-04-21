"use client";
import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google';
import { useEffect } from 'react';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: "AspireDrive",
  description: "AspireDrive - The only storage solution you need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const favicon = document.getElementById('favicon') as HTMLLinkElement;
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Function to update favicon based on theme
    const setFavicon = () => {
      if (darkModeMediaQuery.matches) {
        favicon.href = '/assets/dark-theme-icon/favicon.ico'; // Dark mode favicon
      } else {
        favicon.href = '/assets/light-theme-icon/favicon.ico'; // Light mode favicon
      }
    };

    // Set initial favicon based on current theme
    setFavicon();

    // Listen for theme changes
    darkModeMediaQuery.addEventListener('change', setFavicon);

    // Cleanup listener on component unmount
    return () => {
      darkModeMediaQuery.removeEventListener('change', setFavicon);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <link id="favicon" rel="icon" href="/assets/light-theme-icon/favicon.ico" />
        {/* Other head content like meta tags, title, etc. */}
      </head>
      <body
        className={`${montserrat.variable} font-montserrat antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
