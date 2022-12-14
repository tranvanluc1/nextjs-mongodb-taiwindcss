/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_DB_CONNECT:
      "mongodb+srv://ecommerce:luc123123@cluster0.sghsmq2.mongodb.net/?retryWrites=true&w=majority",
    NEXT_PUBLIC_ACTIVATION_TOKEN_SECRET: "PIx2X&Zpa+c7yG$",
    NEXT_PUBLIC_ACCESS_TOKEN_SECRET: "hqGp2EZ2+E3Z%9sg",
    NEXT_PUBLIC_REFRESH_TOKEN_SECRET:
      "Uxjc^2g2eaD+Y&2rJc$tGvq3t$WBht+f^$bnMkEDN*DrYTzLu",
  },
};

module.exports = nextConfig;
