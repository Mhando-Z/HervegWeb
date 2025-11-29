import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Herveg",
  description:
    "We combat malnutrition by providing nutrient-dense vegetable and poultry bundles to women rural farmers. The protein-rich chickens and home planted nutrient vegetables are crucial for improving dietary diversity and health outcomes in women communities with limited access to nutritious food.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
