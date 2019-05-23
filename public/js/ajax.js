function buscarPorRemitente() {

    var rem = document.getElementById("remitente").value;
    if (rem == "") {
        document.getElementById("correo").innerHTML = "";
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("correo").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","llenarTabla.php?remitente=",true);
        xmlhttp.send();
    } else {
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("correo").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","buscar.php?remitente="+rem,true);
        xmlhttp.send();
    }
}

function buscarPorDestinatario() {

    var dest = document.getElementById("destinatario").value;
    if (dest == "") {
        document.getElementById("correo").innerHTML = "";
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("correo").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","llenarTabla2.php?remitente=",true);
        xmlhttp.send();
    } else {
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("correo").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","buscar2.php?destinatario="+dest,true);
        xmlhttp.send();
    }
}