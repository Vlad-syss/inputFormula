'use client' // Ensure this is a Client Component

import { ReactNode } from 'react'
import { useFormulaStore } from '../hooks/useFormulaStore'

interface FormulaProviderProps {
	children: ReactNode
}

const FormulaProvider = ({ children }: FormulaProviderProps) => {
	const { formula, setFormula } = useFormulaStore()

	return <div className='formula-provider'>{children}</div>
}

export default FormulaProvider
