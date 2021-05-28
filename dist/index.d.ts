import { WebPlugin } from '@capacitor/core';
import type { BlobWriteOptions, BlobWriteResult, BlobWriterPlugin, ServerConfig } from './definitions';
export declare class BlobWriterWeb extends WebPlugin implements BlobWriterPlugin {
    constructor();
    getConfig(): Promise<ServerConfig>;
}
declare const BlobWriter: BlobWriterPlugin;
export declare function writeFile(options: BlobWriteOptions): Promise<BlobWriteResult>;
export * from './definitions';
export { BlobWriter };
