import styles from './about-me.module.scss'
import Image from 'next/image'

interface Props {
	id: string
}

export const AboutMe = ({ id = 'about-me' }: Props) => {
	return (
		<div className={styles['about-me']} id={id}>
			<div className={styles['about-me__top']}>
				<span className={styles['about-me__top--title']}>About me</span>
				<span className={styles['about-me__top--frontend']}>
					Front End Developer
				</span>
				<p className={styles['about-me__top--description']}>
					I&apos;m Samuel Barragán, a skilled <b>Front-End Developer</b> with
					three years of experience, focusing on Angular, React, and having a
					strong background in Vue.
					<br />
					<br />
					I&apos;m well-versed in TypeScript, SCSS, and excel in leading and
					designing <b>front-end solutions</b> for various projects, emphasizing
					software architecture and design principles.
				</p>
			</div>

			<div className={styles['about-me__technologies']}>
				<span className={styles['about-me__top--title']}>Technologies</span>

				<div className={styles['about-me__technologies--logos']}>
					<Image
						src={'/about-me/nextjs.svg'}
						alt={'next'}
						width={68}
						height={80}
					/>
					<Image
						src={'/about-me/react.svg'}
						alt={'react'}
						width={68}
						height={80}
					/>
					<Image
						src={'/about-me/angular.svg'}
						alt={'angular'}
						width={68}
						height={80}
					/>
					<Image
						src={'/about-me/react-native.svg'}
						alt={'react-native'}
						width={68}
						height={80}
					/>
					<Image
						src={'/about-me/sass.svg'}
						alt={'sass'}
						width={68}
						height={80}
					/>
					<Image
						src={'/about-me/typescript.svg'}
						alt={'typescript'}
						width={68}
						height={80}
					/>
					<Image
						src={'/about-me/nodejs.svg'}
						alt={'nodejs'}
						width={68}
						height={80}
					/>
					<Image
						src={'/about-me/mongoDB.svg'}
						alt={'mongoDB'}
						width={68}
						height={80}
					/>
					<Image
						src={'/about-me/mysql.svg'}
						alt={'mysql'}
						width={68}
						height={80}
					/>
				</div>
			</div>
		</div>
	)
}
