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
  other: {
    "facebook-domain-verification": "e4niu7b899rxe5mwyrt8a3i9a08k2d",
  },
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

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2010452882954650');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2010452882954650&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

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