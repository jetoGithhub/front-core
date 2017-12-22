import { BaseStorage } from "./index";
import { BrowserStorageBuilder } from "./browser.builder";
import { LocalStorage } from "./storages/local";
import { SessionStorage } from "./storages/session";
import { MemoryStorage } from "./storages/memory";

export function StorageFactory( type: string ): BaseStorage< string, string > | undefined {
    let browserStorage, storage;
    switch ( type ) {
        case 'local':
            storage = new LocalStorage();
            browserStorage = new BrowserStorageBuilder( storage ).getStorage();
            return browserStorage;
        case 'session':
            storage = new SessionStorage();
            browserStorage = new BrowserStorageBuilder( storage ).getStorage();
            return browserStorage;
        case 'memory':
            storage = new MemoryStorage();
            return storage;
        default:
            return undefined;
    }
}
