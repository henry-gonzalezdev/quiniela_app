import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/iniciar-sesion',
				permanent: false,
			},
			// {
			// 	source: '/recuperar-cuenta',
			// 	destination: '/',
			// 	permanent: false,
			// },
		]
	},
};

export default nextConfig;
