import { useState } from 'react'
import TagDropdown from './TagDropdown'

const Tag = ({ label }: { label: string }) => {
	const [showDropdown, setShowDropdown] = useState(false)

	return (
		<span
			className='inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-600'
			onClick={() => setShowDropdown(!showDropdown)}
		>
			{label}
			{showDropdown && <TagDropdown tag={label} />}
		</span>
	)
}

export default Tag
