import axios from 'axios'
import { FormInterface } from '@/app/_components/contact/formValidations'

const serverApi = axios.create({
	baseURL: '/',
})

export const sendMessage = async (form: FormInterface) => {
	const body = {
		name: form['full_name'].value,
		email: form['email_address'].value,
		phone: form['phone'].value,
		message: form['message'].value,
	}
	const response = await serverApi.post('/api/contact', body)
	return response.data
}
