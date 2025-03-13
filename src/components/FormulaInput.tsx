'use client' // Mark this component as a client-side component

import { useEffect, useState } from 'react'
import { useAutocomplete } from '../hooks/useAutocomplete'
import { useFormulaStore } from '../hooks/useFormulaStore'
import Tag from './Tag'

const FormulaInput = () => {
	const { formula, setFormula } = useFormulaStore()
	const [input, setInput] = useState('')

	const { data: suggestions, isLoading } = useAutocomplete(input)

	useEffect(() => {
		setFormula(input)
	}, [input, setFormula])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value)
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Backspace' && input.length === 0) {
			setFormula(formula.slice(0, -1))
		}
	}

	return (
		<div className='w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg'>
			<h1 className='text-2xl font-semibold text-gray-700 mb-4'>
				Formula Input
			</h1>
			<div className='relative'>
				<input
					type='text'
					value={input}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					placeholder='Enter formula...'
					className='px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full'
				/>
				{input && !isLoading && suggestions && suggestions.length > 0 && (
					<div className='absolute top-12 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10'>
						{suggestions.map((suggestion: string, index: number) => (
							<div
								key={index}
								onClick={() => setInput(suggestion)}
								className='px-4 py-2 cursor-pointer hover:bg-gray-100'
							>
								{suggestion}
							</div>
						))}
					</div>
				)}
			</div>
			<div className='mt-4'>
				{formula.split(/([+\-*/^() ])/).map((part, index) => {
					if (/[+\-*/^()]/.test(part)) {
						return (
							<span
								key={index}
								className='px-2 py-1 mx-1 text-white bg-blue-500 rounded-full'
							>
								{part}
							</span>
						)
					} else if (/\d+/.test(part)) {
						return <Tag key={index} label={part} />
					} else {
						return <span key={index}>{part}</span>
					}
				})}
			</div>
		</div>
	)
}

export default FormulaInput
