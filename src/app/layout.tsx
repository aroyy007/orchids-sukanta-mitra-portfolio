import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { CursorGlow } from "@/components/CursorGlow";
import { SchemaMarkup } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Sukanta Mitra | Visual Communication Designer",
  description: "Portfolio of Sukanta Mitra - Visual Communication Designer based in South Asia. Specializing in graphic design, branding, publications, and event branding.",
  keywords: [
    "Sukanta Mitra",
    "Visual Communication Designer",
    "Graphic Designer",
    "Branding Expert",
    "South Asia Designer",
    "Portfolio",
    "Event Branding",
    "Publications Design",
    "Creative Designer",
    "UI/UX Designer"
  ],
  authors: [{ name: "Sukanta Mitra" }],
  creator: "Sukanta Mitra",
  publisher: "Sukanta Mitra",
  metadataBase: new URL('https://yourdomain.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "Sukanta Mitra | Visual Communication Designer",
    description: "Portfolio of Sukanta Mitra - Visual Communication Designer based in South Asia. Specializing in graphic design, branding, publications, and event branding.",
    siteName: "Sukanta Mitra Portfolio",
    images: [
      {
        url: "/heroimg.png",
        width: 1200,
        height: 630,
        alt: "Sukanta Mitra - Visual Communication Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sukanta Mitra | Visual Communication Designer",
    description: "Portfolio of Sukanta Mitra - Visual Communication Designer based in South Asia. Specializing in graphic design, branding, publications, and event branding.",
    images: ["/heroimg.png"],
    creator: "@sukantamitra",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SchemaMarkup />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <CursorGlow />
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="60a7b160-09b1-41c6-95c0-7650ac8f0cf1"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
