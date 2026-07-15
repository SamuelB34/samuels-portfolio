import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { SamSuccess } from './SamSuccess'

const meta: Meta<typeof SamSuccess> = {
	title: 'UI Kit/SamSuccess',
	component: SamSuccess,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SamSuccess>

export const Default: Story = {}
