let input = document.getElementById('grid-size');
let board = document.getElementById('board');
let cells = document.getElementsByClassName('cell');
let clearButton = document.getElementById('clr-btn')
let eraseButton = document.getElementById('ers-btn');
let pressed = false;
let boardSize = board.clientWidth;
let text = 'erase';
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
    let rgb = (event.target.style.backgroundColor).match(/\d+/g);
    if (!rgb && text === 'erase') {
      event.target.style.backgroundColor = 'rgb(229,229,229)';  
    } else if(text === 'erase'){
      event.target.style.backgroundColor = `rgb(${+rgb[0] - 26},${+rgb[1] - 26},${+rgb[2] - 26})`;
    } else if(rgb && text === 'sketch'){
      event.target.style.backgroundColor = `rgb(${+rgb[0] + 26},${+rgb[1] + 26},${+rgb[2] + 26})`;
    }
    
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

function changeColorAndText() {
  text = text == 'erase' ? 'sketch' : 'erase';
  eraseButton.textContent = text;
}

function init() {
  drawBoard();
  eraseButton.textContent = text;
  document.body.addEventListener('mousedown', (e) => (pressed = true));
  document.body.addEventListener('mouseup', (e) => (pressed = false));
  input.addEventListener('input', resetBoard);
  clearButton.addEventListener('click', resetBoard);
  eraseButton.addEventListener('click', changeColorAndText);
}