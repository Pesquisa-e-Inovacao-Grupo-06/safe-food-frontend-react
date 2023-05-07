import {Cache} from "@/app/domain/protocols/Cache";

export class LocalStorageCache implements Cache {
	removeItem(key: string): void {
		localStorage.removeItem(key);
	}
	setItem(key: string, value: string): boolean {
		localStorage.setItem(key, value);
		return true;
	}
	getItem(key: string): string | null {
		return localStorage.getItem(key);
	}
}
