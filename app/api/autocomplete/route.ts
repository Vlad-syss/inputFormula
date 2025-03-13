import { NextResponse } from 'next/server'

const mockSuggestions = ['Revenue', 'Profit', 'Cost', 'Growth']

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url)
	const query = searchParams.get('q')?.toLowerCase() || ''

	const results = mockSuggestions.filter(s => s.toLowerCase().includes(query))

	return NextResponse.json(results)
}
