import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	server: {
		https: {
			cert: fs.readFileSync("./.cert/cert.pem"),
			key: fs.readFileSync("./.cert/key.pem")
		}
	// 	host: true,
	// 	strictPort: true,
	// 	port: 5173, // This is the port which we will use in docker
	// 	// Thanks @sergiomoura for the window fix
	// 	// add the next lines if you're using windows and hot reload doesn't work
	// 	// watch: {
	// 	// 	usePolling: true,
	// 	// },
	// 	hmr: {
	// 		clientPort: 80,
	// 	},
	},
});
