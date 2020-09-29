const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    //Деление массива на строки по 10 символов
    let matrix = [];
    for (i = 0; i < expr.length; i += 10) {
        matrix.push(expr.slice(i, i + 10));
    }
    
    //Удаление нулей слева каждой строки и перевод на язык Морзе
    let index = 0;
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === '0') {
                index++;
            } else {
                matrix[i] = matrix[i].slice(index, matrix[i].length).split('10').join('.').split('11').join('-');
                index = 0;
            }
        }
    }

    //Сборка результирующей строки
    let result = '';
    for (i = 0; i < matrix.length; i++) {
        if (matrix[i] === '**********')
            result += ' ';
        else {
            result += MORSE_TABLE[matrix[i]];
        }
    }

    return result;

}

module.exports = {
    decode
}