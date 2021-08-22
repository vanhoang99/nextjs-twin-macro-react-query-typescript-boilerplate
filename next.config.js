// @ts-check

/**
 * @type {import('next').NextConfig}
 **/

module.exports = {
	webpack: (config) => {
		// Unset client-side javascript that only works server-side
		config.resolve.fallback = { fs: false, module: false };

		return config;
	},
	eslint: {
		dirs: ['src/**/*'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
	},
};
