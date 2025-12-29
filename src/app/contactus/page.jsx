import React from "react";
import ContactUs from "@/components/ContactUs";

export const metadata = {
  title: "Contact Us - Herveg.05",
  description:
    "Get in touch with Herveg.05 to learn more about our mission to combat malnutrition through nutrient-dense vegetable and poultry bundles for women rural farmers. We're here to answer your questions and provide support.",
  Keywords:
    "Contact Herveg, Herveg.05 Contact, Nutrition Support, Rural Farmers Contact, Vegetable Bundles Inquiry, Poultry Bundles Inquiry, Dietary Diversity Support, Health Outcomes Contact,HERVEG05 Contact,Tanzania Farmers Contact, African Nutrition Support, Sustainable Agriculture Contact, Community Support",
};

function page() {
  return (
    <div className="flex flex-col container mx-auto mt-10 md:mt-20">
      <ContactUs />
    </div>
  );
}

export default page;
