window.onload = function(){
    const btnLogin = document.getElementById("btnLogin")
    const btnGetPost = document.getElementById("btnGetPost")
    const txtEmail = document.getElementById("txtEmail")
    const txtPassword = document.getElementById("txtPassword")

    btnLogin.addEventListener("click", event => {
        event.preventDefault();
        fetch("/auth/login",{
            method : "POST",
            body : JSON.stringify({
                email : txtEmail.value,
                password :txtPassword.value
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            if(result.message === "SUCCESS"){
                localStorage.setItem("token", result.token);
                location.href = "/views/welcome";
            }
        })
        .catch(console.error)
    })


   

}