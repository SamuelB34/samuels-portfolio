import Image from 'next/image'
import styles from './LogoAnimation.module.scss'
import { scrollToElement } from '@/shared/functions/scrollTo'

export const LogoAnimation = () => {
	return (
		<>
			<div className={styles['home-2']}>
				<Image
					src={'/header/left-bracket.svg'}
					alt={'left'}
					width={37}
					height={46}
					className={styles['left-bracket']}
					onClick={() => {
						scrollToElement('presentation')
					}}
				/>

				<Image
					src={'/header/right-braket.svg'}
					alt={'right'}
					width={37}
					height={46}
					className={styles['right-bracket']}
					onClick={() => {
						scrollToElement('presentation')
					}}
				/>
			</div>
		</>
	)
}
