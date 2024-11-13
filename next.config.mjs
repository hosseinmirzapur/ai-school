/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "api.school.irapardaz.ir/**",
				protocol: "https",
			},
		],
	},
}

export default nextConfig
