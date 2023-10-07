import fs from 'fs';

function createDirIfNotExist(dir: string) {
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
}

function determineExtension(base64: string) {
    console.log(base64.substring(0,20))
    switch (base64.charAt(0)) {
        case '/': return 'jpg';
        case 'i': return 'png';
        case 'R': return 'gif';
        case 'U': return 'webp';
    }
}

export {
    createDirIfNotExist,
    determineExtension
};