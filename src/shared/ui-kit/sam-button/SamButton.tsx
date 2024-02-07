import styles from './sam-button.module.scss'
import React from 'react'
import SamLoading from '@/shared/ui-kit/sam-loading/SamLoading'
import { SamSuccess } from '@/shared/ui-kit/sam-success/SamSuccess'

interface Props {
	type: 'button' | 'reset' | 'submit'
	disabled?: boolean
	loading?: boolean
	success?: boolean
	onClick?: React.MouseEventHandler<HTMLButtonElement>
	children: React.JSX.Element
}

export const SamButton = ({
	children,
	disabled = false,
	type,
	loading = false,
	success = false,
	onClick,
}: Props) => {
	return (
		<button
			className={`${styles['sam-button']} ${loading || success ? `${styles['loading']}` : ''}`}
			type={type}
			disabled={disabled || loading || success}
			onClick={onClick}
		>
			{loading ? (
				<SamLoading size={'18px'} />
			) : success ? (
				<SamSuccess />
			) : (
				children
			)}
		</button>
	)
}
