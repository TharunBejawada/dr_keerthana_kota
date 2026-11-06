/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static export -> deploys to AWS Amplify Hosting as plain static files.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};
export default nextConfig;
