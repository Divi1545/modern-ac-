import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Modern Air Conditioning | Sri Lanka's Premier Auto AC Specialists",
  description:
    "Modern Group PVT LTD - Denso Japan Authorized Service Dealer. 44+ years of excellence in automotive air conditioning, spare parts, residential AC, and tours & travels.",
  keywords:
    "auto air conditioning, car AC repair, Denso Sri Lanka, Honeywell, auto AC spare parts, Misty AC, vehicle AC service, Colombo, Kelaniya",
  openGraph: {
    title: "Modern Air Conditioning | Sri Lanka's Premier Auto AC Specialists",
    description:
      "Denso Japan Authorized Service Dealer with 44+ years of excellence in automotive air conditioning solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
