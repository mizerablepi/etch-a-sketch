let gridSize = document.getElementById('grid-size').valueAsNumber;
let board = document.getElementById('board');
let cells = document.getElementsByClassName('cell');
let pressed = false;

drawBoard();

for (i = 0; i < cells.length; i++){
  cells[i].addEventListener('mouseover', renderPixel);
  cells[i].addEventListener('mousedown', renderPixel);
}

board.addEventListener('mousedown', (e) => (pressed = true));
board.addEventListener('mouseup', (e) => (pressed = false));


function drawBoard() {
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
}

function renderPixel(event) {
  if (pressed || event.type === 'mousedown') {
    event.target.style.backgroundColor = 'black';
  }
  //event.stopPropagation(); //Doesn't stop the dragging thing infact it stops the mouseover event from happening
}

//Below is the code i first wrote where i used event propagation to detect mousedown and mouseover
//on the div containing the cells. But then i read somewhere that i could stop the dragging thing
//by calling stopPropagation so rewrote the code and added eventListeners to every cell.

// board.addEventListener('mouseover', e => {
//   if (e.target.className == 'cell' && pressed == true) {
//     e.target.style.backgroundColor = 'black';
//   }
// });
 
// board.addEventListener('mousedown', (e) => {
//   pressed = true;
//   if (e.target.className == 'cell' && pressed == true) {
//     e.target.style.backgroundColor = 'black';
//   }
// });
// board.addEventListener('mouseup', () => { pressed = false; });