import { SubmitButton } from '@/components/form/SuscribeButton'
import { TextAreaField } from '@/components/form/TextArea'
import { TextField } from '@/components/form/TextField'
import { createFormHook } from '@tanstack/react-form'
import { fieldContext, formContext } from './formcontext'

export const { useAppForm } = createFormHook({
	fieldComponents: {
		TextField,
		TextAreaField,
	},
	formComponents: {
		SubmitButton,
	},
	fieldContext,
	formContext,
})
