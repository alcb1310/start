import { Button } from '@/components/ui/button'
import { PrismaClient } from '@prisma/client'
import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

const prisma = new PrismaClient()

export const Route = createFileRoute('/posts/')({
	component: RouteComponent,
	loader: async () => {
		const posts = await getPosts()

		return {
			posts,
		}
	},
})

function RouteComponent() {
	const { posts } = Route.useLoaderData()

	return (
		<>
			<Button>New Post</Button>
			{!posts.length && <p>No posts yet</p>}

			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</>
	)
}

const getPosts = createServerFn().handler(async () => {
	return prisma.post.findMany()
})
