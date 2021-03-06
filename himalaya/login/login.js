var login = document.getElementById("loginForm");
login.addEventListener("submit", getLogin);

function getLogin(e) {
    e.preventDefault();
    var errorMsg = document.getElementById("errorMsg");
    errorMsg.innerHTML = null;

    var loginForm = new FormData(event.target);
    
    var email = loginForm.get("email");
    var password = loginForm.get("password");

    var data = localStorage.getItem("userData");
    data = JSON.parse(data);
    // console.log(data)
    var flag = false;
    var uEmail;
    var uName;
    
    if (data == null){
        errorMsg.innerHTML = "<ul><li>Incorrect email or password.</li></ul>";
    }
    
    for (var i = 0; i < data.length; i++){
        if(data[i].email == email && data[i].password == password){
            flag = true;
            uEmail = data[i].email;
            uName = `${data[i].firstName} ${data[i].lastName}`;
            break;
        }
    }
    if (flag == true){
        location.href = `../account/account.html?name=${uName}&&e-mail=${uEmail}`;
    }
    else {
        errorMsg.innerHTML = "<ul><li>Incorrect email or password.</li></ul>";
    }
}

let lostPassword = document.getElementById("lostPassword");
lostPassword.addEventListener("mouseover",()=>{
    let underline = document.getElementById("underLine");
    // console.log(underline)
    underline.style.display = "block"
    underline.setAttribute("id","uline")
})

lostPassword.addEventListener("mouseleave",()=>{
    let underline = document.getElementById("underLine");
    uline.style.display = "none"
    uline.setAttribute("id","underLine")
})