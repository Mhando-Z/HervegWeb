export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/carer",
          "/donate",
          "/aboutus/whoweare",
          "/aboutus/visionmission",
          "/aboutus/successstories",
          "/aboutus/awards",
          "/contactus",
        ],
      },
    ],
    sitemap: "https://hervegweb.vercel.app/sitemap.xml",
  };
}
