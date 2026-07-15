import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { SamInput } from './SamInput'

const meta: Meta<typeof SamInput> = {
	title: 'UI Kit/SamInput',
	component: SamInput,
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: 'select',
			options: ['text', 'number', 'date', 'email'],
		},
		input_mode: {
			control: 'select',
			options: ['text', 'email', 'search', 'tel', 'url', 'none', 'numeric', 'decimal'],
		},
		text_align: {
			control: 'select',
			options: ['left', 'center'],
		},
		disabled: { control: 'boolean' },
		error: { control: 'boolean' },
		placeholder: { control: 'text' },
		value: { control: 'text' },
		error_msg: { control: 'text' },
		maxLength: { control: 'number' },
	},
}

export default meta
type Story = StoryObj<typeof SamInput>

export const Default: Story = {
	args: {
		name: 'full_name',
		placeholder: 'John Doe',
		type: 'text',
		input_mode: 'text',
		text_align: 'left',
	},
}

export const WithValue: Story = {
	args: {
		name: 'full_name',
		placeholder: 'John Doe',
		value: 'Samuel Barragán',
		type: 'text',
	},
}

export const Email: Story = {
	args: {
		name: 'email',
		placeholder: 'email@example.com',
		type: 'email',
		input_mode: 'email',
	},
}

export const Error: Story = {
	args: {
		name: 'email',
		placeholder: 'email@example.com',
		type: 'email',
		input_mode: 'email',
		error: true,
		error_msg: 'Invalid email address',
	},
}

export const Disabled: Story = {
	args: {
		name: 'full_name',
		placeholder: 'John Doe',
		disabled: true,
	},
}
