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
	let form_copy = form
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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
