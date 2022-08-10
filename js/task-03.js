// Задание 3
// Напиши класс Storage, который будет создавать объекты для управления складом товаров.
//  При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих

class Storage{
    constructor(storage) {
        this.items = storage;
    }
    getItems() {
        return this.items;
    }
    addItem(item) {
        this.items.push(item);        
    }
    removeItem(item) {
        const activeItems = this.items.lenght;
        console.log(activeItems);
        

        for (let i = 0; i < activeItems.lenght; i += 1){
                        
            if (this.items[i] === item) {
                this.items.splice(i, i);
            }
        }
    }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
