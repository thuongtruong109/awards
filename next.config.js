/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['1.bp.blogspot.com', 'moneycourt.co.jp', 'www.udemy.com', 'codelearnstorage.s3.amazonaws.com', 'inkythuatso.com', 'www.thegoandroid.com', 'th.bing.com', 'sm.pcmag.com', 'www.lifewire.com', 'pestleanalysis.com', 'onlinecoursescertifications.com', 'cdn4.iconfinder.com', 'ceowatermandate.org', 'raw.githubusercontent.com', 'user-images.githubusercontent.com', 'womenwill.google', 'vuejsnation.com', 'vuejsforge.com', 'img.stackshare.io', 'assets.holopin.io', 'www.holopin.io', 'lh3.googleusercontent.com', 'iujobhub.com', 'tree-nation.com', 'static.vecteezy.com', 'media.istockphoto.com', 'iuyouth.edu.vn', 'bin.bb-os.com', 'racevietnam.com', 'www.ghupload.com', 'i.ytimg.com', 'wptavern.com', 'image.freepik.com', 'console.dev', 'moocs.openenglishprograms.org', 'portal.gitnation.org', 'reviewedu.net', 'images.viblo.asia', 'algorithm.viblo.asia'],
        
        remotePatterns: [
            {
                protocol: "https",
                hostname: "awards.thuongtruong.me",
            },
            {
                protocol: "https",
                hostname: "**.vercel.app",
            }
        ],
    },
    async rewrites() {
        return [
            {
                source: '/robots.txt',
                destination: '/api/robots'
            }
        ];
    }
}

module.exports = nextConfig