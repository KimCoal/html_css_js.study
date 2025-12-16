const btn = document.querySelector(".input_button");

btn.onclick = () => {
    const input = document.querySelector(".inputs");
    const ul = document.querySelector(".data_list");

    if (input.value === "") {
        alert("빈칸임");
        return;
    }

    ul.innerHTML += `<li>${input.value}</li>`;

    input.value = "";
};
