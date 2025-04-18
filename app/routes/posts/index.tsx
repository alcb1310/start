import { Button } from '@/components/ui/button'
import { PrismaClient } from '@prisma/client'
import { Link, createFileRoute, useRouter } from '@tanstack/react-router'
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
	const router = useRouter()
	const { posts } = Route.useLoaderData()

	return (
		<>
			<Button
				onClick={() =>
					router.navigate({
						to: '/posts/add',
					})
				}
			>
				Add Post
			</Button>
			{!posts.length && <p>No posts yet</p>}

			<ul className='mt-3'>
				{posts.map((post) => (
					<li key={post.id}>
						<Link to='/posts/$id' params={{ id: post.id }}>
							{post.title}
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}

const getPosts = createServerFn().handler(async () => {
	return prisma.post.findMany()
})
