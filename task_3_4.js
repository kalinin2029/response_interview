const fs = require('fs') //работа с файлами
const path = require('path') //работа с директориями

const directoryPatch = path.join(__dirname, 'test', 'data'); //указываем путь к нужной нам папке

try {
    const files = fs.readdirSync(directoryPatch); //читаем все файлы по указанному пути
    const textFiles = files.filter(file => file.endsWith('.txt')); //фильтруем оставляем только тхт файлы

    let fulltext = '';

    const result = textFiles.map(file => {               //чтение содержимого файлов
        const filepath = path.join(directoryPatch, file); // по дирректории получаем наименование файла
        const data = fs.readFileSync(filepath, 'utf-8'); //смотрим что в файле с utf-8
        return {  //получаем результат
            name: file,
            raw: data,
            fulltext: fulltext += data +' ' //очень плохо, так недалть нельзя.
        };
    });

    console.log(result); //выводим результат
}
catch (err) { // если ошибка
    console.error('Ошибка', err);
}