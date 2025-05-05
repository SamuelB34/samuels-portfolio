'use client'
import styles from './my-experience.module.scss'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ExperienceItem } from '@/app/_components/my-experience/experience-section/ExperienceSection'

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
				<ExperienceItem
					id={'Kirana Labs'}
					type={'1'}
					showSection={showSection}
					section={'first'}
					logo={'/my-experience/code.svg'}
					company={'Kirana Labs'}
					role={'Senior Full Stack Developer'}
					date={'March 2025 - Present'}
					onClick={() => {
						setShowSection(showSection !== 'first' ? 'first' : null)
					}}
					description={
						<>
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
						</>
					}
				/>

				<ExperienceItem
					id={'Sales Hub'}
					type={'2'}
					showSection={showSection}
					section={'second'}
					logo={'/my-experience/code.svg'}
					company={'Sales Hub'}
					role={'Senior Front End Developer'}
					date={'June 2022 - January 2025'}
					onClick={() => {
						setShowSection(showSection !== 'second' ? 'second' : null)
					}}
					description={
						<>
							Present as a <b>Front-End Developer</b>, I spearheaded the
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
						</>
					}
				/>

				<ExperienceItem
					id={'FESMEX'}
					type={'2'}
					showSection={showSection}
					section={'third'}
					logo={'/my-experience/page.svg'}
					company={'FESMEX'}
					role={'Full Stack Developer'}
					date={'January 2021 - October 2022'}
					onClick={() => {
						setShowSection(showSection !== 'third' ? 'third' : null)
					}}
					description={
						<>
							In my role as a <b>Junior Web Developer</b>, I designed and
							implemented UI Kits for internal landing pages, fostering
							consistency and efficiency in our development process. I played a
							pivotal role in proposing standardized code formats, ensuring
							future projects adhered to best practices. My responsibilities
							included the development and maintenance of landing pages using
							React and Angular. I also collaborated closely with the design
							team to bring their vision to life in the creation of internal
							landing pages.
						</>
					}
				/>
			</div>
		</>
	)
}
