import HomePage from "@/components/HomePage";
import NewsLetter from "@/components/NewsLetter";
import PromoStats from "@/components/PromoStats";

export const metadata = {
  metadataBase: new URL("https://hervegweb.vercel.app"),

  title: {
    default: "Herveg05 - Small plots, Big Impact",
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

  category: "Agriculture & Nutrition",

  classification:
    "Social Enterprise, Agriculture, Nutrition, Community Development",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* HomePgae */}
      <HomePage />
      {/* promo section */}
      <PromoStats />
      {/* News letter section */}
      <NewsLetter />
    </div>
  );
}
