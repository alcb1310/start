import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { PrismaClient } from '@prisma/client'
import { createFileRoute, notFound, useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

const prisma = new PrismaClient()
const PostId = z.number()

export const Route = createFileRoute('/posts/$id')({
	params: {
		parse: (rawParams) => {
			return {
				id: +rawParams.id,
			}
		},
	},
	component: RouteComponent,
	loader: async ({ params }) => {
		const post = await getOnePost({ data: params.id })
		if (!post) throw notFound()

		return {
			id: params.id,
			post,
		}
	},
	notFoundComponent: NotFound,
	errorComponent: ErrorC,
})

const getOnePost = createServerFn()
	.validator((data: unknown) => {
		return PostId.parse(data)
	})
	.handler(async ({ data }) => {
		return await prisma.post.findUnique({
			where: {
				id: data,
			},
		})
	})

function RouteComponent() {
	const { post } = Route.useLoaderData()
	const router = useRouter()

	return (
		<div className='w-full flex items-center justify-center'>
			<Card className='w-1/2'>
				<CardHeader className='text-center'>
					<CardTitle>{post.title}</CardTitle>
				</CardHeader>

				<CardContent>
					<p>{post.content}</p>
				</CardContent>

				<CardFooter>
					<Button
						onClick={() => router.navigate({ to: '/posts' })}
						className='w-full'
					>
						Go Back
					</Button>
				</CardFooter>
			</Card>
		</div>
	)
}

function NotFound() {
	return <div>Post not found</div>
}

function ErrorC() {
	return <div>Invalid post</div>
}
