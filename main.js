'use strict';
// "{2} - {3} :: {12}" => {columns: [2,3,12], maskSymbols: [' - ',' :: ']}

var reverseObj = {};
var str = '@234dsfs {223121} - {4}{5}++++ {9}';

a(str);

function a(string) {
    var html = [];

    var regIx = string.match(/\{.+?}/g);

    for(var key in regIx) {
        var rightSymb = regIx[key].slice(0, regIx[key].length-1);
        var leftSymb = rightSymb.slice(1);

        html.push(leftSymb);
    }

    reverseObj.column = html;
    reverseObj.maskSymbol = string.match(/[^a-zA-Z а-яА-Я0-9{}:]/g);

    console.log('Полученный результат первой функции -', reverseObj);
    b(reverseObj);
}


function b(obj) {
    var clearSymbol = '';

    for(var a = 0; a < str.length; a++) {
        if(typeof(obj.column[a] && obj.maskSymbol[a]) === 'undefined') {
            delete obj.column[a];
            delete obj.maskSymbol[a];
        } else {
            clearSymbol += '{' + obj.column[a] + '}';
            clearSymbol += obj.maskSymbol[a];
        }
    }

    console.log('Полученный результат второй функции - ', clearSymbol);
}
