/** @type {import('next').NextConfig} */

const _domains = [
  "**.vercel.app",
  "1.bp.blogspot.com",
  "d3njjcbhbojbot.cloudfront.net",
  "nutmegeducation.com",
  "moneycourt.co.jp",
  "udemy.com",
  "codelearnstorage.s3.amazonaws.com",
  "inkythuatso.com",
  "thegoandroid.com",
  "th.bing.com",
  "sm.pcmag.com",
  "lifewire.com",
  "cdn4.iconfinder.com",
  "ceowatermandate.org",
  "raw.githubusercontent.com",
  "user-images.githubusercontent.com",
  "womenwill.google",
  "vuejsnation.com",
  "vuejsforge.com",
  "assets.vercel.com",
  "assets.holopin.io",
  "holopin.io",
  "iujobhub.com",
  "tree-nation.com",
  "static.vecteezy.com",
  "iuyouth.edu.vn",
  "bin.bb-os.com",
  "racevietnam.com",
  "ghupload.com",
  "i.ytimg.com",
  "wptavern.com",
  "image.freepik.com",
  "console.dev",
  "moocs.openenglishprograms.org",
  "portal.gitnation.org",
  "reviewedu.net",
  "images.viblo.asia",
  "algorithm.viblo.asia",
  "nhavanhoasinhvien.vn",
  "itexamanswers.co.uk",
  "githubunwrapped.com",
  "storage-vnportal.vnpt.vn",
  "haloenglish.edu.vn",
];

const patterns = _domains.map((pattern) => {
  return {
    protocol: "https",
    hostname: pattern,
  };
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: patterns,
  },
  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots",
      },
    ];
  },
};

module.exports = nextConfig;
