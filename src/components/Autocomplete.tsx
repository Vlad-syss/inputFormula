'use client'

import Select from 'react-select'
import { useAutocomplete } from '../hooks/useAutocomplete'

// Autocomplete component
const Autocomplete = ({
	input,
	setFormula,
}: {
	input: string
	setFormula: (value: string) => void
}) => {
	const { data: suggestions, isLoading } = useAutocomplete(input)

	const handleSelect = (selectedOption: any) => {
		if (selectedOption) {
			setFormula(selectedOption.label)
		}
	}

	return (
		<div className='w-full mt-2'>
			{input && !isLoading && suggestions && suggestions.length > 0 && (
				<Select
					options={suggestions.map((s: any) => ({ label: s, value: s }))}
					onChange={handleSelect}
					placeholder='Select a suggestion'
					className='w-full border border-gray-300 rounded-lg shadow-sm'
					styles={{
						control: base => ({
							...base,
							padding: '10px',
							borderRadius: '0.375rem',
							borderColor: '#E5E7EB', // Tailwind's gray-300 color
						}),
						option: base => ({
							...base,
							padding: '10px',
							backgroundColor: '#fff',
							'&:hover': {
								backgroundColor: '#E5E7EB', // Tailwind's gray-200 color
							},
						}),
					}}
				/>
			)}
			{isLoading && (
				<div className='w-full mt-2 text-gray-500 text-sm'>Loading...</div>
			)}
		</div>
	)
}

export default Autocomplete
