let i = 0, j = 0;

while (j < 16) {
	const container = document.querySelector('#container');
	const row = document.createElement('div');
	row.setAttribute('id', 'row');

	row.id="row" + String(j);

	container.appendChild(row);
	j += 1;
}

j = 0;
while (j < 16) {
	r = "#" + "row" + String(j)
	const row = document.querySelector(r);

	while (i < 16) {
		const square = document.createElement('div');

		square.classList.add('square');

		row.appendChild(square);

		i += 1;
	}

	i = 0;
	j += 1;
}