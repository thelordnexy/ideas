import handleGetFile from './handleGetFile.js';

export default class FilesHandler {
  constructor($filePath) {
    this.filePath = $filePath;
  }

  getFile() {
    if (
      /\.CSS$/i.test(this.filePath) ||
      /\.HTML$/i.test(this.filePath) ||
      /\.JS$/i.test(this.filePath) ||
      /(\.JPEG$)/i.test(this.filePath) ||
      /(\.SVG$)/i.test(this.filePath) ||
      /(\.PNG$)/i.test(this.filePath) ||
      /(\.JPG$)/i.test(this.filePath)
    )
      return handleGetFile(this.filePath);
    else return 'Unsupported file type.';
  }
}
