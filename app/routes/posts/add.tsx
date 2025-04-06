import { useAppForm } from '@/hooks/form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/add')({
	component: RouteComponent,
})

function RouteComponent() {
	const form = useAppForm({
		defaultValues: {
			title: '',
			content: '',
		},
		onSubmit: ({ value }) => {
			console.log(value)
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
