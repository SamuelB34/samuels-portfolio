import { ScrollMain } from '@/app/_components/scroll-main/ScrollMain'
import { Presentation } from '@/app/_components/presentation/Presentation'
import { AboutMe } from '@/app/_components/about-me/AboutMe'
import { MyExperience } from '@/app/_components/my-experience/MyExperience'
import { MyWork } from '@/app/_components/my-work/MyWork'
import { MyCourses } from '@/app/_components/my-courses/MyCourses'
import { Contact } from '@/app/_components/contact/Contact'

export default function Home() {
	return (
		<ScrollMain>
			<Presentation id={'presentation'} />
			<AboutMe id={'about-me'} />
			<MyExperience id={'experience'} />
			<MyWork id={'pieces'} />
			<MyCourses id={'education'} />
			<Contact id={'contact-me'} />
		</ScrollMain>
	)
}
