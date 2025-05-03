import styles from '../my-experience.module.scss'
import Image from 'next/image'

export interface Experience {
	id: string
	company: string
	role: string
	date: string
	logo: string
	description: string
	descriptionExtended?: string
}

export const ExperienceItem = ({
	experience,
	isOpen,
	onClick,
}: {
	experience: Experience
	isOpen: boolean
	onClick: () => void
}) => (
	<div
		className={`${styles['my-experience__section-1']} ${isOpen ? styles['open'] : ''}`}
		onClick={onClick}
	>
		<div className={styles['my-experience__section--content']}>
			<div className={styles['my-experience__section--content__head']}>
				<div className={styles['my-experience__section--content__head--left']}>
					<div
						className={
							styles['my-experience__section--content__head--left__top']
						}
					>
						<div
							className={
								styles[
									'my-experience__section--content__head--left__company-container'
								]
							}
						>
							<Image src={experience.logo} alt="logo" width={36} height={37} />
							<span
								className={
									styles['my-experience__section--content__head--left__company']
								}
							>
								{experience.company}
							</span>
						</div>
						<Image
							src={'/my-experience/chevron.svg'}
							alt={'chevron'}
							width="32"
							height="33"
							className={
								styles[
									'my-experience__section--content__head--left__top--chevron'
								]
							}
						/>
					</div>
					<span
						className={
							styles['my-experience__section--content__head--left__position']
						}
					>
						{experience.role}
					</span>
				</div>
				<div className={styles['my-experience__section--content__head--right']}>
					<span
						className={
							styles['my-experience__section--content__head--left__date']
						}
					>
						{experience.date}
					</span>
				</div>
			</div>

			<p className={styles['my-experience__section--content__paragraph']}>
				{experience.description}
			</p>

			{isOpen && experience.descriptionExtended && (
				<p className={styles['my-experience__section--content__p-2']}>
					{experience.descriptionExtended}
				</p>
			)}
		</div>
	</div>
)
