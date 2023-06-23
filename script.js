let input = document.getElementById('grid-size');
let board = document.getElementById('board');
let cells = document.getElementsByClassName('cell');
let clearButton = document.getElementById('clr-btn')
let pressed = false;
let boardSize = board.clientWidth;
let gridSize;

init();


function drawBoard() {
  if ((input.valueAsNumber < 5) || (input.valueAsNumber > 100)) {
    gridSize = 16;
  } else {
    gridSize = input.valueAsNumber;
  }
  // let cellWidth = boardSize / gridSize;
  let cellWidth = 100 / gridSize;
  for (let i = 0; i < gridSize ** 2; i++){
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.width = `${cellWidth}%`;
    cell.style.height = `${cellWidth}%`;
    board.appendChild(cell);
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