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
          "/aboutus/ourimpact",
          "/contactus",
        ],
      },
    ],
    sitemap: "https://hervegweb.vercel.app/sitemap.xml",
  };
}
