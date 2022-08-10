// Задание 1
// Получить массив имен всех пользователей (поле name).
import users from "./users.js";

const getUserNames = users => {
        
        const userName = users.map(function (user) {
        return user.name;
        })
    return userName;
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]