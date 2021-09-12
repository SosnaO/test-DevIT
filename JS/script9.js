// 9. Создайте прототип для String toTitleCase каждый первый символ строки переводит в верхний регистр. Пример:

let x = 'test task'
function capitalize(x) {
 return x.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
}
console.log(capitalize(x))
