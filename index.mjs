import minimist from 'minimist';
import catService from './services/catServices.mjs'
import imageProcessor from './imageProcessor.mjs';
import logger from './utils/logger.mjs';

const argv = minimist(process.argv.slice(2))
let { greeting = 'Hello', who = 'You', width = 400, height = 500, color = 'Pink', size = 100 } = argv;
// let { greeting, who, width, height, color, size } = argv;
let imageBuffers = [];

const initiateProcess = async () => {
    try {
        const firstBody = await catService.getCat(greeting, width, height, color, size)
        logger.info('Received first image')

        let bufferObjectOne = { src: Buffer.from(firstBody, 'binary'), x: 0, y: 0 }
        imageBuffers.push(bufferObjectOne)

        const secondBody = await catService.getCat(who, width, height, color, size)
        logger.info('Received second image')
        
        let bufferObjectTwo = { src: Buffer.from(secondBody, 'binary'), x: 0, y: 0 }
        imageBuffers.push(bufferObjectTwo)

        logger.info('Processing images')
        await imageProcessor.combineImages(imageBuffers)

        logger.info('The file was saved!');
    } catch (error) {
        logger.error(error)
    }
}

initiateProcess()