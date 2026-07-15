import type { Metadata } from 'next'
import { Open_Sans, Ubuntu_Mono, Inter } from 'next/font/google'
import './globals.scss'

const openSans = Open_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-open-sans',
})

const ubuntuMono = Ubuntu_Mono({
	subsets: ['latin'],
	weight: ['400', '700'],
	display: 'swap',
	variable: '--font-ubuntu-mono',
})

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
})

export const metadata: Metadata = {
	metadataBase: new URL('https://dev.samuel-barragan.com'),
	title: {
		default: 'Samuel Barragán | Senior Full Stack Developer',
		template: '%s | Samuel Barragán',
	},
	description:
		'Senior Full Stack Developer specializing in React, Next.js, Angular, and TypeScript. Building scalable web and mobile applications with a focus on performance and clean architecture.',
	keywords: [
		'Samuel Barragán',
		'Full Stack Developer',
		'Front End Developer',
		'React',
		'Next.js',
		'Angular',
		'TypeScript',
		'Vue.js',
		'React Native',
		'Node.js',
		'Web Developer',
		'Portfolio',
	],
	authors: [{ name: 'Samuel Barragán' }],
	creator: 'Samuel Barragán',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://dev.samuel-barragan.com',
		siteName: 'Samuel Barragán',
		title: 'Samuel Barragán | Senior Full Stack Developer',
		description:
			'Senior Full Stack Developer specializing in React, Next.js, Angular, and TypeScript. Building scalable web and mobile applications.',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Samuel Barragán - Senior Full Stack Developer',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Samuel Barragán | Senior Full Stack Developer',
		description:
			'Senior Full Stack Developer specializing in React, Next.js, Angular, and TypeScript.',
		images: ['/og-image.png'],
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body
				className={`${openSans.variable} ${ubuntuMono.variable} ${inter.variable}`}
			>
				{children}
			</body>
		</html>
	)
}
