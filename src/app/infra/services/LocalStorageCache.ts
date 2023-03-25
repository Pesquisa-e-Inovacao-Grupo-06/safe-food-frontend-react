import {Cache} from "@/app/domain/services/Cache";

export class LocalStorageCache implements Cache {
	setItem(key: string, value: string): boolean {
		localStorage.setItem(key, value);
		return true;
	}
	getItem(key: string): string | null {
		return localStorage.getItem(key);
	}
}
