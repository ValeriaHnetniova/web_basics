//Створити функцію сумування двох дуже довгих чисел, представлених строкою
function addLargeNumbers(num1, num2) {
    let result = '';
    let carry = 0;
    let maxLength = Math.max(num1.length, num2.length);
    
    num1 = num1.padStart(maxLength, '0');
    num2 = num2.padStart(maxLength, '0');
    
    for (let i = maxLength - 1; i >= 0; i--) {
        let sum = parseInt(num1[i]) + parseInt(num2[i]) + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }
    
    if (carry > 0) result = carry + result;
    
    return result;
}

// Приклад використання
console.log(addLargeNumbers("987654321987654321", "123456789123456789")); // Виведе суму двох чисел