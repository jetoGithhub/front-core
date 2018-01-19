import { BaseBrowserStorage } from '../index';

export class LocalStorage extends BaseBrowserStorage {
    windowStorage: Storage = window.localStorage;
}
