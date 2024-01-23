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
import { useEffect, useRef, useState } from 'react'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import lottie from '@/shared/lottie/data.json'

export default function Home() {
	const [section, setSection] = useState(0)
	const lottieRef = useRef<LottieRefCurrentProps | null>(null)

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
			console.log(count)
			if (count > 0) {
				// lottieRef.current?.playSegments([], true)
			}
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
				<Lottie
					animationData={lottie}
					className={styles['background-lottie']}
					lottieRef={lottieRef}
					autoplay={false}
				/>
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
