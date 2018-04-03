//1. реализовать функцию которая вернет сумму элементов произвольного массива
function arraySum(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

//2. реализовать функцию которая принимает произвольный массив и возвращает отсортированный по возростанию, сделать
// двумя способами, через метод sort и через цикл for

function arraySort(array) {
    return array.sort(function(a, b){return a - b});
}

function arrayLoopSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                let num = array[i];
                array[i] = array[j];
                array[j] = num;
            }
        }
    }
    return array;
}

//3. реализовать функцию которая возвращает массив с уникальными элементами // [1,1,2,3,1,2] => [1,2,3]

//4. реализовать функцию которая возвращает массив с числами фибоначчи, количество которых зависит
// от переданного значения при вызове функции

