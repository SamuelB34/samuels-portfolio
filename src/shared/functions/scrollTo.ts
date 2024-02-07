export const scrollToElement = (view: string) => {
	const element = document.getElementById(view)
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' })
	}
}
