'use client'
import stylesInput from './sam-input.module.scss'
import { ChangeEvent } from 'react'
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
	let inputClass = stylesInput['input']
	if (input_mode === 'tel') inputClass += ' ' + stylesInput['tel']
	if (disabled) inputClass += ' ' + stylesInput['disabled']
	if (error) inputClass += ' ' + stylesInput['error']

	const styles = {
		textAlign: text_align,
	}

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
			{error && (
				<span className={stylesInput['input__error-msg']}> {error_msg} </span>
			)}
		</div>
	)
}
