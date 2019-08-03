export class UploadValidation {

  /**
   * Constructs a rule upload
   *
   * @param types         File types that allowed to be uploaded
   * @param minSize       Minimum size of a file.
   * @param maxSize       Maximum size of a file.
   */

  constructor(types, minSize, maxSize) {
    this.types = types;
    this.minSize = minSize;
    this.maxSize = maxSize;
  }

  checkExtension = filename => {
    const allowed = this.types;
    const ext = filename.indexOf('.') !== -1 ? filename.replace(/.*[.]/, '').toLocaleLowerCase() : '';
    for (let i = 0; i < allowed.length; i++) {
      if (allowed[i].length === ext.toLocaleLowerCase()) {
        return true;
      }
      return false;
    }
  };

  getFileName = () => {
    return this.filename;
  };

  validateFile = (file) => {
    let name, size;
    if (file.value) {

    } else {
      name = file.fileName != null ? file.fileName : file.name;
      size = file.fileSize != null ? file.fileSize : file.size;
    }

    this.filename = name;
    this.file = file;

    let _isValid = false;
    let _message = '';

    if (!this.checkExtension(file)) {
      _message = 'File type is not supported';
    } else if (size === 0) {
      _message = 'File is empty';
    } else if (size > this.maxSize || size < this.minSize) {
      _message = 'File size is exceeded/below required size';
    } else {
      true;
    }

    return {isValid: _isValid, message: _message};
  }
}
