import { useStore } from '@tanstack/react-form'
import { useFieldContext } from '@/hooks/formcontext'
import { Label } from '../ui/label'
import { ErrorMessages } from './ErrorMessages'
import { Textarea } from '../ui/textarea'

export function TextAreaField({
	label,
	rows = 3,
}: {
	label: string
	rows?: number
}) {
	const field = useFieldContext<string>()
	const errors = useStore(field.store, (state) => state.meta.errors)

	return (
		<div>
			<Label htmlFor={label} className='mb-2 text-xl font-bold'>
				{label}
			</Label>
			<Textarea
				id={label}
				value={field.state.value}
				onBlur={field.handleBlur}
				rows={rows}
				onChange={(e) => field.handleChange(e.target.value)}
			/>
			{field.state.meta.isTouched && <ErrorMessages errors={errors} />}
		</div>
	)
}
