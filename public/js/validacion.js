function validarCamposObligatorios() {
    var n=document.getElementById("mensajeNombres").value, 
    a= document.getElementById("mensajeApellidos").value, 
    c=document.getElementById("mensajeCorreo").value,
    ct=document.getElementById("mensajeContrasena").value;

    if(n=="" || a =="" || c =="" || ct ==""  ){
        alert("Todos los campos son obligatorios");
    return false;
    }
    var bandera = false
    for (var i = 0; i < document.forms[0].length; i++) {
        var elemento = document.forms[0].elements[i];
        if (elemento.value.trim() == '') {
            if(elemento.id == 'nombres') {
                bandera = true
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeNombres").innerHTML = ('nombre obligatorio')
            } else if(elemento.id == 'apellidos') {
                bandera = true
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeApellidos").innerHTML = ('apellido obligatorio')
            } else if(elemento.id == 'correo') {
                bandera = true
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeCorreo").innerHTML = ('correo obligatorio')
            } else if(elemento.id == 'contrasena') {
                bandera = true
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeContrasena").innerHTML = ('contraseña obligatoria')
            } else {
                var bandera = false
            }
        } else {
            var bandera = false
        }
    }
   
    

    
}

function validarLetras(elemento) {

    if (elemento.value.length > 0)
    var miAscii = elemento.valie.charCodeAt(elemento.value.length-1)

    console.log(miAscii)
    if (miAscii >=97 && miAscii <=122) {
        return  true
    } else {
        elemento.value=elemento.value.substring(0,elemento.value.length-1)
        return false
    }
    
}