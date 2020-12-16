//1
let firstVar = 33, secondVar = firstVar * 3, thirdVar = firstVar + secondVar;
console.log(firstVar, secondVar, thirdVar);

//2
let firstName = prompt('Your first name');
let lastName = prompt('Your second name');
alert(`What’s up ${firstName} ${lastName}`);


//3
let x = prompt('Введите число');
let y = prompt('Еще раз введите число');
console.log(x * y);
console.log(x / y);
console.log(x - y);
console.log(+x + +y);


//4
let workingHours = prompt('Введите количество рабочих часов в день');
let weekDays = prompt('Введите количество рабочих дней в неделе');
let salaryPerHour = prompt('Введите зароботную плату в час');
let salaryPerMonth = (((workingHours * weekDays) * salaryPerHour) * 4);


//5
let number = prompt('Введите число');
if (number % 2 !== 0) {
    console.log("нечетно");
}

//6
let number = prompt('Введите число');
if (number % 2 == 0) {
    console.log("четно");
}

//7
let randomNumber = (Math.random() * 100);
let wholeNumber = (Math.round(randomNumber));
let usersNumber = prompt('Введите любое число');
if (wholeNumber < usersNumber) {
    alert(`Первое число меньше второго. ${wholeNumber} и ${usersNumber}`)
}
else {
    alert(`Первое число не меньше второго. ${wholeNumber} и ${usersNumber}`)
}


//8
let str = prompt('Что Вам нравится изучать?', 'Мне нравится изучать Front-end');
let myPreferense = prompt('Мне нравится изучать', 'JS')
alert(str.includes(myPreferense));
let subString = (str.slice(0, 20));
let results = (`${subString} ${myPreferense}`);
alert(results);


