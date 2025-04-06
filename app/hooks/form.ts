import { SubmitButton } from '@/components/form/SuscribeButton'
import { TextAreaField } from '@/components/form/TextArea'
import { TextField } from '@/components/form/TextFeld'
import { createFormHook, createFormHookContexts } from '@tanstack/react-form'

const { fieldContext, formContext } = createFormHookContexts()

export const { useAppForm } = createFormHook({
	fieldContext,
	formContext,
	fieldComponents: {
		TextField,
		TextAreaField,
	},
	formComponents: {
		SubmitButton,
	},
})
