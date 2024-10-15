const	max = 24;
let 	firstName = 'Beyonce';

function sayHello(name, hour){
	let	message = (hour >= 18) ? `Bonsoir ${name} !` : `Bonjour ${name} !`;
  	console.log("hour = " + hour);
	console.log(message);
}

sayHello(firstName, (Math.floor(Math.random() * max)));
sayHello(firstName, (Math.floor(Math.random() * max)));
sayHello(firstName, (Math.floor(Math.random() * max)));
sayHello(firstName, (Math.floor(Math.random() * max)));
sayHello(firstName, (Math.floor(Math.random() * max)));
sayHello(firstName, (Math.floor(Math.random() * max)));
sayHello(firstName, (Math.floor(Math.random() * max)));