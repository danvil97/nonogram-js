let testArr = [
    [1, 0, 1, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 0],
    [1, 1, 1, 0, 1, 1, 0],
    [1, 1, 1, 0, 1, 1, 0],
    [1, 1, 1, 0, 1, 1, 0]
];
let sum = 0;
let grid = document.getElementById('grid');

function createNewPuzzle(puzzleSize) {
    let puzzleArr = [];
    for (let j = 0; j < puzzleSize; j++) {
        puzzleArr[j] = [];
        for (let n = 0; n < puzzleSize; n++) {
            puzzleArr[j][n] = 0;
        }
    }
}

//! Создание поля

let gridStr = '';
for (let j = 0; j < testArr.length; j++) {
    gridStr += '<tr>';
    for (let n = 0; n < testArr.length; n++) {
        gridStr += '<td class="cell" id="' + 'r' + j + 'c' + n + '">' + testArr[j][n] + '</td>';
    }
    gridStr += '</tr>'
}
grid.innerHTML = gridStr;
gridStr = '<tr>';

//! Верхняя строка
for (let j = 0; j < testArr.length; j++) {
    gridStr += '<td>'
    for (let n = 0; n < testArr.length; n++) {
        if (testArr[n][j] == 1)
            sum++;
        if (testArr[n][j] == 0 || n == (testArr.length - 1)) {
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
for (let j = 0; j < testArr.length; j++) {
    gridStr += '<tr><td>'
    for (let n = 0; n < testArr.length; n++) {
        if (testArr[j][n] == 1)
            sum++;
        if (testArr[j][n] == 0 || n == (testArr.length - 1)) {
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

    if (target.tagName != 'TD') return; // не на TD? тогда не интересует
    fillIt(target); // подсветить TD
};

function fillIt(td) {
    td.classList.toggle('filled')
}

//? Проверка 
function Check() {
    let curCells = '';
    for (let j = 0; j < testArr.length; j++) {
        for (let n = 0; n < testArr.length; n++) {
            if (document.getElementById('r' + j + 'c' + n).classList.contains('filled'))
                curCells += '1';
            else
                curCells += '0'
        }
    }

    if (curCells == testArr.toString().replace(/\D+/g, ''))
        alert('w0w')
}