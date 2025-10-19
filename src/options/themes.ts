interface Theme {
  name: string;
  author: string;
  link?: string;
  /**
   * Path relative to public/css/themes/
   */
  path: string;
}

const themes: Theme[] = [
  {
    name: "Spotlight",
    author: "BetterLyrics",
    link: "https://twitter.com/boidushya",
    path: "Spotlight.css",
  },
  {
    name: "Pastel",
    author: "BetterLyrics",
    link: "https://twitter.com/boidushya",
    path: "Pastel.css",
  },
  {
    name: "Harmony Glow",
    author: "NAMELESS",
    link: "",
    path: "Harmony Glow.css",
  },
  {
    name: "Even Better Lyrics",
    author: "Noah",
    link: "",
    path: "Even Better Lyrics.css",
  },
  {
    name: "Big Blurry Slow Lyrics for TV",
    author: "zobiron",
    link: "",
    path: "Big Blurry Slow Lyrics for TV.css",
  },
  {
    name: "Even Better Lyrics Plus",
    author: "Noah & BetterLyrics",
    link: "",
    path: "Even Better Lyrics Plus.css",
  },
  {
    name: "Minimal",
    author: "Semicolonhope",
    link: "",
    path: "Minimal.css",
  },
  {
    name: "Luxurious Glass",
    author: "SKMJi",
    link: "",
    path: "Luxurious Glass.css",
  },
];

export default themes;
