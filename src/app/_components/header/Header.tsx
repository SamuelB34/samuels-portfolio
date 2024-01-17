'use client'
import styles from './header.module.scss'
import Image from 'next/image'
import { SamButton } from '@/shared/ui-kit/sam-button/SamButton'

export const Header = () => {
	const scrollToElement = (view: string) => {
		const element = document.getElementById(view)
		if (element) {
			console.log(element)
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<>
			<div className={styles['header']}>
				<Image src={'/header/logo.svg'} alt={'logo'} width={66} height={61} />

				<div className={styles['header__pages']}>
					<a
						href="#"
						className={styles['header__pages--section']}
						onClick={() => {
							scrollToElement('about-me')
						}}
					>
						About me
					</a>
					<a
						href="#"
						className={styles['header__pages--section']}
						onClick={() => {
							scrollToElement('experience')
						}}
					>
						Experience
					</a>
					<a
						href="#"
						className={styles['header__pages--section']}
						onClick={() => {
							scrollToElement('pieces')
						}}
					>
						My Pieces
					</a>
					<a
						href="#"
						className={styles['header__pages--section']}
						onClick={() => {
							scrollToElement('contact-me')
						}}
					>
						Courses
					</a>
					<SamButton type={'button'}>
						<>Contact Me</>
					</SamButton>
				</div>
			</div>
		</>
	)
}
