
interface MulterFile {
  key: string; // Available using `S3`.
  path: string; // Available using `DiskStorage`.
  mimetype: string;
  originalname: string;
  size: number;
  buffer: Buffer; // actual data
  encoding: string;
}

export = MulterFile;
