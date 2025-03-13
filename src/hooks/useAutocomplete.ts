import { useQuery } from '@tanstack/react-query'

const fetchAutocomplete = async (query: string) => {
	const res = await fetch(`/api/autocomplete?q=${query}`)
	return res.json()
}

export const useAutocomplete = (query: string) => {
	return useQuery({
		queryKey: ['autocomplete', query],
		queryFn: () => fetchAutocomplete(query),
		enabled: !!query,
	})
}
