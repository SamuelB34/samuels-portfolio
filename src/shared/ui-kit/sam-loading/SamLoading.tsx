import sam_styles from './sam-loading.module.scss'

interface Props {
	color?: string
	size?: string
	width?: string
}

function SamLoading({ color = '#fff', size = '25px', width = '3px' }: Props) {
	const styles = {
		borderTop: `${width} solid ${color}`,
		borderRight: `${width} solid transparent`,
		width: size,
		height: size,
	}
	return (
		<>
			<div className={sam_styles['spinner']} style={styles}></div>
		</>
	)
}

export default SamLoading
