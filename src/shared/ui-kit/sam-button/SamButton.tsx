import styles from './sam-button.module.scss'
import React from 'react'

interface Props {
	type: 'button' | 'reset' | 'submit'
	disabled?: boolean
	loading?: boolean
	onClick?: React.MouseEventHandler<HTMLButtonElement>
	children: React.JSX.Element
}

export const SamButton = ({
	children,
	disabled = false,
	type,
	loading = false,
	onClick,
}: Props) => {
	return (
		<button
			className={styles['sam-button']}
			type={type}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
