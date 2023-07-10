# Cat Card
Cat Card Application - Image Processing Application

## Package
Package - npm `(v8.15.0)` / node `(v16.17.0)`

## Dependancies
- axios `(to fetch data from APIs)`
- dotenv `(to maintain .env file and access env. variables)`
- fs `(to write the file)`
- merge-img `(to merge two images)`
- minimist `(to access and assign command line variables)`
- path `(to define the path location of the file)`
- util `(to make promisify to use Async/await syntax)`

## Installation
- Clone this project
- run `npm install` to install the dependancies

## Usage
- run `npm run dev` to execute the program

if you want to change the properties of the image, you can give a cmmandline arguments as follows (try changing variables to get different results),
- `node index.mjs --greeting Hola --who Gapstars --width 400 --height 500 --color White, --size 100` 

## Requirement
1. Fetches an image (from https://cataas.com/) of a cat with some custom text
2. Fetches an image (from https://cataas.com/) of another cat with some more custom text
3. Binds these images together into one image
4. Saves the resulting image as a file
