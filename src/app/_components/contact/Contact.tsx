'use client'
import styles from './contact.module.scss'
import { SamInput } from '@/shared/ui-kit/sam-input/SamInput'
import { SamButton } from '@/shared/ui-kit/sam-button/SamButton'
import { useState } from 'react'
import {
	formatForm,
	validateForm,
} from '@/app/_components/contact/formValidations'
import { sendMessage } from '@/service/landing.service'

interface Props {
	id: string
}

export const Contact = ({ id = 'contact' }: Props) => {
	const [buttonLoading, setButtonLoading] = useState(false)
	const [buttonSuccess, setButtonSuccess] = useState(false)
	const [form, setForm] = useState(formatForm())

	const submitForm = async () => {
		setButtonLoading(true)
		const validate = validateForm(form)

		try {
			setForm({ ...validate.value })
			console.log(validate.value)
			if (!validate.error) {
				await sendMessage(validate.value)
				setButtonSuccess(true)
			}
		} catch (e) {
			console.log(e)
		} finally {
			if (!validate.error) {
				setForm(formatForm())
				setTimeout(() => {
					setButtonSuccess(false)
				}, 2000)
			}
			setButtonLoading(false)
		}
	}

	return (
		<div className={styles['contact']} id={id}>
			{/*Left*/}
			<div className={styles['contact__left']}>
				<span className={styles['contact__left--title']}>Contact</span>
				<span className={styles['contact__left--problem']}>
					Got a problem to solve?
				</span>
				<span className={styles['contact__left--help']}>
					Let me help – Reach Out with Your Queries!
				</span>
			</div>

			<div className={styles['contact__right']}>
				<div className={styles['contact__right--input-container']}>
					<label>Full Name</label>
					<SamInput
						name={'full_name'}
						placeholder={'John Doe'}
						value={form['full_name'].value}
						error={form['full_name'].error}
						error_msg={'Full Name must be longer than 2 characters'}
						onChange={(text) => {
							setForm({
								...form,
								full_name: {
									error: false,
									value: text,
								},
							})
						}}
					/>
				</div>
				<div className={styles['contact__right--input-container']}>
					<label>Email</label>
					<SamInput
						name={'email_address'}
						placeholder={'email@example.com'}
						value={form['email_address'].value}
						error={form['email_address'].error}
						error_msg={'Invalid email address'}
						onChange={(text) => {
							setForm({
								...form,
								email_address: {
									error: false,
									value: text,
								},
							})
						}}
					/>
				</div>
				<div className={styles['contact__right--input-container']}>
					<label>Message</label>
					<SamInput
						name={'message'}
						placeholder={'Anything you want to say, can be written here.'}
						value={form['message'].value}
						error={form['message'].error}
						error_msg={'Message must be longer than 2 characters'}
						onChange={(text) => {
							setForm({
								...form,
								message: {
									error: false,
									value: text,
								},
							})
						}}
					/>
				</div>
				<div className={styles['contact__right--bottom']}>
					<a href={'mailto:samuel.barragan34@hotmail.com'}>
						samuel.barragan34@hotmail.com
					</a>
					<div className={styles['contact__right--bottom__btn-container']}>
						<SamButton
							type={'button'}
							loading={buttonLoading}
							success={buttonSuccess}
							onClick={() => submitForm()}
						>
							<>Contact me</>
						</SamButton>
					</div>
				</div>
			</div>
		</div>
	)
}
