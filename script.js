let input = document.getElementById('grid-size');
let board = document.getElementById('board');
let cells = document.getElementsByClassName('cell');
let clearButton = document.getElementById('clr-btn')
let pressed = false;
let gridSize;

init();


function drawBoard() {
  if ((input.valueAsNumber < 5) || (input.valueAsNumber > 60)) {
    gridSize = 16;
  } else {
    gridSize = input.valueAsNumber;
  }

  for (let j = 0; j < gridSize; j++) {
    let column = document.createElement('div');
    column.classList.add('column');

    for (let i = 0; i < gridSize; i++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');

      column.appendChild(cell);
    }

    board.appendChild(column);
  }
  addEventListener();
}

function renderPixel(event) {
  if (pressed || event.type === 'mousedown') {
    event.target.style.backgroundColor = 'black';
  }
  event.preventDefault();
}

function addEventListener() {
  for (i = 0; i < cells.length; i++){
    cells[i].addEventListener('mouseover', renderPixel);
    cells[i].addEventListener('mousedown', renderPixel);
  }
}

function resetBoard() {
  board.innerHTML = " ";
  drawBoard();
}



function init() {
  drawBoard();
  document.body.addEventListener('mousedown', (e) => (pressed = true));
  document.body.addEventListener('mouseup', (e) => (pressed = false));
  input.addEventListener('input', resetBoard);
  clearButton.addEventListener('click', resetBoard);
}