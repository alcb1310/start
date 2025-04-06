import { useStore } from '@tanstack/react-form'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { useFieldContext } from '@/hooks/formcontext'
import { ErrorMessages } from './ErrorMessages'

export function TextField({
	label,
	placeholder,
}: {
	label: string
	placeholder?: string
}) {
	const field = useFieldContext<string>()
	const errors = useStore(field.store, (state) => state.meta.errors)

	return (
		<div>
			<Label htmlFor={label} className='mb-2 text-xl font-bold'>
				{label}
			</Label>
			<Input
				value={field.state.value}
				placeholder={placeholder}
				onBlur={field.handleBlur}
				onChange={(e) => field.handleChange(e.target.value)}
			/>
			{field.state.meta.isTouched && <ErrorMessages errors={errors} />}
		</div>
	)
}
