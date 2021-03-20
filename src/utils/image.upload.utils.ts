import { extname } from "path";

export const modFileName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const ext = extname(file.originalname);

    const randomName = Array(4)
    .fill(null)
    .map(() => Math.round(Math.random() * 10).toString())
    .join('');

    callback(null, `${name}${randomName}${ext}`);

}