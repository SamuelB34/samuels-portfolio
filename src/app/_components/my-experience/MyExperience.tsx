'use client'
import styles from './my-experience.module.scss'
import { useRef, useState } from 'react'
import { ExperienceItem } from '@/app/_components/my-experience/experience-section/ExperienceSection'

interface Props {
	id: string
}

export const MyExperience = ({ id = 'experience' }: Props) => {
	const [showSection, setShowSection] = useState<
		'first' | 'second' | 'third' | 'fourth' | null
	>('first')
	const [hasScrolled, setHasScrolled] = useState(false)
	const sectionsRef = useRef<HTMLDivElement>(null)

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
				<div className={styles['my-experience__carousel-wrapper']}>
					<div
						className={styles['my-experience__sections-container']}
						ref={sectionsRef}
						onScroll={() => {
							if (sectionsRef.current && sectionsRef.current.scrollLeft > 0) {
								setHasScrolled(true)
							}
						}}
					>
						<ExperienceItem
					id={'Kirana Labs'}
					type={'1'}
					showSection={showSection}
					section={'first'}
					logo={'/my-experience/code.svg'}
					company={'Kirana Labs'}
					role={'Senior Full Stack Developer'}
					date={'March 2025 - September 2026'}
					onClick={() => {
						setShowSection(showSection !== 'first' ? 'first' : null)
					}}
					description={
						<>
							As a <b>Senior Full-Stack Developer</b> at <b>Kirana Labs</b>, I worked
							across a <b>multi-role enterprise SaaS platform</b> for
							<b>government contracting</b>, contributing end to end across frontend,
							backend, data, integrations, AI-powered workflows, and product UX with
							Next.js, React, TypeScript, Node.js, PostgreSQL, and GraphQL. I built
							<b>production-facing LLM and agentic workflows</b> for research,
							personalization, automation, and decision support, including
							<b>Bid Match</b>, a recommendation system combining deterministic
							scoring, semantic relevance, company intelligence, user feedback,
							pagination, and large-scale candidate retrieval. I improved onboarding,
							CRM, <b>HubSpot integrations</b>, account intelligence, opportunity
							tracking, pipeline management, pursuit workflows, and
							<b>Stripe billing UX</b>, using PostHog for analytics and issue
							investigation. I also shaped responsive desktop and mobile experiences
							with React Native and evolved <b>reusable design systems</b> from Figma
							using Storybook, Tailwind CSS, and Radix UI.
						</>
					}
				/>

				<ExperienceItem
					id={'Freelance'}
					type={'2'}
					showSection={showSection}
					section={'fourth'}
					logo={'/my-experience/code.svg'}
					company={'Freelance'}
					role={'Senior Full-Stack Developer'}
					date={'January 2025 - Present'}
					onClick={() => {
						setShowSection(showSection !== 'fourth' ? 'fourth' : null)
					}}
					description={
						<>
							As a <b>Freelance Senior Full-Stack Developer</b> working remotely, I
							designed and built a <b>multi-role business platform</b> from the ground
							up, unifying <b>CRM, quoting, inventory, and e-commerce</b> with internal
							operations. Using Next.js, TypeScript, Node.js, GraphQL, and APIs, I
							connected an administrative CRM directly to an online storefront,
							enabling centralized management of products, inventory, pricing, and
							availability. I implemented <b>Stripe payment flows</b> and integrated the
							platform with <b>SAP Business One</b> to synchronize products, stock,
							prices, and operational data across the internal system, store, and ERP.
							I secured <b>server-to-server integrations</b> with restricted access,
							static IP allowlisting, and Cloudflare controls, while automating sales
							and operational workflows including quoting, <b>QR-based inventory</b>,
							and CSV updates. I owned frontend, backend, architecture, testing, and
							CI/CD using Cypress and Jest, reducing a core process from approximately
							<b>two hours to fifteen minutes</b>.
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
							development of <b>internal UI Kits</b>, significantly reducing
							development time by <b>25%</b> and facilitating faster project
							deliveries. I assumed leadership in
							<b>front-end projects and architectures</b>, successfully managing
							<b>systems with thousands of users</b>, complete with role management
							and proactively initiated proposals to optimize and standardize code
							practices for future projects and contributed to the refactoring and
							optimization of landing pages. My skills extended to providing
							front-end support using frameworks such as <b>Angular and Vue.js</b>,
							as well as contributing to landing pages, while also offering backend
							support with Node.js in JavaScript and TypeScript
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
							implemented <b>UI Kits</b> for internal landing pages, fostering
							consistency and efficiency in our development process. I played a
							pivotal role in proposing <b>standardized code formats</b>, ensuring
							future projects adhered to <b>best practices</b>. My responsibilities
							included the development and maintenance of landing pages using
							<b>React and Angular</b>. I also collaborated closely with the design
							team to bring their vision to life in the creation of internal
							landing pages.
						</>
					}
				/>
					</div>
					{!hasScrolled && (
						<span className={styles['my-experience__scroll-hint']}>
							Swipe right to see more →
						</span>
					)}
				</div>
			</div>
		</>
	)
}
