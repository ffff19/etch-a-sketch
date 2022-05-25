let squares = 16;
let squareNumber = document.querySelector('.squareNumber');

function makeSquares(squares) {
	let i = 0, j = 0;
	while (j < squares) {
		const container = document.querySelector('#container');
		const row = document.createElement('div');
		row.setAttribute('id', 'row');
		row.className = "row";
		row.id="row" + String(j);

		container.appendChild(row);
		j += 1;
	}

	j = 0;
	while (j < squares) {
		r = "#" + "row" + String(j)
		const row = document.querySelector(r);

		while (i < squares) {
			const square = document.createElement('div');

			square.classList.add('square');

			row.appendChild(square);

			/* Hovering effect */
			square.addEventListener("mouseover", event => {
				square.style.background = 'brown';
			});

			square.addEventListener("mouseout", event => {
				square.style.background = 'pink';
			});
			/* End hovering effect */

			i += 1;
		}

		i = 0;
		j += 1;
	}
}

makeSquares(squares);

squareNumber.addEventListener('click', e => {
	j = 0;
	while(j < squares) {
		r = "#" + "row" + String(j)
		const row = document.querySelector(r);
		let i = 0;
		while (row.children[i]) {
			let firstNode = row.children[0];
			row.removeChild(firstNode)
		}
		j += 1;
	}
	let n = prompt("Please enter the number of squares");
	if (n <= 100) {
		squares = n;
		makeSquares(squares);
	} else {
		prompt("Please enter a number lower than 101");
	}
});
