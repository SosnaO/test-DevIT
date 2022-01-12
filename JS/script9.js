// 9. Создайте прототип для String toTitleCase каждый первый символ строки переводит в верхний регистр. Пример:

let x = "test task";
String.prototype.capitalize = function () {
  return x.replace(/(^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
};
console.log(x.capitalize());
