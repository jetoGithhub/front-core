import { BaseMemoryStorage } from "../index";

export class MemoryStorage extends BaseMemoryStorage {
    memoryStorage: Map< string, string > = new Map();
}
