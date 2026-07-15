import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { SamButton } from './SamButton'

const meta: Meta<typeof SamButton> = {
	title: 'UI Kit/SamButton',
	component: SamButton,
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: 'select',
			options: ['button', 'reset', 'submit'],
		},
		disabled: { control: 'boolean' },
		loading: { control: 'boolean' },
		success: { control: 'boolean' },
	},
}

export default meta
type Story = StoryObj<typeof SamButton>

export const Default: Story = {
	args: {
		type: 'button',
		children: <>Contact me</>,
	},
}

export const Disabled: Story = {
	args: {
		type: 'button',
		disabled: true,
		children: <>Contact me</>,
	},
}

export const Loading: Story = {
	args: {
		type: 'button',
		loading: true,
		children: <>Contact me</>,
	},
}

export const Success: Story = {
	args: {
		type: 'button',
		success: true,
		children: <>Contact me</>,
	},
}
