const gameBox = document.querySelector('.gameBox');
for (let i = 0; i < 3; i++) {
	const row = document.createElement('div');
	row.classList.add('row');
	gameBox.appendChild(row);
	for (let j = 0; j < 3; j++) {
		const cell = document.createElement('div');
		cell.classList.add('cell');
		row.appendChild(cell);
	}
}

const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
	cell.addEventListener('click', (e) => {
		if (turn % 2 == 0) {
			e.target.innerHTML = 'X';
		} else {
			e.target.innerHTML = 'O';
		}
		turn++;
		winnerAndReset('X');
	});
});

let turn = 0;
// function to check if innerHTML in cells is same in row or column or diagonal
// if yes, then return true
// else return false
function check() {
	// check rows
	for (let i = 0; i < 3; i++) {
		if (
			cells[i * 3].innerHTML == cells[i * 3 + 1].innerHTML &&
			cells[i * 3 + 1].innerHTML == cells[i * 3 + 2].innerHTML &&
			cells[i * 3].innerHTML != ''
		) {
			console.log(true);
			return true;
		}
	}
	// check columns
	for (let i = 0; i < 3; i++) {
		if (
			cells[i].innerHTML == cells[i + 3].innerHTML &&
			cells[i + 3].innerHTML == cells[i + 6].innerHTML &&
			cells[i].innerHTML != ''
		) {
			console.log(true);

			return true;
		}
	}
	// check diagonals
	for (let i = 0; i < 3; i++) {
		if (
			cells[0].innerHTML == cells[4].innerHTML &&
			cells[4].innerHTML == cells[8].innerHTML &&
			cells[0].innerHTML != ''
		) {
			console.log(true);
			return true;
		}
		if (
			cells[2].innerHTML == cells[4].innerHTML &&
			cells[4].innerHTML == cells[6].innerHTML &&
			cells[2].innerHTML != ''
		) {
			console.log(true);
			return true;
		}
	}
}
//add alert with winner
//add reset button
function winnerAndReset(winner) {
	if (check() == true) {
		alert(`${winner} won!`);
	}
}
