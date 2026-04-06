import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import fs from "fs";

export default defineConfig(() => {
	const PORT = process.env.APP_ENV == "dev" ? 5911 : 8811;

	if (process.env.APP_ENV == "dev") {
		return {
			plugins: [sveltekit()],
			server: {
				port: PORT
			},
			preview: { port: PORT }
		}
	} else {
		return {
			plugins: [sveltekit()],
			server: {
				port: PORT,
				https: {
					key:  fs.readFileSync(process.env.HOME + "/.certs/toralv.dev/privkey.pem"),
					cert: fs.readFileSync(process.env.HOME + "/.certs/toralv.dev/cert.pem")
				},

			},
			preview: { port: PORT }
		}
	}
});
