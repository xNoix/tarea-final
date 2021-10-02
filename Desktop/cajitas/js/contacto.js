
function ValidarDatos(){
    var nombre = document.getElementById("name");
    var telefono = document.getElementById("tel");
    
    if(nombre.value == ''){
        nombre.classList.remove("success");
        nombre.classList.add("error");
    }else{
        nombre.classList.remove("error");
        nombre.classList.add("success");
    }

    if(telefono.value == ''){
        telefono.classList.add("error");
    }else{
        telefono.classList.add("success");
    }
}