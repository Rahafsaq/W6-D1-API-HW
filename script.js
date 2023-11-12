function myApi() {
	fetch('https://rickandmortyapi.com/api/character')
		.then((response) => response.json())
		.then((data) => {
			console.log(data);

			for (let i = 0; i < data.results.length; i++) {
				console.log(data.results[i]);
				// let text = document.getElementById('image-text');
				// let image = document.getElementById('images');
				let container = document.getElementById('container');
				let cont = document.createElement('div');
				let text = document.createElement('p');
				let image = document.createElement('img');
				text.innerHTML = data.results[i].name;
				image.src = data.results[i].image;
				cont.style.cssText =
					'width: 18vw;height: 46vh;justify-content: center;align-items: center;border: 1px solid black;display: flex;flex-direction: column;;box-shadow: 2px 2px 3px grey;		border-radius: 10px;';
				image.style.cssText = '	width: 15vw;height: 35vh;';
				container.appendChild(cont);
				cont.appendChild(text);
				cont.appendChild(image);
			}
		});
}
myApi();
