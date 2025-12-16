const btn = document.querySelector(".input_button");
let index = 1;
btn.onclick = () => {
    const inputName = document.querySelector(".input_name");
    const inputAge = document.querySelector(".input_age");
    const inputAddress = document.querySelector(".input_address");

    const tbody = document.querySelector(".student_table > .tbody")

    if (inputName.value === "" ||
        inputAge.value === "" ||
        inputAddress.value === ""
    ) {
        alert("빈칸임")
        return;
    }

    tbody.innerHTML += `
        <tr>
            <td>${index++}</td>
            <td>${inputName.value}</td>
            <td>${inputAge.value}</td>
            <td>${inputAddress.value}</td>
        </tr>
    `;

    inputName.value = "";
    inputAge.value = "";
    inputAddress.value = "";

};