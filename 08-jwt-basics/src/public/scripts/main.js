window.onload = () => {
    const btnSignup = document.getElementById("btnSignup")
    const btnLogin = document.getElementById("btnLogin")
    const txtEmail = document.getElementById("txtEmail")
    const txtPassword = document.getElementById("txtPassword")

    btnLogin.addEventListener("click", event => {
        event.preventDefault();
        fetch("http://localhost:9090/user/login",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email : txtEmail.value,
                password : txtPassword.value
            })
        })
        .then(response => response.json())
        .then(result => console.log(result))
    })

    btnSignup.addEventListener("click", (event) => {
        event.preventDefault();
        fetch("http://localhost:9090/signup",{
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