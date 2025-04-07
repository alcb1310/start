import { PrismaClient } from '@prisma/client'
import { createFileRoute, notFound } from '@tanstack/react-router'
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
	const { id } = Route.useLoaderData()

	return <div>Hello /posts/{id}</div>
}

function NotFound() {
	return <div>Post not found</div>
}

function ErrorC() {
	return <div>Invalid post</div>
}
