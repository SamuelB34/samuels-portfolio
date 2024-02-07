import styles from './sam-modal.module.scss'
import React from 'react'
import Image from 'next/image'

interface Props {
	children: React.JSX.Element
	close: () => void
}
export const SamModal = ({ children, close }: Props) => {
	return (
		<div className={styles['modal']}>
			<div className={styles['modal__container']}>
				<div className={styles['modal__container--close']} onClick={close}>
					<Image src={'/my-work/x.svg'} alt={'x'} width="24" height="24" />
				</div>
				{children}
			</div>
		</div>
	)
}
