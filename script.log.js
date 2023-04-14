function login(){
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    if(usuario === "adm" && senha === "123Adm"){
    alert("login bem sucedido!");
    }
    else{
        alert("Nome de Usuario ou senha incorretos!");
    }

}