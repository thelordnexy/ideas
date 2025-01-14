import { readFile } from 'fs/promises';

export default async function handleGetFile(filePath) {
  const fileData = await readFile(filePath);
  return fileData;
}
