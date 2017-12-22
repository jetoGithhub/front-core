export interface BaseStorage<K,V>{
    get(key:K):V | undefined;
    set(key:K, value:V):void;
    clear():void;
    /*key(index: number): string | null;
    readonly length: number;
    remove(key: string): void;
    [index: number]: string;
    [key: K]: any;*/
}

export abstract class BaseBrowserStorage implements BaseStorage< string, string > {
    windowStorage:Storage;

    get( key: string ){ return this.windowStorage.getItem( key ) || undefined }
    set (key: string, value: string ){ this.windowStorage.setItem( key, value ) }
    clear(){ this.windowStorage.destroy() }
}

export abstract class BaseMemoryStorage implements BaseStorage< string, string > {
    memoryStorage :Map< string, string >;

    get(key: string){ return this.memoryStorage.get( key ) }
    set(key: string, value: string){ return this.memoryStorage.set( key, value ) }
    clear(){ return this.memoryStorage.clear( ) }
}
