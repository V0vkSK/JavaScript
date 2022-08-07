// // // Задание 1
// // // Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить
// //  в консоль сообщение в формате[номер элемента]-[значение элемента].

// // // Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено
// '1 - Mango', а для индекса 2 выведет '3 - Ajax'.


// const logItems = function(array) {
//     const massiv = array;
//     // console.log(massiv);

//         for (let i = 0; i <= massiv.length-1; i++){
//             console.log(`Number ${i+1},   `, `name: ${massiv[i]}`);
//         }
    
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// Задание 7
// Есть массив logins с логинами пользователей. Напиши скрипт добавления логина в массив logins. Добавляемый логин должен:

// проходить проверку на длину от 4 до 16-ти символов включительно
// быть уникален, то есть отсутствовать в массиве logins
// Разбей задачу на подзадачи с помощью функций.

// Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login и верни true или false в зависимости от того,
//     попадает ли длина параметра в заданный диапазон от 4 - х до 16 - ти символов включительно.

// Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и добавляемый логин как параметры и проверяет наличие
//  login в массиве allLogins, возвращая true если такого логина еще нет и false если логин уже используется.

// Напиши функцию addLogin(allLogins, login) которая:

// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную функцию isLoginValid
// Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
// Если логин валиден, функция addLogin проверяеть уникальность логина с помощью функции isLoginUnique
// Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
// Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!'
// 🔔 Принцип единственной ответственности функции - каждая функция делает что - то одно.Это позволяет переиспользовать код и изменять логику работы
// функции только в одном месте, не затрагивая работу программы в целом.

// Предикатные функции возвращают только true или false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.

// isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
// isLoginValid только проверяет валидный ли логин и возвращает true или false.
// addLogin добавляет или не добавляет логин в массив. При этом для проверок условия добавления использует результаты вызовов других функций - isLoginUnique и isLoginValid.

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const item = 'Mangosdfsdfgsdfghsdfh';
// const correctLenght = '';
// const loginExist = '';

// const isLoginValid = function (allLogins, login) {
//     const loginn = login;
    
//     const correctLenght = loginn.length >= 4 && loginn.length < 16 ? true : false;
//         console.log(correctLenght);
//         return correctLenght;
     
//     }

//      const isLoginUnique = function(allLogins, login) {
//          const loginn = login;
//          const allLogin = allLogins;

//     for (const value of allLogin) {
//         const loginExist = value === loginn ? true : false;
//         return loginExist;
//         }
// };
// const addLogin = function(allLogins, login, ccorrectLenght, lloginExist) {
//     const allLogin = allLogins;
//     const loginn = login;
//     const correctLenghtt = ccorrectLenght;
//     const loginExistt = lloginExist;

//     if (correctLenghtt === false){
//         alert('Ошибка! Логин должен быть от 4 до 16 символов');
//     } else if (loginExistt === true) {
//             alert('Такой логин уже используется!');
//     } else {
//         alert('Логин успешно добавлен!');
//         allLogin.push(loginn);
//     }
//     console.log(logins);
// };

// isLoginValid(logins,item);
// isLoginUnique(logins,item);

// console.log(addLogin(logins, item, isLoginValid(logins, item), isLoginUnique(logins, item))); // 'Логин успешно добавлен!'
// console.log(isLoginUnique(logins, 'Mango')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(isLoginValid(logins, 'jqtjkjhjkhjkhjh')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// --------------------------------------------------------------------------------------------------------------------------------------------------

// Задание 4
// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

const formatString = function (string) {
    const stringg = string;
    
    if (stringg.length >= 40) {
        const newString = stringg.slice(0, 40) +'...';
            return newString;
    } else {
        return stringg;
    }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка