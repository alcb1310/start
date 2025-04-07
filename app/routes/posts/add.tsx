import { useAppForm } from '@/hooks/form'
import { PrismaClient } from '@prisma/client'
import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

const prisma = new PrismaClient()

const Post = z.object({
	title: z.string(),
	content: z.string().optional(),
})

export const Route = createFileRoute('/posts/add')({
	component: RouteComponent,
})

const savePost = createServerFn({ method: 'POST' })
	.validator((post: unknown) => {
		return Post.parse(post)
	})
	.handler(async ({ data }) => {
		return await prisma.post.create({ data })
	})

function RouteComponent() {
	const form = useAppForm({
		defaultValues: {
			title: '',
			content: '',
		},
		onSubmit: async ({ value }) => {
			try {
				await savePost({ data: value })
			} catch (error) {
				console.error(error)
			}
		},
	})

	return (
		<>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					e.stopPropagation()
					form.handleSubmit()
				}}
			>
				<form.AppField name='title'>
					{(field) => <field.TextField label='Title' />}
				</form.AppField>

				<form.AppField name='content'>
					{(field) => <field.TextAreaField label='Content' />}
				</form.AppField>

				<div className='mt-3'>
					<form.AppForm>
						<form.SubmitButton label='Submit' />
					</form.AppForm>
				</div>
			</form>
		</>
	)
}
