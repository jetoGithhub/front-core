import { BaseBrowserStorage } from "../index";

export class SessionStorage extends BaseBrowserStorage {
    windowStorage:Storage = window.sessionStorage;
}
