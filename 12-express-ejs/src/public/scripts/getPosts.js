window.onload = function () {
    console.log("GET POST LOADED");
    const btnGetPost = document.getElementById("btnGetPost")
    const postList = document.getElementById("post-list")

    btnGetPost.addEventListener("click", () => {
        alert("Clicked")
        fetch("/user/posts", {
            method: "GET",
            headers: {
                "authorization": `Bearer ` + localStorage.getItem("token")
            }
        }).then(response => response.json())
            .then(result => {
                result.forEach(post => {
                    const li = document.createElement("li")
                    li.innerHTML = `${post.title.toUpperCase()}`
                    postList.appendChild(li);
                })
            })
            .catch(console.error)
    })
}