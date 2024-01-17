'use client'
import stylesInput from './sam-input.module.scss'
import { ChangeEvent, useEffect, useState } from 'react'
interface Props {
	name: string
	id?: string
	type?: 'text' | 'number' | 'date' | 'email'
	input_mode?:
		| 'text'
		| 'email'
		| 'search'
		| 'tel'
		| 'url'
		| 'none'
		| 'numeric'
		| 'decimal'
		| undefined
	text_align?: 'left' | 'center'
	placeholder?: string
	maxLength?: number
	min?: number
	max?: number
	value?: string
	disabled?: boolean
	error?: boolean
	error_msg?: string
	pattern?: string
	onChange?: (text: string) => void
	onBlur?: () => void
	onFocus?: () => void
	selectType?: { value: string; label: string }[]
	defaultValueType?: string
	onChangeType?: (text: string) => void
}

export const SamInput = ({
	name,
	id,
	type = 'text',
	input_mode = 'text',
	text_align = 'left',
	placeholder,
	value,
	disabled = false,
	error = false,
	error_msg,
	onChange,
	onBlur,
	onFocus,
	pattern,
	maxLength = 100,
	min,
	max,
}: Props) => {
	// Class
	const [inputClass, setInputClass] = useState('input')
	const [errorMsg, setErrorMsg] = useState(<></>)
	// Styles
	const styles = {
		textAlign: text_align,
	}

	useEffect(() => {
		let stylesString = stylesInput['input']
		if (input_mode === 'tel') stylesString += ' ' + stylesInput['tel']
		if (disabled) stylesString += ' ' + stylesInput['disabled']
		if (error) {
			stylesString += ' ' + stylesInput['error']
			setErrorMsg(
				<span className={stylesInput['input__error-msg']}> {error_msg} </span>,
			)
		} else {
			setErrorMsg(<></>)
		}
		setInputClass(stylesString)
	}, [error, input_mode, disabled, error_msg])

	// Functions
	const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		const { value } = target
		if (onChange) onChange(value)
	}

	return (
		<div className={stylesInput['body']}>
			<div className={stylesInput['body__container']}>
				{input_mode === 'tel' && (
					<div className={stylesInput['body__container__tel']}>
						<span>+1</span>
					</div>
				)}
				<input
					id={id}
					type={type}
					inputMode={input_mode}
					name={name}
					readOnly={disabled}
					placeholder={placeholder}
					onChange={onInputChange}
					onBlur={onBlur}
					onFocus={onFocus}
					className={inputClass}
					style={styles}
					value={value}
					pattern={pattern}
					min={min}
					max={max}
					maxLength={maxLength}
				/>
			</div>
			{errorMsg}
		</div>
	)
}
