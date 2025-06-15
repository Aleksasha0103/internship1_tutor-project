import "./globals.css";
import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <section className="flex flex-col flex-grow p-4 justify-center items-center w-[90%] mx-auto">
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
