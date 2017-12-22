import { BaseStorage } from "./index";
import { BrowserStorageBuilder } from "./browser.builder";
import { LocalStorage } from "./storages/local";
import { SessionStorage } from "./storages/session";
import { MemoryStorage } from "./storages/memory";

export function StorageFactory( type: string ): BaseStorage< string, string > | undefined {
    let storage;
    switch ( type ) {
        case 'local':
            storage = new LocalStorage();
            return  new BrowserStorageBuilder( storage ).getStorage();
        case 'session':
            storage = new SessionStorage();
            return new BrowserStorageBuilder( storage ).getStorage();
        case 'memory':
            return new MemoryStorage();
        default:
            return undefined;
    }
}
