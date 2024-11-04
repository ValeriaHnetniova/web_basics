const car = {
    speedometer: 0,

    // Сеттер для speedometer
    setSpeed(speed) {
        this.speedometer = speed; // оновлюємо значення speedometer
        return this; // повертаємо об'єкт car для ланцюгового виклику
    },

    // Геттер для speedometer
    getSpeed() {
        console.log(this.speedometer); // виводимо значення speedometer в консоль
        return this; // повертаємо об'єкт car для ланцюгового виклику
    },

    // Метод для очищення speedometer
    clearSpeed() {
        this.speedometer = 0; // очищуємо значення speedometer
        return this; // повертаємо об'єкт car для ланцюгового виклику
    }
};

car.setSpeed(200).setSpeed(300).getSpeed().clearSpeed(); // виведе 300, очищує speedometer
console.log(car.speedometer); // поверне 0
