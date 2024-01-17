'use client'
import { useEffect, useState } from 'react'
import styles from './dots.module.scss'

interface Params {
	active: number
	click: (text: string) => void
}

export const Dots = ({ active, click }: Params) => {
	const [dots, setDots] = useState([
		{
			id: 0,
			active: true,
			name: 'presentation',
		},
		{
			id: 1,
			active: false,
			name: 'about-me',
		},
		{
			id: 2,
			active: false,
			name: 'experience',
		},
		{
			id: 3,
			active: false,
			name: 'pieces',
		},
		{
			id: 4,
			active: false,
			name: 'education',
		},
		{
			id: 5,
			active: false,
			name: 'contact-me',
		},
	])
	useEffect(() => {
		let dots_value = dots.map((dot) => {
			return { id: dot.id, active: false, name: dot.name }
		})
		dots_value[active].active = true
		setDots(dots_value)
	}, [active])

	return (
		<div className={styles['dots']}>
			{dots.map((dot) => (
				<div
					className={styles[`dots--${dot.active ? 'active' : 'inactive'}`]}
					key={dot.id}
					onClick={() => {
						click(dot.name)
					}}
				></div>
			))}
		</div>
	)
}
