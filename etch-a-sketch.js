const availableWidth = 960;
const body = document.querySelector('body');
const pageContent = document.createElement('div');
pageContent.classList.add('content-container');

const grid = createGrid(16); // make the grid

// buttons should belong in their own container
const buttonDiv = document.createElement('div');
buttonDiv.classList.add('button-container');
const resizeButton = document.createElement('button')
resizeButton.textContent = 'Resize';
resizeButton.addEventListener('click', () => {
    const newSize = prompt('Please enter new grid size. Must be at most 100: ');
    if (newSize <= 100) {
        const gridToRemove = document.querySelector('.container-div');
        pageContent.removeChild(gridToRemove);
        const newGrid = createGrid(newSize);
        pageContent.appendChild(newGrid);
    }
});
const resetButton = document.createElement('button');
resetButton.addEventListener('click', () => {
    const gridToRemove = document.querySelector('.container-div');
    pageContent.removeChild(gridToRemove);
    const newGrid = createGrid(16);
    pageContent.appendChild(newGrid);
});
resetButton.textContent = 'Reset';
buttonDiv.appendChild(resizeButton);
buttonDiv.appendChild(resetButton);
pageContent.appendChild(buttonDiv);
pageContent.appendChild(grid);
body.appendChild(pageContent);


function createGrid(size) {
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('container-div');
    for (let i = 1; i <= size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 1; j <= size; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('mouseenter', () => {
                square.style.backgroundColor = 'lightblue';
            });
            const boxSize = availableWidth/size;
            square.style.width = boxSize + 'px';
            square.style.height = boxSize + 'px';
            row.appendChild(square);
        }
        gridContainer.appendChild(row);
    }
    return gridContainer;
}
// const availableWidth = 960;

// const pageBody = document.querySelector('body');
// // add button that lets user resize grid
// const pageContent = document.createElement('div');
// pageContent.classList.add('content-container');

// // now create buttons & the button container
// const clearBtn = document.createElement('button');
// const resizeBtn = document.createElement('button');

// clearBtn.textContent = 'Clear';
// resizeBtn.textContent = 'Resize';

// const buttons = document.createElement('div')
// buttons.classList.add('button-container');
// resizeBtn.addEventListener('click', () => {
//     const newSize = prompt('Enter new grid size, must be less than 100: ');
//     const squares = document.querySelectorAll('.square');
//     for (let i = 0; i < squares.length; i++) {
//         const square = squares[i];
//         containerDiv.removeChild(square);
//     }
//     });
// buttons.appendChild(resizeBtn);
// buttons.appendChild(clearBtn);
// pageContent.appendChild(buttons);

// // fetch container div
// const containerDiv = document.querySelector('.container-div')
// createSquareGrid(16);

// function createSquareGrid(dimension) {
//     for (let i = 1; i <= dimension; i++) {
//         const row = document.createElement('div');
//         row.classList.add('row');
//         for (let j = 1; j <= dimension; j++) {
//             const square = document.createElement('div');
//             square.classList.add('square');
//             square.addEventListener('mouseenter', () => {
//                 square.style.backgroundColor = 'lightblue';
//             });
//             const size = availableWidth/dimension;
//             square.style.width = size + 'px';
//             square.style.height = size + 'px';
//             row.appendChild(square);
//         }
//         containerDiv.appendChild(row);
//     }
//     pageContent.appendChild(containerDiv);
//     pageBody.appendChild(pageContent);
// }