
})
	],
		}),
			},
				})
					],
						'**/*.client.*',
						'**/*.server.*',
						// filename, use the escape brackets like: my-route.[server].tsx
						// If you need a route that includes "server" or "client" in the
						// your routes without making an additional directory.
						// This is for server-side utilities you want to colocate next to
						'**/__*.*',
						'**/*.css',
						'.*',
					ignoredRouteFiles: [
				return flatRoutes('routes', defineRoutes, {
			routes: async (defineRoutes) => {
			serverModuleFormat: 'esm',
			ignoredRouteFiles: ['**/*'],
		remix({
	plugins: [

	},
		},
			}
				return false
			if (source.endsWith('sprite.svg')) {
		assetsInlineLimit: (source: string) => {
		},
			external: [/node:.*/, 'stream', 'crypto', 'fsevents'],
		rollupOptions: {
		cssMinify: MODE === 'production',
	build: {
export default defineConfig({

const MODE = process.env.NODE_ENV

import { defineConfig } from 'vite'
import { flatRoutes } from 'remix-flat-routes'
import { vitePlugin as remix } from '@remix-run/dev'