import { createRouter as createTanstackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export function createRouter() {
	const router = createTanstackRouter({
		scrollRestoration: true,
		defaultPreload: 'intent',
		defaultPreloadDelay: 5,
		routeTree,
	})

	return router
}

declare module '@tanstack/react-router' {
	interface Register {
		router: ReturnType<typeof createRouter>
	}
}
