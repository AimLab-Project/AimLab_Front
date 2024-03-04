class _LocalStorage {
	get(key: string) {
		const value = localStorage.getItem(key);
		if (value) {
			return JSON.parse(value);
		}
		return null;
	}

	set(key: string, value: any) {
		if (value) {
			localStorage.setItem(key, JSON.stringify(value));
		}
	}

	remove(key: string) {
		localStorage.removeItem(key);
	}
}

export const LocalStorage = new _LocalStorage();
