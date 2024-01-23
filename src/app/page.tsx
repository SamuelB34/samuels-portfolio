'use client'
import styles from './page.module.scss'
import { Header } from '@/app/_components/header/Header'
import { Presentation } from '@/app/_components/presentation/Presentation'
import { AboutMe } from '@/app/_components/about-me/AboutMe'
import { MyExperience } from '@/app/_components/my-experience/MyExperience'
import { MyWork } from '@/app/_components/my-work/MyWork'
import { MyCourses } from '@/app/_components/my-courses/MyCourses'
import { Contact } from '@/app/_components/contact/Contact'
import { Dots } from '@/app/_components/dots/Dots'
import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
	const [section, setSection] = useState(0)

	const scrollToElement = (view: string) => {
		const element = document.getElementById(view)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	const handleScroll = (event: any) => {
		let scroll = event.currentTarget.scrollTop
		let offset = event.currentTarget.offsetHeight - 16
		const total = Math.floor(scroll / offset)
		if (total !== section) {
			const count = Math.floor(scroll / offset)
			setSection(count)
		}
	}

	return (
		<>
			<Header />
			<main
				className={styles.main}
				onScroll={(event) => {
					handleScroll(event)
				}}
			>
				<div className={styles['background']}>
					<Image
						src={'/LeftBraket.svg'}
						alt={'braket'}
						width={760}
						height={903}
						className={`${styles['background-lottie']} ${styles[`background-lottie__p-${section}`]}`}
					/>
					<Image
						src={'/LeftBraket.svg'}
						alt={'braket'}
						width={760}
						height={903}
						className={`${styles['background-lottie-2']} ${styles[`background-lottie-2__p-${section}`]}`}
					/>
				</div>
				<Presentation id={'presentation'} />
				<AboutMe id={'about-me'} />
				<MyExperience id={'experience'} />
				<MyWork id={'pieces'} />
				<MyCourses id={'education'} />
				<Contact id={'contact-me'} />
				<Dots
					active={section}
					click={(section: string) => {
						scrollToElement(section)
					}}
				/>
			</main>
		</>
	)
}
