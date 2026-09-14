import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Script from "next/script";
import WhatsappFloat from "@/components/global/WhatsappFloat";
import LeadPopup from "@/components/global/LeadPopup";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ngcloudnetworks.com"),
  title: "NG Cloud Networks",
  description:
    "Best Cloud, Networking & Cyber Security Training Institute in Hyderabad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body className={`${inter.variable} ${sora.variable}`}>
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CNHP7HRF5J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CNHP7HRF5J');
          `}
        </Script>

        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "NG Cloud Networks",
              url: "https://www.ngcloudnetworks.com",
            }),
          }}
        />
        <LeadPopup />
        <WhatsappFloat />
      </body>
    </html>
  );
}