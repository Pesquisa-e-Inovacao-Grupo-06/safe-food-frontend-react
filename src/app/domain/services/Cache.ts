export interface Cache {
	setItem(key: string, value: string): boolean;
	getItem(key: string): string | null;
}
