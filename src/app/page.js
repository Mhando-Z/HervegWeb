import HomePage from "@/components/HomePage";
import NewsLetter from "@/components/NewsLetter";
import PromoStats from "@/components/PromoStats";

export const metadata = {
  title: "HomePage - Herveg.05",
  description:
    "We combat malnutrition by providing nutrient-dense vegetable and poultry bundles to women rural farmers. The protein-rich chickens and home planted nutrient vegetables are crucial for improving dietary diversity and health outcomes in women communities with limited access to nutritious food.",
  Keywords:
    "Herveg, Herveg.05, Herveg05, Herveg 05, Herveg 0.5, Herveg 0.5, nutrition, malnutrition, rural farmers, vegetable bundles, poultry bundles, dietary diversity, health outcomes,HERVEG05,Tanzania Farmers, African Nutrition, Sustainable Agriculture, Community",
  openGraph: {
    title: "Herveg.05",
    description:
      "We combat malnutrition by providing nutrient-dense vegetable and poultry bundles to women rural farmers. The protein-rich chickens and home planted nutrient vegetables are crucial for improving dietary diversity and health outcomes in women communities with limited access to nutritious food.",
    url: "https://hervegweb.vercel.app/",
    siteName: "Herveg.05",
    images: [
      {
        url: "https://wntuibswfzfjjqlwlwzd.supabase.co/storage/v1/object/public/images/HerVeg.png",
        width: 1200,
        height: 630,
        alt: "Herveg.05",
      },
    ],
  },
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
