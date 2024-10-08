import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/nav/header";
import Footer from "@/components/nav/footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "LK Education",
  description: "Site d'éducation pour Laetitia & Kclaisse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        /*         className=" min-h-dvh flex flex-col bg-gradient-to-tr from-gray-100 to-sky-200/60"
         */ className=" min-h-dvh flex flex-col md:max-w-5xl mx-auto"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
