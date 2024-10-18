const	time = new Date();
const	hourTime = time.getHours();
let 	firstName = prompt("What's your name ?");

function sayHello(name, hour){
	let	message = (hour >= 18) ? `Bonsoir ${name} !` : `Bonjour ${name} !`;
  	console.log(`Il est ${hour}h !`);
	document.querySelector('h1').innerText = message;
}

sayHello(firstName, hourTime);