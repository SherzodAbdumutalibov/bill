let textH2 = document.querySelector('.text').innerText; // Use innerText instead of value for getting text content

let i, people, ser, dishes, summary;
let pep, service, dish, sum;

let btn_ok1 = document.querySelector('.btn_ok1');
let btn_ok2 = document.querySelector('.btn_ok2');
let btn_ok3 = document.querySelector('.btn_ok3');
let btn_ok4 = document.querySelector('.btn_ok4');
let btn_clear = document.querySelector('.btn_clear');

btn_ok1.addEventListener('click', function abc() {

    document.querySelector('.text').innerText = 'Введите число людей'; 

    let input = document.querySelector('.input').value;

    let inputMDF = parseInt(input);

    if (!isNaN(inputMDF)) { 
        people = inputMDF;
        btn_ok1.classList.remove('btn_ok1');
    } else {
        document.querySelector('.text').innerText = 'Можно вводить только цифры'; // Use innerText for setting text content
    }
	console.log('внутри функции btn_ok1', people)
});

btn_ok2.addEventListener('click', function btn_ok2() {
	document.querySelector('.text').innerText = 'Введите процент'; 
	console.log('внутри функции btn_ok2', people);
	console.log('внутри функции btn_ok2', btn_ok4.className);
})





function clearPage() {
	document.querySelector('.input').value = '';
	console.clear();
	textH2 = 'Введи число людей'
}
console.log('Программа закончилась');
btn_clear.addEventListener('click', clearPage);
