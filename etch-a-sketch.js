let pageBody = document.querySelector('body');
// fetch container div
let containerDiv = document.querySelector('.container-div')
const gridSize = 16;

function createSquareGrid(dimension) {
    for (let i = 1; i <= dimension; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 1; j <= dimension; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        containerDiv.appendChild(row);
    }
    pageBody.appendChild(containerDiv);
}

createSquareGrid(gridSize);