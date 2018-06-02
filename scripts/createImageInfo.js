const fs = require('fs');
const sharp = require('sharp');
const _ = require('lodash');

const basePath = '../photos';
const outputPath = '../src/images';


Promise.all(fs.readdirSync(basePath).map(folder => {
    const filesName = fs.readdirSync(`${basePath}/${folder}`);
    return Promise.all(filesName.map((file) => {
        const image = `${basePath}/${folder}/${file}`;
        sharp(image).resize(1280).toFile(`${outputPath}/thumbnails/${folder}/${file}`);
        fs.createReadStream(image).pipe(fs.createWriteStream(`${outputPath}/photos/${folder}/${file}`));
        
        // base64 src
        return new Promise((resolve) => {
            sharp(image).resize(150).toFile(`${outputPath}/base64/${folder}/${file}`, () => {
                const base64 = fs.readFileSync(`${outputPath}/base64/${folder}/${file}`, 'base64');
                resolve({
                    photo: `images/photos/${folder}/${file}`,
                    thumbnail: `images/thumbnails/${folder}/${file}`,
                    base64,
                });
            });
        })
        
    }));
})).then((files) => {
    fs.writeFile("../src/data/files.json", JSON.stringify(_.flatten(files)), 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
    
        console.log("The file was saved!");
    });
}, (error) => {
    console.log(error);
});
