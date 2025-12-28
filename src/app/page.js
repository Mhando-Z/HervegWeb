import HomePage from "@/components/HomePage";
import NewsLetter from "@/components/NewsLetter";
import PromoStats from "@/components/PromoStats";

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
