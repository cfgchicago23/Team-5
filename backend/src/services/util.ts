import fs from 'fs';

function createDirIfNotExist(dir: string) {
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
}

function findAvailableFileName(dir: string, prefix: string) {
    const takenNumbers = fs.readdirSync(dir, { withFileTypes: true })
        .filter(f => f.name.startsWith(prefix))
        .map(f => f.name.split("_")[1]);
    
    let number = 0;
    while (number++ in takenNumbers);

    return prefix + "_" + number;
}

export {
    createDirIfNotExist,
    findAvailableFileName
};