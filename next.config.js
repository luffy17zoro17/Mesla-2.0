/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:['images.unsplash.com','cdn.pixabay.com',"live.staticflickr.com"],
  }
}

module.exports = nextConfig
