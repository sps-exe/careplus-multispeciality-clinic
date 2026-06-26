if (typeof globalThis !== 'undefined' && globalThis.localStorage && typeof globalThis.localStorage.getItem !== 'function') {
  try {
    delete globalThis.localStorage;
  } catch (e) {}
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" }
    ]
  }
};

export default nextConfig;
