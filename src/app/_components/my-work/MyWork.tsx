'use client'
import styles from './my-work.module.scss'
import { Project } from '@/app/_components/my-work/_components/Project'
import { SamModal } from '@/shared/ui-kit/sam-modal/SamModal'
import { useState } from 'react'
import Image from 'next/image'

interface Props {
	id: string
}

interface data {
	name: string
	objective: string
	technologies: string
	preview: string
}

export const MyWork = ({ id = 'pieces' }: Props) => {
	const [data, setData] = useState<data>({
		name: '',
		objective: '',
		technologies: '',
		preview: '',
	})
	const [showModal, setShowModal] = useState(false)
	const [link, setLink] = useState('')

	return (
		<>
			<div className={styles['my-work']} id={id}>
				<div className={styles['my-work__top']}>
					<span className={styles['my-work__top--title']}>My Work</span>
					<span className={styles['my-work__top--pieces']}>
						Dive into my projects
					</span>
				</div>

				<div className={styles['my-work__projects-container']}>
					<Project
						title={'Angel Mobile'}
						date={'August 2023'}
						type={'Website'}
						image={'/my-work/angel-mobile.webp'}
						checkMore={() => {
							setData({
								name: 'Angel Mobile Landing Page',
								objective: `
									A recently developed landing page is the result of a
									collaborative effort within the company I am employed with,
									specifically designed for a fresh client engagement.`,
								technologies: 'Next.js, TypeScript, SCSS',
								preview: '/my-work/angel-mobile.svg',
							})
							setLink('https://www.getangelmobile.com')
							setShowModal(true)
						}}
					/>
					<Project
						title={'Wedding App'}
						date={'January 2024'}
						type={'Full-Stack App'}
						image={'/my-work/sam-mel.webp'}
						checkMore={() => {
							setData({
								name: 'Wedding App',
								objective: `
									This wedding guest management app streamlines RSVPs and 
									invites via WhatsApp, tracking views and responses, ensuring 
									seamless communication and attendance tracking.`,
								technologies: 'Next.js, TypeScript, SCSS, Node.js, MongoDB',
								preview: '/my-work/sam-mel.png',
							})
							setLink('')
							setShowModal(true)
						}}
					/>
					<Project
						title={'Wedding Invitation'}
						date={'May 2024'}
						type={'Landing Page'}
						image={'/my-work/wedding-invitation.webp'}
						checkMore={() => {
							setData({
								name: 'Wedding App',
								objective: `
									This wedding invitation delivers personalized invites via WhatsApp,
									tracks when guests view them, and collects real-time RSVP responses,
									ensuring a smooth and elegant guest experience.`,
								technologies: 'Next.js, TypeScript, SCSS',
								preview: '/my-work/wedding-invitation.webp',
							})
							setLink('https://demo.d1zalkbjht5kmk.amplifyapp.com')
							setShowModal(true)
						}}
					/>
				</div>
			</div>

			{showModal && (
				<SamModal close={() => setShowModal(!showModal)}>
					<div className={styles['modal-content']}>
						<div className={styles['modal-content__data']}>
							<span className={styles['modal-content__data--title']}>
								Project name
							</span>
							<span className={styles['modal-content__data--description']}>
								{data.name}
							</span>
						</div>

						<div className={styles['modal-content__data']}>
							<span className={styles['modal-content__data--title']}>
								Objective
							</span>
							<span className={styles['modal-content__data--description']}>
								{data.objective}
							</span>
						</div>

						<div className={styles['modal-content__data']}>
							<span className={styles['modal-content__data--title']}>
								Technologies
							</span>
							<span className={styles['modal-content__data--description']}>
								{data.technologies}
							</span>
						</div>

						<div className={styles['modal-content__data']}>
							<span className={styles['modal-content__data--title']}>
								Preview
							</span>
						</div>

						<div
							className={styles['modal-content__data--preview']}
							onClick={() => {
								if (link) {
									window.open(link, '_blank')
								}
							}}
						>
							<img
								src={data.preview}
								alt="preview"
								className={styles['modal-content__data--preview__img']}
							/>
							<Image
								src={'/my-work/open_in_new.svg'}
								alt={'open_in_new'}
								width={24}
								height={24}
								className={styles['icon']}
							/>
						</div>
					</div>
				</SamModal>
			)}
		</>
	)
}
