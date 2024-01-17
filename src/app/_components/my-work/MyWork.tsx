import styles from './my-work.module.scss'
import { SamButton } from '@/shared/ui-kit/sam-button/SamButton'

interface Props {
	id: string
}

export const MyWork = ({ id = 'pieces' }: Props) => {
	return (
		<div className={styles['my-work']} id={id}>
			<div className={styles['my-work__top']}>
				<span className={styles['my-work__top--title']}>My Work</span>
				<span className={styles['my-work__top--pieces']}>
					Dive into my pieces
				</span>
			</div>

			<div className={styles['my-work__projects']}>
				<div className={styles['my-work__projects--container']}>
					<div className={styles['my-work__projects--container__project-data']}>
						<span
							className={
								styles['my-work__projects--container__project-data__light']
							}
						>
							August 2023
						</span>
						<span
							className={
								styles['my-work__projects--container__project-data__big']
							}
						>
							Angel Mobile
						</span>
						<span
							className={
								styles['my-work__projects--container__project-data__light']
							}
						>
							Website
						</span>
					</div>

					<SamButton type={'button'}>
						<>Check more</>
					</SamButton>
				</div>
			</div>
		</div>
	)
}
