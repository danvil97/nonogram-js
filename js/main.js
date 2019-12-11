/* let puzzleArr = [
    [1, 0, 1, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 1, 0],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 1, 0],
    [1, 1, 1, 0, 1, 1, 0],
    [1, 1, 1, 0, 1, 1, 0]
]; */
let sum = 0;
let grid = document.getElementById('grid');


//! Генерация пазла
//function createNewPuzzle(puzzleSize) {
let puzzleSize = 10;
let puzzleArr = [];
for (let j = 0; j < puzzleSize; j++) {
    puzzleArr[j] = [];
    for (let n = 0; n < puzzleSize; n++) {
        puzzleArr[j][n] = getRandomBit(2);
    }
}
//}
//! Создание поля

let gridStr = '';
for (let j = 0; j < puzzleArr.length; j++) {
    gridStr += '<tr>';
    for (let n = 0; n < puzzleArr.length; n++) {
        gridStr += '<td class="cell" id="' + 'r' + j + 'c' + n + '">' + '</td>';
    }
    gridStr += '</tr>'
}
grid.innerHTML = gridStr;
gridStr = '<tr>';

//! Верхняя строка
for (let j = 0; j < puzzleArr.length; j++) {
    gridStr += '<td>'
    for (let n = 0; n < puzzleArr.length; n++) {
        if (puzzleArr[n][j] == 1)
            sum++;
        if (puzzleArr[n][j] == 0 || n == (puzzleArr.length - 1)) {
            if (sum != '0')
                gridStr += sum + '<br>'
            sum = 0;
        }

    }
    gridStr += '</td>'
}
document.getElementById('gridu').innerHTML = gridStr;
gridStr = '';

//! Боковая строка
for (let j = 0; j < puzzleArr.length; j++) {
    gridStr += '<tr><td>'
    for (let n = 0; n < puzzleArr.length; n++) {
        if (puzzleArr[j][n] == 1)
            sum++;
        if (puzzleArr[j][n] == 0 || n == (puzzleArr.length - 1)) {
            if (sum != '0')
                gridStr += sum + ' ';
            sum = 0;
        }

    }
    gridStr += '</tr></td>'
}
document.getElementById('gridl').innerHTML = gridStr;

//! Выдача переключения ячейки
grid.onclick = function (event) {
    let target = event.target; // где был клик?

    if (target.tagName != 'TD')
        return; // не на TD? тогда не интересует
    fillIt(target); // подсветить TD
};

grid.oncontextmenu = function (event) {
    let target = event.target; // где был клик?
    if (event)
        event.preventDefault();
    if (target.tagName != 'TD')
        return; // не на TD? тогда не интересует
    crossIt(target); // подсветить TD
};


function fillIt(td) {
    td.classList.toggle('filled')
}

function crossIt(td) {
    td.classList.toggle('crossed')
}

//? Проверка 
function Check() {
    let curCells = '';
    for (let j = 0; j < puzzleArr.length; j++) {
        for (let n = 0; n < puzzleArr.length; n++) {
            if (document.getElementById('r' + j + 'c' + n).classList.contains('filled'))
                curCells += '1';
            else
                curCells += '0'
        }
    }

    if (curCells == puzzleArr.toString().replace(/\D+/g, ''))
        alert('w0w')
}

//! Генерация случайного числа
function getRandomBit(max) {
    return Math.floor(Math.random() * Math.floor(max));
}