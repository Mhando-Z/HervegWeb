// import "./globals.css";
// import Footer from "@/components/Footer";
// import NavBar from "@/components/NavBar";
// import Script from "next/script";

// export const metadata = {
//   metadataBase: new URL("https://hervegweb.vercel.app"),

//   title: {
//     default: "Herveg05",
//     template: "%s | Herveg05",
//   },

//   description:
//     "We combat malnutrition by providing nutrient-dense vegetable and poultry bundles to women rural farmers in Tanzania.",

//   keywords: [
//     "Herveg05",
//     "Herveg",
//     "Herveg 05",
//     "Nutrition Tanzania",
//     "Malnutrition",
//     "Women Farmers",
//     "Poultry Farming",
//     "Vegetable Bundles",
//     "Dietary Diversity",
//     "Sustainable Agriculture",
//     "African Nutrition",
//     "Kilimo Tanzania",
//     "Mbolea nzuri Tanzania",
//     "Ufugaji wa kuku Tanzania",
//     "Mboga mboga Tanzania",
//   ],

//   openGraph: {
//     title: "Herveg05",
//     description:
//       "Empowering women farmers with nutrient-dense vegetables and protein-rich poultry to fight malnutrition.",
//     url: "https://hervegweb.vercel.app/",
//     siteName: "Herveg05",
//     type: "website",
//     images: [
//       {
//         url: "https://wntuibswfzfjjqlwlwzd.supabase.co/storage/v1/object/public/images/HerVeg.png",
//         width: 1200,
//         height: 630,
//         alt: "Herveg05",
//       },
//     ],
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Herveg05",
//     description:
//       "Improving nutrition for women farmers through vegetables and poultry.",
//     images: [
//       "https://wntuibswfzfjjqlwlwzd.supabase.co/storage/v1/object/public/images/HerVeg.png",
//     ],
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1, viewport-fit=cover"
//         />

//         {/* Google Analytics */}
//         <Script
//           src="https://www.googletagmanager.com/gtag/js?id=G-Q7LL7B97XG"
//           strategy="afterInteractive"
//         />
//         <Script id="google-analytics" strategy="afterInteractive">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-Q7LL7B97XG');
//           `}
//         </Script>
//       </head>
//       <body className="flex flex-col min-h-screen justify-between overflow-x-hidden">
//         {/* <header /> */}
//         <div>
//           <NavBar />
//         </div>
//         {/* main section */}
//         <div className="grow">{children}</div>
//         {/* footer section */}
//         <div>
//           <Footer />
//         </div>
//       </body>
//     </html>
//   );
// }

import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://hervegweb.vercel.app"),

  title: {
    default:
      "Herveg05 - Fighting Malnutrition in Tanzania Through Sustainable Agriculture",
    template: "%s | Herveg05 - Empowering Women Farmers Tanzania",
  },

  description:
    "Herveg05 combats malnutrition in Tanzania by providing nutrient-dense vegetable bundles and protein-rich poultry to rural women farmers. Empowering communities through sustainable agriculture, dietary diversity, and food security solutions.",

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

  authors: [{ name: "Herveg05" }],

  creator: "Herveg05",

  publisher: "Herveg05",

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
    canonical: "https://hervegweb.vercel.app",
  },

  openGraph: {
    title:
      "Herveg05 - Fighting Malnutrition in Tanzania Through Sustainable Agriculture",
    description:
      "Empowering rural women farmers in Tanzania with nutrient-dense vegetables and protein-rich poultry to combat malnutrition. Join us in building food security and improving dietary diversity through sustainable agricultural practices.",
    url: "https://hervegweb.vercel.app",
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
    title: "Herveg05 - Fighting Malnutrition in Tanzania",
    description:
      "Empowering rural women farmers with nutrient-dense vegetables and protein-rich poultry. Building food security through sustainable agriculture in Tanzania.",
    images: [
      "https://wntuibswfzfjjqlwlwzd.supabase.co/storage/v1/object/public/images/HerVeg.png",
    ],
    creator: "@Herveg05",
  },

  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
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
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#10b981" />
        <link rel="canonical" href="https://hervegweb.vercel.app" />

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

        {/* Structured Data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Herveg05",
            url: "https://hervegweb.vercel.app",
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
