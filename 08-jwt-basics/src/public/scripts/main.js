window.onload = () => {
    const btnSignup = document.getElementById("btnSignup")
    const txtEmail = document.getElementById("txtEmail")
    const txtPassword = document.getElementById("txtPassword")

    btnSignup.addEventListener("click", (event) => {
        event.preventDefault();
        fetch("/signup",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                email : txtEmail.value,
                password : txtPassword.value
            })
        })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(console.log)
    })
}