const fs = require('fs').promises;
const path = require('path');

async function performFile() {
    const directoryPatch = path.join(__dirname, 'test', 'data');
    const directoryOutJSON = path.join(__dirname, 'result.json');

    try {
        const files = await fs.readdir(directoryPatch);
        const txtFiles = files.filter(file => file.endsWith('.txt'));
        const result = await Promise.all(
            txtFiles.map(async (file) => {
                const filePath = path.join(directoryPatch, file);
                const data = await fs.readFile(filePath, 'utf-8');
                return{
                    name: file,
                    raw: data
                };
            })
        );

        await fs.writeFile(directoryOutJSON, JSON.stringify(result, null, 2));
        console.log('Данные сохранены: ', directoryOutJSON);
    }
    catch (err) {
        console.error('Ошибка штения файла: ', err);
    }
}

performFile();