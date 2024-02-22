import styles from './header.module.scss'
import Image from 'next/image'
import { SamButton } from '@/shared/ui-kit/sam-button/SamButton'
import { scrollToElement } from '@/shared/functions/scrollTo'

interface Props {
	menuAction: () => void
}

export const Header = ({ menuAction }: Props) => {
	return (
		<>
			<div className={styles['header']}>
				<Image
					src={'/header/hamburger-menu.svg'}
					alt={'logo'}
					width={66}
					height={61}
					className={styles['header__hamburger']}
					onClick={() => {
						menuAction()
					}}
				/>

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
					<span
						className={styles['header__pages--section']}
						onClick={() => {
							scrollToElement('about-me')
						}}
					>
						About me
					</span>
					<span
						className={styles['header__pages--section']}
						onClick={() => {
							scrollToElement('experience')
						}}
					>
						Experience
					</span>
					<span
						className={styles['header__pages--section']}
						onClick={() => {
							scrollToElement('pieces')
						}}
					>
						My Projects
					</span>
					<span
						className={styles['header__pages--section']}
						onClick={() => {
							scrollToElement('education')
						}}
					>
						Courses
					</span>
					<div className={styles['header__button']}>
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
			</div>
		</>
	)
}
