// Базовий клас Animal, що описує загальні властивості тварин
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    makeSound() {
        console.log(`${this.name} видає звук.`);
    }
}

// Клас Dog, який наслідується від Animal
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age); // Викликаємо конструктор батьківського класу
        this.breed = breed;
    }

    makeSound() {
        console.log(`${this.name} гавкає!`);
    }
    
    fetch() {
        console.log(`${this.name} біжить за паличкою.`);
    }
}

// Клас Cat, який наслідується від Animal
class Cat extends Animal {
    constructor(name, age, color) {
        super(name, age);
        this.color = color;
    }

    makeSound() {
        console.log(`${this.name} мявкає "БУЧУК ЗЕ БЕСТ"!`);
    }
    
    climbTree() {
        console.log(`${this.name} лізе на дерево.`);
    }
}

// Клас Bird, який наслідується від Animal
class Bird extends Animal {
    constructor(name, age, wingspan) {
        super(name, age);
        this.wingspan = wingspan;
    }

    makeSound() {
        console.log(`${this.name} щебече!`);
    }
    
    fly() {
        console.log(`${this.name} летить з розмахом крил ${this.wingspan} см.`);
    }
}

// Створюємо екземпляри класів та викликаємо методи з виводом у консоль
const dog = new Dog("Бам", 3, "Лабрадор");
console.log("Створено екземпляр Dog:");
console.log(dog);
dog.makeSound(); // Бім гавкає!
dog.fetch();     // Бім біжить за паличкою.

const cat = new Cat("Мурчик", 2, "Сірий");
console.log("\nСтворено екземпляр Cat:");
console.log(cat);
cat.makeSound(); // Мурчик мявкає!
cat.climbTree(); // Мурчик лізе на дерево.

const bird = new Bird("Кеша", 1, 30);
console.log("\nСтворено екземпляр Bird:");
console.log(bird);
bird.makeSound(); // Кеша щебече!
bird.fly();       // Кеша летить з розмахом крил 30 см.
