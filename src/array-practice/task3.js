/**
 * Реализовать функцию forEachRight в этом файле, и экспортировать ее.
 *
 * Первый аргумент - массив, второй - функция, применяющаяся на массив.
 * Функция должна возвращать undefined, по аналогии с методом массивов - forEach.
 *
 * В примере ниже, результатом работы функции forEachRight,
 * будет вывод элементов массива в обратном порядке в консоль.
 * Одно значение - один вывод (построчно)
 * Возвращаемым из функции значением будет undefined.
 *
 * forEachRight([1, 2, 3, 4], val => console.log(val)); -> в консоль 4 3 2 1
 */
export default function forEachRight(arr, callback) {
  arr.reverse().forEach(callback);
}
// forEachRight([1, 2, 3, 4], val => console.log(val));