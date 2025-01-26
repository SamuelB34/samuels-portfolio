'use client'
import Image from 'next/image'
import styles from './presentation.module.scss'
import { SamButton } from '@/shared/ui-kit/sam-button/SamButton'

interface Props {
	id: string
}

export const Presentation = ({ id = 'presentation' }: Props) => {
	const scrollToElement = (view: string) => {
		const element = document.getElementById(view)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<div className={styles['presentation']} id={id}>
			<Image
				src={'/presentation/photo.svg'}
				alt={'photo'}
				width={263}
				height={263}
				className={styles['presentation__photo']}
				priority
			/>

			<div className={styles['presentation__text']}>
				<span className={styles['presentation__text--name']}>
					Hi my name is
				</span>

				<span className={styles['presentation__text--description']}>
					Samuel Barragán <br />
					I’m a Senior Full Stack Developer
				</span>

				<SamButton
					type={'button'}
					onClick={() => {
						scrollToElement('contact-me')
					}}
				>
					<span className={styles['presentation__text--button']}>
						Contact Me
					</span>
				</SamButton>
			</div>
		</div>
	)
}
