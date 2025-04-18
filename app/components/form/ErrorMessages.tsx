export function ErrorMessages({
	errors,
}: {
	errors: Array<string | { message: string }>
}) {
	return (
		<>
			{errors.map((error) => (
				<div
					key={typeof error === 'string' ? error : error.message}
					className='text-destructive mt-1 font-bold'
				>
					{typeof error === 'string' ? error : error.message}
				</div>
			))}
		</>
	)
}
