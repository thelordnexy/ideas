import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootLevel = path.join(__dirname, "../");

export default function resolveFilePath($path){
    return path.join(rootLevel, $path);
};