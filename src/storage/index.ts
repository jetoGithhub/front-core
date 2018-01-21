export interface BaseStorage< K, V> {
    get(key: K): V | undefined;
    set(key: K, value: V): void;
    clear(): void;
    remove(key: string): void;
    /*key(index: number): string | null;
    readonly length: number;
    remove(key: string): void;
    [index: number]: string;
    [key: K]: any;*/
}

export abstract class BaseBrowserStorage implements BaseStorage< string, (string | object) > {
    windowStorage: Storage;

    get(key: string) { return this.windowStorage.getItem(key) || undefined; }
    set(key: string, value: string) { this.windowStorage.setItem(key, value); }
    clear() { this.windowStorage.clear(); }
    remove(key: string){ this.windowStorage.removeItem(key); }
}

export abstract class BaseMemoryStorage implements BaseStorage< string, string > {
    memoryStorage: Map<string, string>;

    get(key: string) { return this.memoryStorage.get(key); }
    set(key: string, value: string) { return this.memoryStorage.set(key,value); }
    clear() { return this.memoryStorage.clear(); }
    remove(key: string){ this.memoryStorage.delete(key); }
}
