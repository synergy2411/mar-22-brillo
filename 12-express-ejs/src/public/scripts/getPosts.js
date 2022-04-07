window.onload = function () {
    console.log("GET POST LOADED");
    const btnGetPost = document.getElementById("btnGetPost")

    btnGetPost.addEventListener("click", () => {
        alert("Clicked")
        fetch("/user/posts", {
            method: "GET",
            headers: {
                "authorization": `Bearer ` + localStorage.getItem("token")
            }
        }).then(response => response.json())
            .then(result => console.log(result))
            .catch(console.error)
    })
}