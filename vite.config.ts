import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	// base: './',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	// server: {
	// 	host: true,
	// 	watch: {
	// 		usePolling: true
	// 	},
	// 	// strictPort: true,
	// 	port: 5173, // This is the port which we will use in docker
	// },
});
