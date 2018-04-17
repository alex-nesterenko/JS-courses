//1. реализовать функцию которая вернет сумму элементов произвольного массива
function getArraySum1(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

function getArraySum2(array) {
    let sum = 0;

    array.forEach((item) => sum += item);

    return sum;
}

function getArraySum3(array) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return array.reduce(reducer);
}

//2. реализовать функцию которая принимает произвольный массив и возвращает отсортированный по возростанию, сделать
// двумя способами, через метод sort и через цикл for

function getSortedArray1(array) {
    return array.sort((a, b) => {return a - b});
}

function getSortedArray2(array) {
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
function getUniqueArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j] && i !== j) {
                array.splice(j, 1);
            }
        }
    }
    return getSortedArray1(array);
}

//4. реализовать функцию которая возвращает массив с числами фибоначчи, количество которых зависит
// от переданного значения при вызове функции
function getFibonacci(count) {
    let array = [0, 1];

    for (let i = 0; i < count; i++) {
        array[i + 2] = array[i] + array[i + 1];
    }

    return array;
}
