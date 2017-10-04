'use strict';
var string = '@234dsfs{100}-{200}{300}++++{9}';

// Рендерим строку в объект
renderObject(string);
function renderObject(str) {
    var reverseObj = {},
        suitableCharacter = false,
        columns = [],
        maskSymbols = [],
        stringOutside = '',
        stringWhithin = '',
        remainder = '';

    for (var letter = 0; letter < str.length; letter++) {

        // перебираем символы в строке
        if (!suitableCharacter) {
            stringWhithin = '';
            stringOutside += str[letter];
        } else {
            stringOutside = '';
            stringWhithin += str[letter];
        }

        // добавляем в нужные свойства
        if (str[letter] === '{' && str[letter]) {
            var clear = stringOutside.slice(0, -1); // очищаем ненужные символы
            columns.push(clear); // Добавляем в массив выбранные символы
            reverseObj.columns = columns;
            suitableCharacter = true;
        } else if (typeof(undefined)) {
            remainder = stringOutside;
        }
        if (str[letter] === '}') {
            var clear_2 = stringWhithin.slice(0, -1); // очищаем ненужные символы
            maskSymbols.push(clear_2); // Добавляем в массив выбранные символы
            reverseObj.maskSymbols = maskSymbols;
            suitableCharacter = false;
        }

    }

    // добавляем остаток
    columns.push(remainder);

    console.log('Полученный объект -  ', reverseObj);
    // передаём полученный результат в другую функцию
    renderString(reverseObj);
}

// Рендерим объект в строку
function renderString(obj) {
    var clearSymbol = '';

    for (var letter = 0; letter < string.length; letter++) {
        // проверяем на наличие свойств
        if (obj.columns[letter] !== undefined && obj.maskSymbols[letter] !== undefined) {
            clearSymbol += obj.columns[letter];
            clearSymbol += '{' + obj.maskSymbols[letter] + '}';
        }
    }

    console.log('Полученная строка - ', clearSymbol);
}
