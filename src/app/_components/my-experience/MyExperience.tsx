'use client'
import styles from './my-experience.module.scss'
import { useState } from 'react'
import { ExperienceItem } from '@/app/_components/my-experience/experience-section/ExperienceSection'

interface Props {
	id: string
}

export const MyExperience = ({ id = 'experience' }: Props) => {
	const [showSection, setShowSection] = useState<
		'first' | 'second' | 'third' | 'fourth' | null
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
					date={'March 2025 - September 2026'}
					onClick={() => {
						setShowSection(showSection !== 'first' ? 'first' : null)
					}}
					description={
						<>
							As a Senior Full-Stack Developer at Kirana Labs, I worked across a
							multi-role enterprise SaaS platform for government contracting,
							contributing end to end across frontend, backend, data, integrations,
							AI-powered workflows, and product UX with Next.js, React, TypeScript,
							Node.js, PostgreSQL, and GraphQL. I built production-facing LLM and
							agentic workflows for research, personalization, automation, and
							decision support, including Bid Match, a recommendation system
							combining deterministic scoring, semantic relevance, company
							intelligence, user feedback, pagination, and large-scale candidate
							retrieval. I improved onboarding, CRM, HubSpot integrations, account
							intelligence, opportunity tracking, pipeline management, pursuit
							workflows, and Stripe billing UX, using PostHog for analytics and issue
							investigation. I also shaped responsive desktop and mobile experiences
							with React Native and evolved reusable design systems from Figma using
							Storybook, Tailwind CSS, and Radix UI.
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
							As a Freelance Senior Full-Stack Developer working remotely, I designed
							and built a multi-role business platform from the ground up, unifying
							CRM, quoting, inventory, e-commerce, and internal operations. Using
							Next.js, TypeScript, Node.js, GraphQL, and APIs, I connected an
							administrative CRM directly to an online storefront, enabling centralized
							management of products, inventory, pricing, and availability. I implemented
							Stripe payment flows and integrated the platform with SAP Business One to
							synchronize products, stock, prices, and operational data across the
							internal system, store, and ERP. I secured server-to-server integrations
							with restricted access, static IP allowlisting, and Cloudflare controls,
							while automating sales and operational workflows including quoting,
							QR-based inventory, and CSV updates. I owned frontend, backend,
							architecture, testing, and CI/CD using Cypress and Jest, reducing a core
							process from approximately two hours to fifteen minutes.
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
