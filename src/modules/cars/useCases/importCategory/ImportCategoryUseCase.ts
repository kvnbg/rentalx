import { parse as csvParse } from "csv-parse";
import fs from "fs";

export class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);
    const parseFile = csvParse();
    stream.pipe(parseFile);

    parseFile.on("data", async (line) => {
      const [name, description] = line;
      console.log(name, description);
    });
  }
}
