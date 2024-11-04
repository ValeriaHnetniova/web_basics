function startTimer(seconds) {
    const startTime = Date.now(); // Отримуємо початковий час у мілісекундах
    const endTime = startTime + seconds * 1000; // додаємо потрібну кількість мілісекунд)

  
    while (Date.now() < endTime) {
        
    }

    console.log(`${seconds} секунд минуло!`);
}

startTimer(10); 
console.log(startTimer);