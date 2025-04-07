import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$id')({
	component: RouteComponent,
	loader: async ({ params }) => {
		return {
			id: params.id,
		}
	},
})

function RouteComponent() {
	const { id } = Route.useLoaderData()

	return <div>Hello /posts/{id}</div>
}
