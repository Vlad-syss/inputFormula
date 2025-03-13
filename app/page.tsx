import FormulaInput from '@/src/components/FormulaInput'

export default function Home() {
	return (
		<main className='flex flex-col items-center justify-center min-h-screen bg-gray-50'>
			<div className='container w-full max-w-3xl p-8 bg-white rounded-lg shadow-xl'>
				<FormulaInput />
			</div>
		</main>
	)
}
