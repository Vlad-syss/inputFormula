const TagDropdown = ({ tag }: { tag: string }) => {
	return (
		<div className='absolute mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg'>
			<button className='w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100'>
				Edit {tag}
			</button>
			<button className='w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100'>
				Remove
			</button>
		</div>
	)
}

export default TagDropdown
