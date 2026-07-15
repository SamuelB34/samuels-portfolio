import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { SamModal } from './SamModal'

const meta: Meta<typeof SamModal> = {
	title: 'UI Kit/SamModal',
	component: SamModal,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SamModal>

export const Default: Story = {
	args: {
		close: () => {},
		children: (
			<div style={{ padding: '24px', color: '#fff' }}>
				<h2>Modal Content</h2>
				<p>This is the modal content area.</p>
			</div>
		),
	},
}
