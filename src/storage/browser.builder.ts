import { MemoryStorage } from "./storages/memory";
import { LocalStorage } from "./storages/local";
import { SessionStorage } from "./storages/session";

export class BrowserStorageBuilder {

    constructor( private windowStorage:LocalStorage | SessionStorage ){}

    getStorage(){
        try {
            this.windowStorage.set('1', '1');
            this.windowStorage.get('1');
            this.windowStorage.clear();

            return this.windowStorage;
        } catch( e ) {

            return new MemoryStorage();
        }
    }
}
