import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Script from "next/script";

export const metadata = {
  title: {
    default: "Herveg05 - Small plots, big impact",
    template: "%s | Herveg05 -  Small plots, big impact",
  },

  description:
    "Empowering rural women farmers in Tanzania with nutrient-dense vegetables and protein-rich poultry to combat malnutrition. Join us in building food security and improving dietary diversity through sustainable agricultural practices.",

  keywords: [
    "Herveg05",
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

  alternates: {
    canonical: "https://www.herveg.org",
  },

  openGraph: {
    title: "Herveg05 - Small plots, big impact",
    description:
      "Empowering rural women farmers in Tanzania with nutrient-dense vegetables and protein-rich poultry to combat malnutrition. Join us in building food security and improving dietary diversity through sustainable agricultural practices.",
    url: "https://www.herveg.org",
    siteName: "Herveg05",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://wntuibswfzfjjqlwlwzd.supabase.co/storage/v1/object/public/images/HerVeg.png",
        width: 1200,
        height: 630,
        alt: "Herveg05 - Empowering Women Farmers in Tanzania with Sustainable Agriculture",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Herveg05 - Small plots, big impact",
    description:
      "Empowering rural women farmers with nutrient-dense vegetables and protein-rich poultry. Building food security through sustainable agriculture in Tanzania.",
    images: [
      "https://wntuibswfzfjjqlwlwzd.supabase.co/storage/v1/object/public/images/HerVeg.png",
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
      <head>
        <title>Herveg05</title>
        <meta charSet="utf-8" />
        <meta
          property="og:title"
          content="Hervag05 - Small plots, big impact"
        />
        <meta property="og:image" content="../../public/leaflogo.png" />
        <meta property="og:url" content="https://www.herveg.org" />
        <meta property="og:type" content="website" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="keywords"
          content="Herveg05,Herveg,fight malnutrition Tanzania,women farmers Tanzania,sustainable agriculture Tanzania,rural nutrition programs,vegetable farming Tanzania,poultry farming Tanzania,food security Tanzania,dietary diversity Africa,agricultural empowerment,smallholder farmers support,nutrition intervention programs,Dar es Salaam agriculture,Tanzania farming initiatives,women empowerment agriculture,organic vegetables Tanzania,chicken farming Tanzania,kilimo endelevu Tanzania,chakula chenye virutubishi,ufugaji wa kuku,mboga mboga Tanzania,lishe bora Tanzania,wanawake wakulima,"
        />
        <link rel="canonical" href="https://www.herveg.org" />

        {/* Additional SEO meta tags */}
        <meta name="geo.region" content="TZ" />
        <meta name="geo.placename" content="Tanzania" />
        <meta name="language" content="English" />
        <meta httpEquiv="content-language" content="en-US" />

        {/* Google Analytics */}
        <Script
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
        </Script>

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

        {/* Structured Data for Organization */}
        <script
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
        </script>
      </head>
      <body className="flex flex-col min-h-screen justify-between overflow-x-hidden">
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
