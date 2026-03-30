import HomePage from "@/components/HomePage";
import NewsLetter from "@/components/NewsLetter";
import PromoStats from "@/components/PromoStats";

export const metadata = {
  title: {
    default: "Herveg05 - Small plots, big impact",
    template: "%s | Herveg05 -  Small plots, big impact",
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    themeColor: "#ffffff",
  },

  description:
    "Herveg05 empowers women farmers in Tanzania with nutrient-rich vegetables and poultry to fight malnutrition and strengthen food security.",

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
