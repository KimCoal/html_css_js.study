// 객체
const student = {
    name: "coal",
    age: 25,
};

console.log(student);

console.log(student.name);
console.log(student.age);

console.log(student["name"]);
console.log(student["age"]);

student["name"] = "sulfur";
student["age"] = 200;

console.log(student);

student.name = "ceramic";
student.age = 5194;
student.address = "Mars";

console.log(student);

student.printName = () => console.log("이름 : " + student.name);
student.printName();

const loginBtn = {
    text: "로그인",
    value: "로그인 되었음",
    onClick: () => {
        console.log(loginBtn.value);
    },
};

loginBtn.onClick();

const loginBtnKeys = Object.keys(loginBtn);
console.log(loginBtnKeys)

const loginBtnValues = Object.values(loginBtn);
console.log(loginBtnValues)

const loginBtnEntries = Object.entries(loginBtn)
console.log(loginBtnEntries)

for (let entry of loginBtnEntries) {
    const key = entry[0]
    const value = entry[1]
    console.log(entry, key, value)
}