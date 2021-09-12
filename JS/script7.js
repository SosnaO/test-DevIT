
// 7. Написать обратный метод(см. задачу 5) objectToArray который из объекта создаст массив. Пример: 

let objectToArray=({
	name: 'developer',
	age: 5,
	skills: {
		html: 4,
		css: 5,
		js: 5
	}
})
   
const abjArr = Object.entries(objectToArray);
abjArr.forEach(([key, value]) => {
  console.table(key, value);
});
console.log(abjArr)

