//Знайти неперервний підмасив масиву, сума елементів якого є максимальною (Кадане алгоритм)
function maxArraySum (arr){
    let maxSum = arr[0];
    let currentSum = arr[0];

    for (i = 1; i < arr.length; i++) { //починаю з другого елементу масиву, тому що перший елемент вже врахований в maxSum і currentSum
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
console.log(maxArraySum([2, -1, 4, -2, 3, 1]));
