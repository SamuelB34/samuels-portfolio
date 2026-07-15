'use client'
import styles from './dots.module.scss'

interface Params {
	active: number
	click: (text: string) => void
}

const dots = [
	{ id: 0, name: 'presentation' },
	{ id: 1, name: 'about-me' },
	{ id: 2, name: 'experience' },
	{ id: 3, name: 'pieces' },
	{ id: 4, name: 'education' },
	{ id: 5, name: 'contact-me' },
]

export const Dots = ({ active, click }: Params) => {
	return (
		<div className={styles['dots']}>
			{dots.map((dot) => (
				<div
					className={styles[`dots--${dot.id === active ? 'active' : 'inactive'}`]}
					key={dot.id}
					onClick={() => {
						click(dot.name)
					}}
				></div>
			))}
		</div>
	)
}
