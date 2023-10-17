const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const words = expr.split('**********');  // Разбиваем строку на слова
    const decodedWords = words.map(word => {
        const letters = word.match(/.{1,10}/g);  // Разбиваем слово на буквы (каждая буква закодирована 10 символами)
        const decodedLetters = letters.map(letter => {
            const morseLetter = letter
                .replace(/00/g, '')  // Убираем нули
                .replace(/10/g, '.')  // Заменяем 10 на точку
                .replace(/11/g, '-')  // Заменяем 11 на тире
                .replace(/0/g, '');   // Убираем оставшиеся нули
            return MORSE_TABLE[morseLetter];  // Декодируем букву из объекта MORSE_TABLE
        });
        return decodedLetters.join('');  // Объединяем буквы в слово
    });

    return decodedWords.join(' ');  // Объединяем слова в предложение
}

module.exports = {
    decode
};