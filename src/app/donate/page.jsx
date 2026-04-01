import React from "react";
import DonatePage from "./Donate";

export const metadata = {
  title: "Donate",
  description:
    "Support Herveg.05's mission to empower rural farmers and improve nutrition in Tanzania. Your donation helps us provide nutrient-dense vegetable and poultry bundles, promote sustainable agriculture, and enhance dietary diversity for communities in need.",
  keywords:
    "Donate to Herveg, Support Herveg.05, Herveg Donations, Nutrition Support, Rural Farmers Support, Sustainable Agriculture Donations, Dietary Diversity Support, Health Outcomes Donations, Tanzania Agriculture Support, African Nutrition Donations, Community Empowerment Donations",
};

function Page() {
  return (
    <div>
      <DonatePage />
    </div>
  );
}

export default Page;
