import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import SamLoading from './SamLoading'

const meta: Meta<typeof SamLoading> = {
	title: 'UI Kit/SamLoading',
	component: SamLoading,
	tags: ['autodocs'],
	argTypes: {
		color: { control: 'color' },
		size: { control: 'text' },
		width: { control: 'text' },
	},
}

export default meta
type Story = StoryObj<typeof SamLoading>

export const Default: Story = {
	args: {
		color: '#fff',
		size: '25px',
		width: '3px',
	},
}

export const Large: Story = {
	args: {
		color: '#fff',
		size: '50px',
		width: '5px',
	},
}

export const Small: Story = {
	args: {
		color: '#fff',
		size: '18px',
		width: '2px',
	},
}

export const Blue: Story = {
	args: {
		color: '#075fe4',
		size: '25px',
		width: '3px',
	},
}
