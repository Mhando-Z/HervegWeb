import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Script from "next/script";

export const metadata = {
  title: "Herveg.05",
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
