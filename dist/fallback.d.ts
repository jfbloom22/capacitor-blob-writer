import { Directory } from '@capacitor/filesystem';
declare function writeFileViaBridge(directory: Directory, path: string, data: Blob, recursive?: boolean): Promise<string>;
declare const _default: typeof writeFileViaBridge;
export default _default;
