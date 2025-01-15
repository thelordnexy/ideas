import { readFile } from 'fs/promises';

export default function FilesHandler($filePath) {
  return async function getFile() {
    //check file type to see if supported
    if (
      /\.CSS$/i.test($filePath) ||
      /\.HTML$/i.test($filePath) ||
      /\.JS$/i.test($filePath) ||
      /(\.JPEG$)/i.test($filePath) ||
      /(\.SVG$)/i.test($filePath) ||
      /(\.PNG$)/i.test($filePath) ||
      /(\.JPG$)/i.test($filePath)
    ) {
      try {
        const fileData = await readFile($filePath); //fetch file
        return fileData;
      } catch (err) {
        throw new Error(`Error fetching file: ${err}`); // if error is encountered during file retrieval
      }
    } //return file
    else return 'Unsupported file type.'; //if file not supported return unsupported
  };
}
