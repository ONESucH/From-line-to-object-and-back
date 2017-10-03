'use strict';
// "{2} - {3} :: {12}" => {columns: [2,3,12], maskSymbols: [' - ',' :: ']}

var reverseObj = {};
var str = '@234dsfs{100}-{200}{300}++++{9}';

console.log('str ', str);

a(str);

function a(string) {
    var logic = false,
        columns = [],
        maskSymbols = [],
        html = '',
        html_2 = '';

    for(var a = 0; a < string.length; a++) {
        if (!logic) {
            html_2 = '';
            html += string[a];
        } else {
            html = '';
            html_2 += string[a];
        }

        if(string[a] === '{') {
            var clear = html.slice(0, -1);
            columns.push(clear);
            reverseObj.columns = columns;
            logic = true;
        }
        if(string[a] === '}') {
            var clear_2 = html_2.slice(0, -1);
            maskSymbols.push(clear_2);
            delete maskSymbols[maskSymbols.indexOf('}')];
            reverseObj.maskSymbols = maskSymbols;
            logic = false;
        }

    }

    console.log('Полученный результат первой функции -  ', reverseObj);
   b(reverseObj);
}

function b(obj) {
    var clearSymbol = '';

    for (var a = 0; a < str.length; a++) {
        if (obj.columns[a] !== undefined) {
            clearSymbol += obj.columns[a];
            clearSymbol += '{' + obj.maskSymbols[a] + '}';
            clearSymbol.replace(typeof(undefined), '');
        }
    }

    console.log('Полученный результат второй функции - ', clearSymbol);
}
