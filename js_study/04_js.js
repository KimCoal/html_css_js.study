// 배열
const arr1 = []; // 빈 배열
const arr2 = new Array(); // 빈 배열

arr1.push(10);
arr1.push(20);
arr1.push(30);
console.log(arr1);

arr2.push(10);
arr2.push(20);
arr2.push(30);
console.log(arr2);

console.log(arr1 === arr2);

const json1 = JSON.stringify(arr1);
const json2 = JSON.stringify(arr2);
console.log(json1);

console.log(json1 === json2);

const arr3 = JSON.parse(json1);
console.log(arr3);

const names = ["coal", "sulfur", "ceramic"];
names.push("soil");

// 요소제거 (배열의 요소중에 마지막 요소) 이후 제거된 요소 반환
// pop
console.log(names.pop());

// 요소 수정/삽입/제거 > splice(삽입될 인덱스, 제거할 개수, 추가할 요소...)
names.splice(1, 0, "ruby")
console.log(names)

names[0] = "Coal"
console.log(names);

// 요소 찾기 > 주어진 조건 함수를 만족하는 배열의 첫번째 요소를 반환
const findFx = (str) => str === "ceramic";
const foundName = names.find(findFx);
console.log(foundName)

console.log(names.find((name) => name === "ceramic"))

const students = [
    {name: "coal", age: 100},
    {name: "sulfur", age: 200},
    {name: "ceramic", age: 300},
    {name: "soil", age: 400}
]

console.log(students.find((students) => students.name === "sulfur" && students.age === 200))
