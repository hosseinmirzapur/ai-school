module.exports = {
	apps: [
		{
			name: "ai-school", // Name of your app
			script: "npm", // Run npm commands
			args: "run start", // Run the start script
			cwd: "/var/www/school/frontend", // Directory where your project is located
			instances: 1, // Number of instances to run (use "max" for cluster mode)
			autorestart: true, // Automatically restart if the app crashes
			watch: false, // Disable file watching (optional)
			env: {
				NODE_ENV: "production", // Set environment to production
				PORT: 3333, // Set server listen port
			},
			error_file: "./logs/error.log", // Log error messages
			out_file: "./logs/out.log", // Log standard output
		},
	],
}
