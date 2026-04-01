import HomePage from "@/components/HomePage";
import NewsLetter from "@/components/NewsLetter";
import PromoStats from "@/components/PromoStats";

export const metadata = {
  title: {
    default: "Ending Malnutrition and Poverty for Tanzania's Farmers",
  },
  description:
    "A transformative initiative empowering rural farmers in Tanzania with nutrient-dense vegetable and poultry bundles. Explore our impact on nutrition, sustainable agriculture, and community empowerment. Join us in our mission to improve dietary diversity and health outcomes for vulnerable communities.",

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
