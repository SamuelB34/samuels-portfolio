import styles from './contact.module.scss'
import { SamInput } from '@/shared/ui-kit/sam-input/SamInput'
import { SamButton } from '@/shared/ui-kit/sam-button/SamButton'

interface Props {
	id: string
}

export const Contact = ({ id = 'contact' }: Props) => {
	return (
		<div className={styles['contact']} id={id}>
			{/*Left*/}
			<div className={styles['contact__left']}>
				<span className={styles['contact__left--title']}>Contact</span>
				<span className={styles['contact__left--problem']}>
					Got a problem to solve?
				</span>
				<span className={styles['contact__left--help']}>
					Let me help – Reach Out with Your Queries!
				</span>
			</div>

			<div className={styles['contact__right']}>
				<div className={styles['contact__right--input-container']}>
					<label>Full Name</label>
					<SamInput name={'full_name'} placeholder={'John Doe'} />
				</div>
				<div className={styles['contact__right--input-container']}>
					<label>Email</label>
					<SamInput name={'full_name'} placeholder={'email@example.com'} />
				</div>
				<div className={styles['contact__right--input-container']}>
					<label>Message</label>
					<SamInput
						name={'full_name'}
						placeholder={'Anything you want to say, can be written here.'}
					/>
				</div>
				<div className={styles['contact__right--bottom']}>
					<a href={'mailto:samuel.barragan34@hotmail.com'}>
						samuel.barragan34@hotmail.com
					</a>
					<div className={styles['contact__right--bottom__btn-container']}>
						<SamButton type={'button'}>
							<>Contact me</>
						</SamButton>
					</div>
				</div>
			</div>
		</div>
	)
}
