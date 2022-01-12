// 10. Создайте прототип который удаляет дубликаты из строки. Пример:

let x =
  "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double";
String.prototype.removeDuplicate = function () {
  let res = this.split(" ");
  return res.filter((v, i, a) => a.indexOf(v) === i).join();
};
console.log(x.removeDuplicate());
