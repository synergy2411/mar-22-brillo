window.onload = () => {
    localStorage.clear();
    const btnSignup = document.getElementById("btnSignup")
    const btnLogin = document.getElementById("btnLogin")
    const txtEmail = document.getElementById("txtEmail")
    const txtPassword = document.getElementById("txtPassword")
    const profileLink = document.getElementById("profile-link")

    profileLink.addEventListener("click", event => {
        event.preventDefault();
        const token = localStorage.getItem("token")
        fetch("/user/profile",{
            headers : {
                "authorization" : `Bearer ${token}`
            }
        }).then(resp => resp.json())
            .then(console.log)
            .catch(console.log)
    })

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
        .then(result => {
            console.log(result);
            localStorage.setItem("token", result.token)
        })
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