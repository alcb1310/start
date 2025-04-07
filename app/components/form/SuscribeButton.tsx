import { useFormContext } from '@/hooks/formcontext'
import { Button } from '../ui/button'

export function SubmitButton({ label }: { label: string }) {
	const form = useFormContext()

	return (
		<form.Subscribe selector={(state) => state.isSubmitting}>
			{(isSubmitting) => (
				<Button type='submit' disabled={isSubmitting}>
					{label}
				</Button>
			)}
		</form.Subscribe>
	)
}
