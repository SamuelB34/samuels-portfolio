import styles from './page.module.scss'
import { Header } from '@/app/_components/header/Header'
import { Presentation } from '@/app/_components/presentation/Presentation'
import { AboutMe } from '@/app/_components/about-me/AboutMe'
import { MyExperience } from '@/app/_components/my-experience/MyExperience'
import { MyWork } from '@/app/_components/my-work/MyWork'
import { MyCourses } from '@/app/_components/my-courses/MyCourses'

export default function Home() {
	return (
		<main className={styles.main}>
			<Header />
			<Presentation id={'presentation'} />
			<AboutMe id={'about-me'} />
			<MyExperience id={'experience'} />
			<MyWork id={'pieces'} />
			<MyCourses id={'contact-me'} />
		</main>
	)
}
