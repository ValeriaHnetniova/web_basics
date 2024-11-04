//Написати метод, який реалізує різницю двох масивів з урахуванням кількості однакових елементів
function arrayDifference(arr1, arr2) {
    let result = [];
    let map = new Map();

    for (let num of arr2) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (let num of arr1) {
        if (map.get(num)) {
            map.set(num, map.get(num) - 1);
        } else {
            result.push(num);
        }
    }

    return result;
}

// Приклад використання
console.log(arrayDifference([1, 2, 3, 4, 2], [2, 4])); 