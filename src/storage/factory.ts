import { BaseStorage } from "./index";
import { BrowserStorageBuilder } from "./browser.builder";
import { LocalStorage } from "./storages/local";
import { SessionStorage } from "./storages/session";
import { MemoryStorage } from "./storages/memory";

export function StorageFactory( type: string ): BaseStorage< string, string > | undefined {
    let storage;
    switch ( type ) {
        case 'local':
            storage = new BrowserStorageBuilder( storage ).getStorage();
            return storage;
        case 'session':
            storage = new BrowserStorageBuilder( storage ).getStorage();
            return storage;
        case 'memory':
            storage = new MemoryStorage();
            return storage;
        default:
            return undefined;
    }
}
