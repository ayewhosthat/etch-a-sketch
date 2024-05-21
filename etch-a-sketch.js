const availableWidth = 960;

const pageBody = document.querySelector('body');
// add button that lets user resize grid
const pageContent = document.createElement('div');
pageContent.classList.add('content-container');

// now create buttons & the button container
const clearBtn = document.createElement('button');
const resizeBtn = document.createElement('button');

clearBtn.textContent = 'Clear';
resizeBtn.textContent = 'Resize';

const buttons = document.createElement('div')
buttons.classList.add('button-container');
resizeBtn.addEventListener('click', () => {
    const newSize = prompt('Enter new grid size, must be less than 100: ');
    const squares = document.querySelectorAll('.square');
    for (let i = 0; i < squares.length; i++) {
        const square = squares[i];
        containerDiv.removeChild(square);
    }
    });
buttons.appendChild(resizeBtn);
buttons.appendChild(clearBtn);
pageContent.appendChild(buttons);

// fetch container div
const containerDiv = document.querySelector('.container-div')
createSquareGrid(16);

function createSquareGrid(dimension) {
    for (let i = 1; i <= dimension; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 1; j <= dimension; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('mouseenter', () => {
                square.style.backgroundColor = 'lightblue';
            });
            const size = availableWidth/dimension;
            square.style.width = size + 'px';
            square.style.height = size + 'px';
            row.appendChild(square);
        }
        containerDiv.appendChild(row);
    }
    pageContent.appendChild(containerDiv);
    pageBody.appendChild(pageContent);
}