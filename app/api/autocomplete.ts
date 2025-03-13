export default function handler(req: any, res: any) {
	const { query } = req.query

	const suggestions = ['sin', 'cos', 'tan', 'log', 'sqrt', 'abs'].filter(item =>
		item.includes(query)
	)

	res.status(200).json({ suggestions })
}
