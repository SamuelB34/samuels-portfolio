import styles from './side-menu.module.scss'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { SamButton } from '@/shared/ui-kit/sam-button/SamButton'
import { scrollToElement } from '@/shared/functions/scrollTo'

interface Props {
	opened: boolean
	backAction: () => void
}
export const SideMenu = ({ opened, backAction }: Props) => {
	const [sideMenuClass, setSideMenuClass] = useState<
		'side-menu' | 'side-menu-active'
	>('side-menu')

	const [menuClass, setMenuClass] = useState(styles['header__pages--section'])
	const [menuBottomClass, setMenuBottomClass] = useState(styles[''])

	useEffect(() => {
		setSideMenuClass(opened ? 'side-menu-active' : 'side-menu')
		setMenuClass(
			opened
				? styles['header__pages--section'] +
						' ' +
						styles['header__pages--section__animation']
				: styles['header__pages--section'],
		)
		setMenuBottomClass(opened ? styles['content__bottom'] : '')
	}, [opened])

	return (
		<div className={styles[sideMenuClass]}>
			<div className={styles['content']}>
				<span className={styles['content__back']} onClick={backAction}>
					<Image
						src={'/my-experience/chevron.svg'}
						alt={'chevron'}
						width="32"
						height="33"
						className={styles['content__back--chevron']}
					/>
					Back
				</span>

				<div className={styles['header__pages']}>
					<span
						className={menuClass}
						onClick={() => {
							scrollToElement('about-me')
							backAction()
						}}
					>
						About me
					</span>
					<span
						className={menuClass}
						onClick={() => {
							scrollToElement('experience')
							backAction()
						}}
					>
						Experience
					</span>
					<span
						className={menuClass}
						onClick={() => {
							scrollToElement('pieces')
							backAction()
						}}
					>
						My Projects
					</span>
					<span
						className={menuClass}
						onClick={() => {
							scrollToElement('education')
							backAction()
						}}
					>
						Courses
					</span>

					<span
						className={menuClass}
						style={{ color: '#075fe4', fontWeight: '600' }}
						onClick={() => {
							scrollToElement('contact-me')
							backAction()
						}}
					>
						Contact Me
					</span>
				</div>
			</div>

			<div className={menuBottomClass}>
				<div className={styles['content__bottom--icons']}>
					<a
						href="https://www.linkedin.com/in/samuel-barragan/"
						target={'_blank'}
					>
						<Image
							src={'/header/linkedin.svg'}
							className={styles['content__bottom--logo-2']}
							alt={'logo'}
							width="23"
							height="23"
						/>
					</a>
					<Image
						src={'/header/logo.svg'}
						alt={'logo'}
						className={styles['content__bottom--logo']}
						width="66"
						height="61"
						onClick={() => {
							scrollToElement('presentation')
							backAction()
						}}
					/>
					<a href="tel:+526865782380">
						<Image
							src={'/header/phone.svg'}
							className={styles['content__bottom--logo-2']}
							alt={'logo'}
							width="23"
							height="23"
						/>
					</a>
				</div>
			</div>
		</div>
	)
}
