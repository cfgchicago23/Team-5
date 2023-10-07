import fs from 'fs';

function createDirIfNotExist(dir: string) {
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
}

function findAvailableFileName(dir: string, filename: string) {
    const baseName = filename.split('.')[0];
    const takenNumbers = fs.readdirSync(dir, { withFileTypes: true })
        .filter(f => f.isDirectory())
        .filter(f => f.name.startsWith(baseName))
        .map(swdir => swdir.name.slice(-1))
        .map(parseInt);

    let number = 0;
    while (number++ in takenNumbers);
}

export {
    createDirIfNotExist,
    findAvailableFileName
};