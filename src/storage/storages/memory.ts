import { BaseMemoryStorage } from '../index';

export class MemoryStorage extends BaseMemoryStorage {
    memoryStorage = new Map<string, string>();
}