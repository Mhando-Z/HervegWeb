import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Script from "next/script";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export const metadata = {
  title: {
    default: "Herveg05 - Small plots, big impact",
    template: "%s | Herveg05 -  Small plots, big impact",
  },

  description:
    "Herveg05 empowers women farmers in Tanzania with nutrient-rich vegetables and poultry to fight malnutrition and strengthen food security.",

  keywords: [
    "Herveg05",
    "small plots big impact",
    "Herveg",
    "fight malnutrition Tanzania",
    "women farmers Tanzania",
    "sustainable agriculture Tanzania",
    "rural nutrition programs",
    "vegetable farming Tanzania",
    "poultry farming Tanzania",
    "food security Tanzania",
    "dietary diversity Africa",
    "agricultural empowerment",
    "smallholder farmers support",
    "nutrition intervention programs",
    "Dar es Salaam agriculture",
    "Tanzania farming initiatives",
    "women empowerment agriculture",
    "organic vegetables Tanzania",
    "chicken farming Tanzania",
    "kilimo endelevu Tanzania",
    "chakula chenye virutubishi",
    "ufugaji wa kuku",
    "mboga mboga Tanzania",
    "lishe bora Tanzania",
    "wanawake wakulima",
  ],

  authors: [{ name: "Mhando Zuberi" }],

  creator: "Herveg05",

  publisher: "Herveg05",

  metadataBase: new URL("https://www.herveg.org"),

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Herveg05 - Small plots, big impact",
    description:
      "Herveg05 empowers women farmers in Tanzania with nutrient-rich vegetables and poultry to fight malnutrition and strengthen food security.",
    url: "https://www.herveg.org",
    siteName: "Herveg05",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://wntuibswfzfjjqlwlwzd.supabase.co/storage/v1/object/public/images/Og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Herveg05 - Empowering Women Farmers in Tanzania with Sustainable Agriculture",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Herveg05 - Small plots, big impact",
    description:
      "Herveg05 empowers women farmers in Tanzania with nutrient-rich vegetables and poultry to fight malnutrition and strengthen food security.",
    images: [
      "https://wntuibswfzfjjqlwlwzd.supabase.co/storage/v1/object/public/images/Og-banner.jpg",
    ],
    creator: "@Herveg05",
  },

  category: "Agriculture & Nutrition",

  classification:
    "Social Enterprise, Agriculture, Nutrition, Community Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen justify-between overflow-x-hidden">
        {/* Google Analytics */}
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q7LL7B97XG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q7LL7B97XG', {
              page_path: window.location.pathname,
            });
          `}
        </Script> */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q7LL7B97XG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-Q7LL7B97XG');
          `}
        </Script>

        {/* Structured Data for Organization JSON Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Herveg05 - Small plots, big impact",
            url: "https://www.herveg.org",
            logo: "https://wntuibswfzfjjqlwlwzd.supabase.co/storage/v1/object/public/images/HerVeg.png",
            description:
              "Combating malnutrition in Tanzania by providing nutrient-dense vegetable and poultry bundles to women rural farmers.",
            areaServed: {
              "@type": "Country",
              name: "Tanzania",
            },
            foundingLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressCountry: "TZ",
              },
            },
          })}
        </Script>
        <div>
          <NavBar />
        </div>
        <main className="grow">{children}</main>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
