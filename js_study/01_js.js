// 변수 선언 > let, const
let name = "coal";
console.log(name);

console.log("Hello World");
name = "CCoal";

const age = 27;
console.log(age);
// const는 상수기때문에 값을 변경해서 출력하면 에러발생
// age = 18;
// console.log(age);

// 연산자
let data1 = 10;
let data2 = "10";
// 동등연산자
let result = data1 == data2;
// 일치연산자
let result1 = data1 === data2;
console.log(result);
console.log(result1);

//타입을 확인하고 싶다
console.log(typeof data1, typeof data2);

console.log("1" + "2");
// 12
console.log(1, 2);
// 1 2

// not 연산자
console.log(!1); // false
console.log(!0); // true
console.log(!"a"); // false > 문자열안에 한글자라도 있으면 true
console.log(!""); // true
console.log(!null); // false
console.log(!!null); // false
//. !! > 값을 명시적으로 boolean 타입으로 변환하는 방법

console.log("Asdaq".length > 0);
console.log(!!"" === false);

// 객체
let data = {
    name: "coal",
    age: 25,
};

console.log(data);

if (!data) {
    console.log("사용자 정보가 없습니다");
} else if (data.name === "Coal" && data.age === 25) {
    console.log("사용자 이름과 나이가 모두 일치합니다")
} else if (data.name === "Coal") {
    console.log("사용자 이름이 일치합니다");
} else if (data.age === 25) {
    console.log("사용자 이름은 일치하지 않지만, 나이는 일치합니다")
} else {
    console.log("사용자 이름과 나이가 모두 일치하지 않습니다")
}

for (let i = 0; i < 10; i++) {
    console.log(i)
}
