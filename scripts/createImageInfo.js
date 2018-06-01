const fs = require('fs');
const sharp = require('sharp');

let files = [];
const basePath = '../photos';
const outputPath = '../src/images';


fs.readdirSync(basePath).forEach(folder => {
    const filesName = fs.readdirSync(`${basePath}/${folder}`);
    filesName.forEach((file) => {
        const image = `${basePath}/${folder}/${file}`;
        sharp(image).resize(800).toFile(`${outputPath}/thumbnails/${file}`);
        fs.createReadStream(image).pipe(fs.createWriteStream(`${outputPath}/photos/${file}`));
    });
    files = files.concat(filesName.map(file => `images/photos/${file}`));
});

fs.writeFile("../src/data/files.json", JSON.stringify(files), 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
