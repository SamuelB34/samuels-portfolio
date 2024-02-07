import styles from '@/app/_components/my-work/my-work.module.scss'
import { SamButton } from '@/shared/ui-kit/sam-button/SamButton'
interface Props {
	title: string
	date: string
	type: string
	image: string
	checkMore: () => void
}

export const Project = ({ title, date, type, checkMore, image }: Props) => {
	const beforeStyle: any = {
		content: ' ',
		position: 'absolute',
		left: '0',
		top: '0',
		width: '100%',
		height: '100%',
		opacity: '0.2',
		backgroundImage: `url(${image})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50% 0',
		backgroundSize: 'cover',
	}
	return (
		<div className={styles['my-work__projects']}>
			<div style={beforeStyle}></div>
			<div className={styles['my-work__projects--container']}>
				<div className={styles['my-work__projects--container__project-data']}>
					<span
						className={
							styles['my-work__projects--container__project-data__light']
						}
					>
						{date}
					</span>
					<span
						className={
							styles['my-work__projects--container__project-data__big']
						}
					>
						{title}
					</span>
					<span
						className={
							styles['my-work__projects--container__project-data__light']
						}
					>
						{type}
					</span>
				</div>

				<SamButton type={'button'} onClick={checkMore}>
					<>Check more</>
				</SamButton>
			</div>
		</div>
	)
}
