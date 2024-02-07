import axios from 'axios'
import { FormInterface } from '@/app/_components/contact/formValidations'

const serverApi = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
})
export const sendMessage = async (form: FormInterface) => {
	const body = {
		full_name: form['full_name'].value,
		email_address: form['email_address'].value,
		message: form['message'].value,
	}
	const response = await serverApi.post(
		`/messages/${process.env.NEXT_PUBLIC_USER_ID}`,
		body,
	)
	return response.data
}
