window.addEventListener("load", ()=>{
    var data = localStorage.getItem("userData")
    // console.log(data)

    data = JSON.parse(data)

    if (data != null){
        arr = data;
    }
    else {
        arr = [];
    }
    console.log(arr)
})

var formRegister = document.getElementById("registerForm");
formRegister.addEventListener("submit", registerUser);

var btn = document.getElementById("button");
btn.addEventListener("mouseover", ()=>{
    btn.style.cursor = "pointer";
})

function userData(firstName, lastName, email, password) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.email = email,
    this.password = password
}

var arr;

function registerUser(e){
    e.preventDefault();

    let form = new FormData(event.target);

    var firstName = form.get("firstName");
    var lastName = form.get("lastName");
    var email = form.get("email");
    var password = form.get("password");

    var user = new userData (firstName, lastName, email, password)
    // console.log(user)
    arr.push(user);
    console.log(arr)

    arr = JSON.stringify(arr);

    localStorage.setItem("userData", arr);

    var fName = document.getElementById("userFirstName");
    fName.value = null;

    var lName = document.getElementById("userLastName");
    lName.value = null;

    var emailId = document.getElementById("userEmail");
    emailId.value = null;

    var pass = document.getElementById("userPassword");
    pass.value = null;
}

var returnUnderline = document.getElementById("returnUnderLine");
returnUnderline.addEventListener("mouseover",()=>{
    var underline = document.getElementById("underLine");
    // console.log(underline)
    underline.style.display = "block"
    underline.setAttribute("id","uline")
})

returnUnderline.addEventListener("mouseleave",()=>{
    var underline = document.getElementById("underLine");
    uline.style.display = "none"
    uline.setAttribute("id","underLine")
})