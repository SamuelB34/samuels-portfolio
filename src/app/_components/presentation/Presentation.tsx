import Image from 'next/image'
import styles from './presentation.module.scss'
import { SamButton } from '@/shared/ui-kit/sam-button/SamButton'

interface Props {
	id: string
}

export const Presentation = ({ id = 'presentation' }: Props) => {
	return (
		<div className={styles['presentation']} id={id}>
			<Image
				src={'/presentation/photo.svg'}
				alt={'photo'}
				width={263}
				height={263}
			/>

			<div className={styles['presentation__text']}>
				<span className={styles['presentation__text--name']}>
					Hi my name is
				</span>

				<span className={styles['presentation__text--description']}>
					Samuel Barragán <br />
					I’m a Front End Developer
				</span>

				<SamButton type={'button'}>
					<span className={styles['presentation__text--button']}>
						Contact Me
					</span>
				</SamButton>
			</div>
		</div>
	)
}
