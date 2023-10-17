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
    // Разбить строку на буквы
    const letterLength = 10;
    const letters = [];
    for (let i = 0; i < expr.length; i += letterLength) {
        letters.push(expr.slice(i, i + letterLength));
    }

    // Заменить '10' на точку (.) и '11' на тире (-)
    const decodedLetters = letters.map(letter => {
        return letter
            .replace(/10/g, '.')
            .replace(/11/g, '-');
    });

    // Преобразовать каждую букву с использованием MORSE_TABLE и объединить их
    const decodedMessage = decodedLetters.map(letter => {
        if (letter === '**********') {
            return ' '; // Пробел
        } else {
            return MORSE_TABLE[letter];
        }
    }).join('');

    return decodedMessage;
}

module.exports = {
    decode
};