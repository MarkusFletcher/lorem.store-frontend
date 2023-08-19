export const getLocalStorage = (key: string) => {
	if (typeof localStorage !== 'undefined') {
		const value = localStorage.getItem(key)
		return value ? JSON.parse(value) : null
	}
	return null
}
