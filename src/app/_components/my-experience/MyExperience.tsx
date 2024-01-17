'use client'
import styles from './my-experience.module.scss'
import Image from 'next/image'
import { useState } from 'react'

interface Props {
	id: string
}

export const MyExperience = ({ id = 'experience' }: Props) => {
	const [showFirst, setShowFirst] = useState(false)
	const [showSecond, setShowSecond] = useState(false)

	return (
		<>
			<div className={styles['my-experience']} id={id}>
				{/*TOP*/}
				<div className={styles['my-experience__top']}>
					<span className={styles['my-experience__top--title']}>
						My Experience
					</span>
					<span className={styles['my-experience__top--professional-journey']}>
						Professional Journey
					</span>
				</div>

				{/*Section*/}
				<div
					className={styles['my-experience__section-1']}
					onClick={() => {
						setShowFirst(!showFirst)
					}}
				>
					<div className={styles['my-experience__section--content']}>
						{/*Head*/}
						<div className={styles['my-experience__section--content__head']}>
							<div
								className={
									styles['my-experience__section--content__head--left']
								}
							>
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
										<Image
											src={'/my-experience/code.svg'}
											alt={'code'}
											width={36}
											height={37}
										/>
										<span
											className={
												styles[
													'my-experience__section--content__head--left__company'
												]
											}
										>
											Sales Hub
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
										styles[
											'my-experience__section--content__head--left__position'
										]
									}
								>
									Front End Developer
								</span>
							</div>
							<div
								className={
									styles['my-experience__section--content__head--right']
								}
							>
								<span
									className={
										styles['my-experience__section--content__head--left__date']
									}
								>
									June 2022 - Present
								</span>
							</div>
						</div>

						{/*Description*/}
						<p className={styles['my-experience__section--content__paragraph']}>
							Present As a <b>Front-End Developer</b>, I spearheaded the
							development of internal UI Kits, significantly reducing
							development time by 25% and facilitating faster project
							deliveries. I assumed leadership in front-end projects and
							architectures, successfully managing systems with thousands of
							users, complete with role management and proactively initiated
							proposals to optimize and standardize code practices for future
							projects and contributed to the refactoring and optimization of
							landing pages. My skills extended to providing front-end support
							using frameworks such as Angular and Vue.js, as well as
							contributing to landing pages, while also offering backend support
							with Node.js in JavaScript and TypeScript
						</p>

						{showFirst && (
							<p className={styles['my-experience__section--content__p-2']}>
								Present As a <b>Front-End Developer</b>, I spearheaded the
								development of internal UI Kits, significantly reducing
								development time by 25% and facilitating faster project
								deliveries. I assumed leadership in front-end projects and
								architectures, successfully managing systems with thousands of
								users, complete with role management and proactively initiated
								proposals to optimize and standardize code practices for future
								projects and contributed to the refactoring and optimization of
								landing pages. My skills extended to providing front-end support
								using frameworks such as Angular and Vue.js, as well as
								contributing to landing pages, while also offering backend
								support with Node.js in JavaScript and TypeScript
							</p>
						)}
					</div>
				</div>

				{/*Section*/}
				<div
					className={styles['my-experience__section-2']}
					onClick={() => {
						setShowSecond(!showSecond)
					}}
				>
					<div className={styles['my-experience__section--content']}>
						{/*Head*/}
						<div className={styles['my-experience__section--content__head']}>
							<div
								className={
									styles['my-experience__section--content__head--left']
								}
							>
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
										<Image
											src={'/my-experience/page.svg'}
											alt={'code'}
											width={36}
											height={37}
										/>
										<span
											className={
												styles[
													'my-experience__section--content__head--left__company'
												]
											}
										>
											FESMEX
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
										styles[
											'my-experience__section--content__head--left__position'
										]
									}
								>
									Jr. Web Developer
								</span>
							</div>
							<div
								className={
									styles['my-experience__section--content__head--right']
								}
							>
								<span
									className={
										styles['my-experience__section--content__head--left__date']
									}
								>
									January 2021 - October 2022
								</span>
							</div>
						</div>

						{/*Description*/}
						<p className={styles['my-experience__section--content__paragraph']}>
							In my role as a <b>Junior Web Developer</b>, I designed and
							implemented UI Kits for internal landing pages, fostering
							consistency and efficiency in our development process. I played a
							pivotal role in proposing standardized code formats, ensuring
							future projects adhered to best practices. My responsibilities
							included the development and maintenance of landing pages using
							React and Angular. I also collaborated closely with the design
							team to bring their vision to life in the creation of internal
							landing pages.
						</p>

						{showSecond && (
							<p className={styles['my-experience__section--content__p-2']}>
								In my role as a <b>Junior Web Developer</b>, I designed and
								implemented UI Kits for internal landing pages, fostering
								consistency and efficiency in our development process. I played
								a pivotal role in proposing standardized code formats, ensuring
								future projects adhered to best practices. My responsibilities
								included the development and maintenance of landing pages using
								React and Angular. I also collaborated closely with the design
								team to bring their vision to life in the creation of internal
								landing pages.
							</p>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
