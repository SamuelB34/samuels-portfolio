export interface FormInterface {
	full_name: {
		value: string
		error: boolean
	}
	email_address: {
		value: string
		error: boolean
	}
	message: {
		value: string
		error: boolean
	}
}

export const validateForm = (form: FormInterface) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

	const form_copy: FormInterface = {
		full_name: { ...form.full_name },
		email_address: { ...form.email_address },
		message: { ...form.message },
	}

	form_copy['full_name'].error = form_copy['full_name'].value.length === 0
	form_copy['email_address'].error = !emailRegex.test(
		form_copy['email_address'].value,
	)
	form_copy['message'].error = form_copy['message'].value.length === 0

	return {
		value: form_copy,
		error:
			form_copy['full_name'].value.length === 0 ||
			!emailRegex.test(form_copy['email_address'].value) ||
			form_copy['message'].value.length === 0,
	}
}

export const formatForm = () => {
	return {
		full_name: {
			value: '',
			error: false,
		},
		email_address: {
			value: '',
			error: false,
		},
		message: {
			value: '',
			error: false,
		},
	}
}
