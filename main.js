'use strict';
// "{2} - {3} :: {12}" => {columns: [2,3,12], maskSymbols: [' - ',' :: ']}

var reversObj = {};
var str = '{2} - {3} :: {12}';

a(str);

function a(string) {
    reversObj.column = string.match(/\d+/g);
    reversObj.maskSymbol = string.match(/[^a-zA-Z а-яА-Я0-9{}]/g);

    console.log('Полученный результат первой функции -', reversObj);
    b(reversObj);
}

function b(obj) {
    var html = '',
        clearSymbol = '',
        result = '';

    for(var a = 0; a < str.length; a++) {
       if (typeof(obj.column[a]) !== 'undefined') {
           clearSymbol += '{' + obj.column[a] + '}';
           clearSymbol += obj.maskSymbol[a];
       } else {
           return '';
       }
        console.log('Полученный результат второй функции -', clearSymbol);
    }
}