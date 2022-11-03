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
	});
});

let turn = 0;
