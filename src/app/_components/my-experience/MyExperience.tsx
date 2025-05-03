'use client'
import styles from './my-experience.module.scss'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface Props {
	id: string
}

export const MyExperience = ({ id = 'experience' }: Props) => {
	const [showFirst, setShowFirst] = useState(false)
	const [showSecond, setShowSecond] = useState(false)
	const [showSection, setShowSection] = useState<
		'first' | 'second' | 'third' | null
	>(null)

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
					className={`${styles['my-experience__section-1']} ${styles['my-experience__section-1__' + (showSection !== null && showSection !== 'first')]}`}
					onClick={() => {
						setShowSection(showSection !== 'first' ? 'first' : null)
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
											Kirana Labs
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
									Senior Full Stack Developer
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
									March 2025 - Present
								</span>
							</div>
						</div>

						{/*Description*/}
						<p className={styles['my-experience__section--content__paragraph']}>
							Present As a <b>Senior Full Stack Developer</b>, I Engineered
							end-to-end features within a healthcare platform operating under a
							complex monorepo architecture, contributing across front-end,
							back-end, and mobile layers. Built real-time dashboards for data
							visualization, optimized front-end performance to minimize data
							usage, and restructured MySQL database schemas to enhance query
							efficiency. Integrated WebSocket-based real-time data sync and
							designed UI components using Figma. Leveraged a fullstack tech
							stack including Next.js, React Native, MySQL, and MongoDB to
							deliver scalable, performant solutions aligned with healthcare
							standards.
						</p>

						{showSection === 'first' && (
							<p className={styles['my-experience__section--content__p-2']}>
								Present As a <b>Senior Full Stack Developer</b>, I Engineered
								end-to-end features within a healthcare platform operating under
								a complex monorepo architecture, contributing across front-end,
								back-end, and mobile layers. Built real-time dashboards for data
								visualization, optimized front-end performance to minimize data
								usage, and restructured MySQL database schemas to enhance query
								efficiency. Integrated WebSocket-based real-time data sync and
								designed UI components using Figma. Leveraged a fullstack tech
								stack including Next.js, React Native, MySQL, and MongoDB to
								deliver scalable, performant solutions aligned with healthcare
								standards.
							</p>
						)}
					</div>
				</div>

				{/*Section*/}
				<div
					className={`${styles['my-experience__section-1']} ${styles['my-experience__section-1__' + (showSection !== null && showSection !== 'second')]}`}
					onClick={() => {
						setShowSection(showSection !== 'second' ? 'second' : null)
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
									Senior Front End Developer
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
									June 2022 - January 2025
								</span>
							</div>
						</div>

						{/*Description*/}
						<p className={styles['my-experience__section--content__paragraph']}>
							Present As a <b>Senior Front-End Developer</b>, I spearheaded the
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

						{showSection === 'second' && (
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
					className={`${styles['my-experience__section-2']} ${styles['my-experience__section-2__' + (showSection !== null && showSection !== 'third')]}`}
					onClick={() => {
						setShowSection(showSection !== 'third' ? 'third' : null)
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

						{showSection === 'third' && (
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
