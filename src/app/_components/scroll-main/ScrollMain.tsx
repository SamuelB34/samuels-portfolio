'use client'
import { ReactNode, useRef, useState } from 'react'
import Image from 'next/image'
import styles from '@/app/page.module.scss'
import { Header } from '@/app/_components/header/Header'
import { SideMenu } from '@/app/_components/side-menu/SideMenu'
import { Dots } from '@/app/_components/dots/Dots'
import { scrollToElement } from '@/shared/functions/scrollTo'

interface Props {
	children: ReactNode
}

export const ScrollMain = ({ children }: Props) => {
	const [section, setSection] = useState(0)
	const [menuOpen, setMenuOpen] = useState(false)
	const tickingRef = useRef(false)

	const handleScroll = (event: React.UIEvent<HTMLElement>) => {
		if (tickingRef.current) return
		const { scrollTop, offsetHeight } = event.currentTarget
		tickingRef.current = true
		requestAnimationFrame(() => {
			const offset = offsetHeight - 16
			const total = Math.floor(scrollTop / offset)
			if (total !== section) {
				setSection(total)
			}
			tickingRef.current = false
		})
	}

	return (
		<>
			<Header menuAction={() => setMenuOpen(true)} />
			<SideMenu opened={menuOpen} backAction={() => setMenuOpen(false)} />
			<main
				className={styles.main}
				onScroll={handleScroll}
			>
				<div className={styles['background']}>
					<Image
						src={'/LeftBraket.svg'}
						alt={'braket'}
						width={760}
						height={903}
						priority
						className={`${styles['background-lottie']} ${styles[`background-lottie__p-${section}`]}`}
					/>
					<Image
						src={'/LeftBraket.svg'}
						alt={'braket'}
						width={760}
						height={903}
						loading={'lazy'}
						className={`${styles['background-lottie-2']} ${styles[`background-lottie-2__p-${section}`]}`}
					/>
				</div>
				{children}
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
