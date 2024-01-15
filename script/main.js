let textH2 = document.querySelector('.text').value;

const btn_ok = document.querySelector('.btn_ok');
const btn_clear = document.querySelector('.btn_clear');

async function start() {
	let people, ser, dishes, summary;
	let numPeop = numOfPeople(people);
	let service = restaurantService(ser);
	console.log('Число людей', numPeop);
	console.log('Обслуга', service);
}

function numOfPeople(val) {
	document.querySelector('.text').innerHTML = 'Введите число людей';
	let input = document.querySelector('.input').value;
	let inputMDF = parseInt(input);

	if (inputMDF) {
		return inputMDF
	} else {
		return 'Можно вводить только цифры'
	}
}

function restaurantService(val) {
	document.querySelector('.text').innerHTML = 'Введите процент обслуги';
	let input = document.querySelector('.input').value;
	let inputMDF = parseFloat(input);
	if (inputMDF) {
		return inputMDF
	} else {
		return 'Можно вводить только цифры'
	}
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


btn_ok.addEventListener('click', start)
btn_clear.addEventListener('click', clearPage)
