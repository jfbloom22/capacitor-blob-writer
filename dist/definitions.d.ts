import { Directory } from '@capacitor/filesystem';
export interface BlobWriterError {
    code?: string;
}
export interface FallbackCallback {
    (error: BlobWriterError): boolean;
}
export interface BlobWriteOptions {
    path: string;
    directory?: Directory;
    data: Blob;
    recursive?: boolean;
    fallback?: boolean | FallbackCallback;
}
export interface BlobWriteResult {
    uri: string;
}
export interface ServerConfig {
    baseUrl: string;
    authToken: string;
}
export interface BlobWriterPlugin {
    getConfig(): Promise<ServerConfig>;
}
