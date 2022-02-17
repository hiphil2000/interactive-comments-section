/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        // rewrite requests under "/api" to api server
        return [
            {
                source: "/api/:path",
                destination: "http://localhost:5000/:path"
            }
        ]
    }
}

module.exports = nextConfig;
