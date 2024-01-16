let textH2 = document.querySelector('.text').value;

const btn_ok = document.querySelector('.btn_ok');
const btn_clear = document.querySelector('.btn_clear');

function numOfPeople() {
	document.querySelector('.text').innerHTML = 'Введите число людей';
	let input = document.querySelector('.input').value;
	let inputMDF = parseInt(input);
	if (inputMDF) {
		return inputMDF
	} else {
		return 'Можно вводить только цифры'
	}
}

function restaurantService() {
	document.querySelector('.text').innerHTML = 'Введите процент обслуги';
	document.querySelector('.input').value = '';
	let input = document.querySelector('.input').value;
	let inputMDF = parseFloat(input);
	if (inputMDF) {
		return inputMDF
	} else {
		return 'Можно вводить только цифры'
	}
}

function start() {
	let people, ser, dishes, summary;

	people = numOfPeople();
	if (typeof people === 'number') {
	  console.log('number of people', people);
	} else {
	  return;
	}
	console.log('Программа проходит дальше');
	
	btn_ok.addEventListener('click', restaurantService);
	ser = restaurantService();
	if (typeof ser === 'number') {
		console.log('restaurant service', ser);
	} else {
		return;
	}
	console.log('Программа заканчивается');

}

// function sharedFood() {
// 	let input = document.querySelector('.input').value;
// 	if (input !== Number) {
// 		console.log('Функция numOfPeople не сработала', input)
// 		return false
// 	} else {
// 		console.log('Функция numOfPeople работает', n)
// 		return input
// 	}
// }


function clearPage() {
	document.querySelector('.input').value = '';
	console.clear();
	numOfPeople();
}


btn_ok.addEventListener('click', start);
btn_clear.addEventListener('click', clearPage);
