'use client'
import styles from './header.module.scss'
import Image from 'next/image'
import { SamButton } from '@/shared/ui-kit/sam-button/SamButton'

export const Header = () => {
	const scrollToElement = (view: string) => {
		const element = document.getElementById(view)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<>
			<div className={styles['header']}>
				<Image
					src={'/header/logo.svg'}
					alt={'logo'}
					width={66}
					height={61}
					className={styles['header__home']}
					onClick={() => {
						scrollToElement('presentation')
					}}
				/>

				<div className={styles['header__pages']}>
					<a
						className={styles['header__pages--section']}
						onClick={() => {
							scrollToElement('about-me')
						}}
					>
						About me
					</a>
					<a
						className={styles['header__pages--section']}
						onClick={() => {
							scrollToElement('experience')
						}}
					>
						Experience
					</a>
					<a
						className={styles['header__pages--section']}
						onClick={() => {
							scrollToElement('pieces')
						}}
					>
						My Pieces
					</a>
					<a
						className={styles['header__pages--section']}
						onClick={() => {
							scrollToElement('education')
						}}
					>
						Courses
					</a>
					<SamButton
						type={'button'}
						onClick={() => {
							scrollToElement('contact-me')
						}}
					>
						<>Contact Me</>
					</SamButton>
				</div>
			</div>
		</>
	)
}
