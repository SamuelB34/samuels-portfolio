import styles from '../my-experience.module.scss'
import Image from 'next/image'
import { ReactNode } from 'react'

export interface Experience {
	id: string
	company: string
	role: string
	date: string
	logo: string
	type: string
	description: ReactNode
	onClick?: () => void
	showSection?: 'first' | 'second' | 'third' | null
	section: 'first' | 'second' | 'third'
}

export const ExperienceItem = ({
	id,
	company,
	role,
	date,
	logo,
	type,
	description,
	onClick,
	showSection,
	section,
}: Experience) => (
	<div
		className={`${styles[`my-experience__section-${type}`]} ${styles[`my-experience__section-${type}__` + (showSection !== null && showSection !== section)]}`}
		onClick={onClick}
		key={id}
	>
		<div className={styles['my-experience__section--content']}>
			{/*Head*/}
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
							<Image src={logo} alt={'code'} width={36} height={37} />
							<span
								className={
									styles['my-experience__section--content__head--left__company']
								}
							>
								{company}
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
						{role}
					</span>
				</div>
				<div className={styles['my-experience__section--content__head--right']}>
					<span
						className={
							styles['my-experience__section--content__head--left__date']
						}
					>
						{date}
					</span>
				</div>
			</div>

			{/*Description*/}
			<p className={styles['my-experience__section--content__paragraph']}>
				{description}
			</p>

			{showSection === section && (
				<p className={styles['my-experience__section--content__p-2']}>
					{description}
				</p>
			)}
		</div>
	</div>
)
