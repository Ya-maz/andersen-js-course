/**
 * Реализовать функцию without в этом файле, и экспортировать ее.
 *
 * Первый аргумент - массив, второй и последующие - значения
 *
 * Функция возвращает новый массив, который наполнен теми значениями,
 * которые не передавались как второй и последующие аргументы функции
 * ([2, 1, 2, 3], 1, 2)) -> 1ца и 2ка убрались, осталась только 3ка. Вернули [3]
 * ([2, 1, 10, 20], 1, 2)) -> 1ца и 2ка убрались, остались 10, 20. Вернули [10, 20]
 *
 * console.log(without([2, 1, 2, 3], 1, 2)) -> [3]
 * console.log(without([2, 1, 10, 20], 1, 2)) -> [10, 20]
 */
export default function without(arr, ...num) {
  function isDouble(element) {
    let count = 0;
    num.forEach(i => {
      if (element === i) {
        count++
      }
    });
    if (count === 0) return true;
    return false;
  }
  return arr.filter(isDouble)
}
console.group('task8 info:');
console.log(without([2, 1, 2, 3], 1, 2));
console.log(without([2, 1, 10, 20], 1, 2));
console.groupEnd();