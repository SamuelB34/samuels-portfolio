import { NextRequest, NextResponse } from 'next/server'

const sanitize = (value?: string) =>
	value?.replace(/[^\x20-\x7E]/g, '').trim()

const CONTACT_SERVER_URL = sanitize(process.env.CONTACT_SERVER_URL)
const CONTACT_API_KEY = sanitize(process.env.CONTACT_API_KEY)

export async function POST(req: NextRequest) {
	if (!CONTACT_SERVER_URL || !CONTACT_API_KEY) {
		return NextResponse.json(
			{ error: 'Server is not configured for contact requests' },
			{ status: 500 },
		)
	}

	const body = await req.json()

	const { name, email, phone, message } = body

	if (!name || name.length < 2) {
		return NextResponse.json(
			{ error: 'Name must be at least 2 characters' },
			{ status: 400 },
		)
	}

	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return NextResponse.json(
			{ error: 'A valid email is required' },
			{ status: 400 },
		)
	}

	if (!message || message.length === 0) {
		return NextResponse.json(
			{ error: 'Message cannot be empty' },
			{ status: 400 },
		)
	}

	try {
		const response = await fetch(`${CONTACT_SERVER_URL}/contact`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': CONTACT_API_KEY,
			},
			body: JSON.stringify({
				name,
				email,
				phone: phone || '',
				message,
				source: 'portfolio',
			}),
		})

		const data = await response.json()

		if (!response.ok) {
			return NextResponse.json(data, { status: response.status })
		}

		return NextResponse.json(data, { status: 200 })
	} catch (error) {
		console.error('[contact proxy] Fetch to contact-server failed:', error)
		return NextResponse.json(
			{ error: 'Failed to process contact request' },
			{ status: 500 },
		)
	}
}
