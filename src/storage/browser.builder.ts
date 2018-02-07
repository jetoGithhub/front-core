import { BaseBrowserStorage } from './index';
import { MemoryStorage } from './storages/memory';
import { LocalStorage } from './storages/local';
import { SessionStorage } from './storages/session';

export class BrowserStorageBuilder {

    constructor(private storage: BaseBrowserStorage) {}

    getStorage() {
        try {
            this.storage.set('1', '1');
            this.storage.get('1');
            this.storage.clear();

            return this.storage;
        } catch (e) {
            console.log(e);
            return new MemoryStorage();
        }
    }
}
