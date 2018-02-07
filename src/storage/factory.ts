import { BaseStorage } from './index';
import { BrowserStorageBuilder } from './browser.builder';
import { LocalStorage } from './storages/local';
import { SessionStorage } from './storages/session';
import { MemoryStorage } from './storages/memory';

export type StorageType = 'local' | 'session' | 'memory';

export function StorageFactory( type: StorageType ): BaseStorage< string, string > {
    var storage;
    switch ( type ) {
        case 'local':
            storage = new LocalStorage();
            return new BrowserStorageBuilder( storage ).getStorage();
        case 'session':
            storage = new SessionStorage();
            return new BrowserStorageBuilder( storage ).getStorage();
        case 'memory': 
            return new MemoryStorage;
        default: return invalidStorageType(type);
    }
}

function invalidStorageType(type: StorageType): never {
  throw new TypeError(`Unexpected storage type: ${type}`);
}
