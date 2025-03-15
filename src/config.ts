export const SITE = {
  website: "https://frostfoe.netlify.app/", // replace this with your deployed domain
  author: "FrostFoe",
  profile: "https://frostfoe.netlify.app/",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "FrostFoe",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    url: "https://github.com/FrostFoe/astro-blog/edit/main/src/data/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
  dynamicOgImage: true,
} as const;
