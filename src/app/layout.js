import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://hervegweb.vercel.app"),

  title: {
    default: "Herveg05",
    template: "%s | Herveg05",
  },

  description:
    "We combat malnutrition by providing nutrient-dense vegetable and poultry bundles to women rural farmers in Tanzania.",

  keywords: [
    "Herveg05",
    "Herveg",
    "Herveg 05",
    "Nutrition Tanzania",
    "Malnutrition",
    "Women Farmers",
    "Poultry Farming",
    "Vegetable Bundles",
    "Dietary Diversity",
    "Sustainable Agriculture",
    "African Nutrition",
    "Kilimo Tanzania",
    "Mbolea nzuri Tanzania",
    "Ufugaji wa kuku Tanzania",
    "Mboga mboga Tanzania",
  ],

  openGraph: {
    title: "Herveg05",
    description:
      "Empowering women farmers with nutrient-dense vegetables and protein-rich poultry to fight malnutrition.",
    url: "https://hervegweb.vercel.app/",
    siteName: "Herveg05",
    type: "website",
    images: [
      {
        url: "https://wntuibswfzfjjqlwlwzd.supabase.co/storage/v1/object/public/images/HerVeg.png",
        width: 1200,
        height: 630,
        alt: "Herveg05",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Herveg05",
    description:
      "Improving nutrition for women farmers through vegetables and poultry.",
    images: [
      "https://wntuibswfzfjjqlwlwzd.supabase.co/storage/v1/object/public/images/HerVeg.png",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
            gtag('config', 'G-Q7LL7B97XG');
          `}
        </Script>
      </head>
      <body className="flex flex-col min-h-screen justify-between overflow-x-hidden">
        {/* <header /> */}
        <div>
          <NavBar />
        </div>
        {/* main section */}
        <div className="grow">{children}</div>
        {/* footer section */}
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
