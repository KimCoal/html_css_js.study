const postIdDiv = document.querySelector("#post_id_div");
const userIdDiv = document.querySelector("#user_id_div");
const postTitle = document.querySelector("#post_title");
const contentBox = document.querySelector("#content_box");
const backBtn = document.querySelector("#back_btn")

window.onload = async () => {
    const url = new URL(window.location.href);

    const urlParam = url.searchParams;
    const postId = urlParam.get("postId");
    const API_URL = `https://jsonplaceholder.typicode.com/posts/${postId}`;

    const response = await fetch(API_URL);
    if (!response.ok) {
        alert("문제 발생");
        return;
    }

    const data = await response.json();

    postIdDiv.innerText = `게시물ID:${data.id}`;
    userIdDiv.innerText = `유저ID:${data.userId}`;
    postTitle.innerText = data.title;
    contentBox.innerText = data.body;
};

backBtn.onclick = () => {
    window.location.href = "http://127.0.0.1:5500/fetch_study/list.html"
}
