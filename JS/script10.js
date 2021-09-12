// 10. Создайте прототип который удаляет дубликаты из строки. Пример:

let x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double";
let res = x.split(" ")
let unique = ((res.filter((v, i, a) => a.indexOf(v) === i))).join(); 
console.log(unique)
