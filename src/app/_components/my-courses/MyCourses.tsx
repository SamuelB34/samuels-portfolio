import styles from './my-courses.module.scss'
import Image from 'next/image'
import { useState } from 'react'

interface Props {
	id: string
}

export const MyCourses = ({ id = 'education' }: Props) => {
	const [showDescription, setShowDescription] = useState({
		first: false,
		second: false,
		third: false,
	})

	return (
		<div className={styles['my-courses']} id={id}>
			<div className={styles['my-courses__top']}>
				<span className={styles['my-courses__top--title']}>My Courses</span>
				<span className={styles['my-courses__top--journey']}>
					My Educational Journey
				</span>
			</div>

			<div className={styles['my-courses__content']}>
				{/*Row -  UX Design*/}
				<div className={styles['my-courses__content--row']}>
					<div
						className={styles['my-courses__content--row__left']}
						onClick={() => {
							setShowDescription({
								first: !showDescription.first,
								second: false,
								third: false,
							})
						}}
					>
						<div
							className={styles['my-courses__content--row__left--dot']}
						></div>
						<span>Foundations of UX Design, Wireframes and Prototype</span>
						<Image
							src={'/my-experience/chevron.svg'}
							alt={'chevron'}
							width={32}
							height={32}
							className={styles['my-courses__content--row__right--chevron']}
						/>
					</div>
					<div className={styles['my-courses__content--row__center']}>
						<div
							className={styles['my-courses__content--row__center--content']}
						>
							<div
								className={
									styles['my-courses__content--row__center--content-circle']
								}
							></div>
							<div
								className={
									styles['my-courses__content--row__center--content-line']
								}
							></div>
						</div>
					</div>
					<div className={styles['my-courses__content--row__right']}>
						<span>
							Completed <b>Google</b> courses covering UX essentials: research,
							wireframing, prototyping, and User Experience design.
						</span>
						{showDescription.first && (
							<p>
								Completed <b>Google</b> courses covering UX essentials:
								research, wireframing, prototyping, and User Experience design.
							</p>
						)}
					</div>
				</div>

				{/*Row - React Native*/}
				<div className={styles['my-courses__content--row']}>
					<div
						className={styles['my-courses__content--row__left']}
						onClick={() => {
							setShowDescription({
								first: false,
								second: false,
								third: !showDescription.third,
							})
						}}
					>
						<div
							className={styles['my-courses__content--row__left--dot']}
						></div>
						<span>React Native: Create Android and iOS apps with React</span>
						<Image
							src={'/my-experience/chevron.svg'}
							alt={'chevron'}
							width={32}
							height={32}
							className={styles['my-courses__content--row__right--chevron']}
						/>
					</div>
					<div className={styles['my-courses__content--row__center']}>
						<div
							className={styles['my-courses__content--row__center--content']}
						>
							<div
								className={
									styles['my-courses__content--row__center--content-circle']
								}
							></div>
							<div
								className={
									styles['my-courses__content--row__center--content-line']
								}
							></div>
						</div>
					</div>
					<div className={styles['my-courses__content--row__right']}>
						<span>
							Craft Android and iOS apps seamlessly with React Native in our
							concise course. Accelerate your app development skills.
						</span>

						{showDescription.third && (
							<p>
								Craft Android and iOS apps seamlessly with React Native in our
								concise course. Accelerate your app development skills.
							</p>
						)}
					</div>
				</div>
			</div>

			{/*Education & languages*/}
			<div className={styles['my-courses__education']}>
				<div className={styles['my-courses__education--content']}>
					{/*First*/}
					<div className={styles['my-courses__education--content__first']}>
						<span className={styles['my-courses__education--content__green']}>
							Education
						</span>
						<div className={styles['my-courses__education--content__value']}>
							<span
								className={
									styles['my-courses__education--content__value--white']
								}
							>
								Mechatronics Engineering
							</span>
							<span
								className={
									styles['my-courses__education--content__value--gray']
								}
							>
								CETYS Universidad 2023
							</span>
						</div>
					</div>

					{/*Middle*/}
					<div className={styles['my-courses__education--content__middle']}>
						<div
							className={styles['my-courses__education--content__middle--bar']}
						></div>
					</div>

					{/*Right*/}
					<div className={styles['my-courses__education--content__right']}>
						<span className={styles['my-courses__education--content__green']}>
							Languages
						</span>

						{/*Two values*/}
						<div
							className={styles['my-courses__education--content__right--two']}
						>
							<div className={styles['my-courses__education--content__value']}>
								<span
									className={
										styles['my-courses__education--content__value--white']
									}
								>
									Spanish
								</span>
								<span
									className={
										styles['my-courses__education--content__value--gray']
									}
								>
									Native
								</span>
							</div>
							<div className={styles['my-courses__education--content__value']}>
								<span
									className={
										styles['my-courses__education--content__value--white']
									}
								>
									English
								</span>
								<span
									className={
										styles['my-courses__education--content__value--gray']
									}
								>
									Advanced
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
