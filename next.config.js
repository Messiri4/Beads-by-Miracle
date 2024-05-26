/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    env: {
        API_URL: "http://localhost:3000",
        DB_URI: "mongodb+srv://killer:7C3GfveMLYdZKqeP@cluster0.n1avkhg.mongodb.net/"
    },
};


module.exports = nextConfig;
