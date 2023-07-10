import { writeFile } from 'fs';
import { join } from 'path';
import { promisify } from 'util';
import mergeImg from 'merge-img';
import logger from './utils/logger.mjs';

const combineImages = async (buffers) => {
    const img = await mergeImg(buffers)

    const getBufferAsync = promisify(img.getBuffer);
    const writeFileAsync = promisify(writeFile);

    const buffer = await getBufferAsync.call(img, 'image/jpeg');
    const fileOut = join(process.cwd(), '/cat-card.jpg');

    logger.info('Images combined')

    await writeFileAsync.call(null, fileOut, buffer, 'binary');
}

export default { combineImages }