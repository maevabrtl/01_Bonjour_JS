const	nbOfHours = 24;

function sayHello(name, hour) {
	let	message = (hour >= 18) ? `Bonsoir ${name} !` : `Bonjour ${name} !`;
	console.log(`Il est ${hour}h !`);
	console.log(message);
}

sayHello("Beyonce", (Math.floor(Math.random() * nbOfHours)));
sayHello("Beyonce", (Math.floor(Math.random() * nbOfHours)));
sayHello("Beyonce", (Math.floor(Math.random() * nbOfHours)));
