import { StorageService } from '../_application/ports.ts';
import { TokenKey } from '../types/token-key.type.ts';

export const storageService: StorageService = {
    getItem: (key: TokenKey) => {
        return localStorage.getItem(key);
    },
    setItem: (key: TokenKey, value: string) => {
        localStorage.setItem(key, value);
    },
    removeItem: (key: TokenKey) => {
        localStorage.removeItem(key);
    },
    clear: () => {
        localStorage.clear();
    },
    key: (index: number) => {
        return localStorage.key(index);
    },
    get length() {
        return localStorage.length;
    },
};
