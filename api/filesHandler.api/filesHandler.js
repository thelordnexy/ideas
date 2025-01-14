import handleCSSFiles from './handleCSSFiles.js';
import handleJSFiles from './handleJSFiles.js';
import handleHTMLFiles from './handleHTMLFiles.js';
import handleImageFiles from './handleImageFiles.js';

export default class filesHandler {
  constructor(filePath) {
    this.filePath = filePath;
  }

  getFile() {
    if (/\.CSS$/i.test(this.filePath)) return handleCSSFiles();
    else if (/\.HTML$/i.test(this.filePath)) return handleHTMLFiles();
    else if (/\.JS$/i.test(this.filePath)) return handleJSFiles();
    else if (
      /(\.JPEG$)/i.test(this.filePath) ||
      /(\.SVG$)/i.test(this.filePath) ||
      /(\.PNG$)/i.test(this.filePath) ||
      /(\.JPG$)/i.test(this.filePath)
    )
      return handleImageFiles();
    else return 'Unsupported file type.';
  }
}
