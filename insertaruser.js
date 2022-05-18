

function  insertaruser(){
    
    const dataForselect = {
        operation: "select",
        table: "usuarios",
       };
    const idImplementacion = "AKfycbzLAsjjFqw8EfDS6GgtvPwLOlm7aG-enQbwut3Z-kjip3kJYNl1Aw2c18_t5Em6qcejlA";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForselect,
        insertaruserTerminado);

}



function insertaruserTerminado(response){

    console.log(response);
    document.getElementById("errorinsertar").innerHTML=" ";
 let passwd2=document.getElementById("contraseña2").value;
 let passwd=document.getElementById("contraseña").value;
 let IDnuevo = response.values.length+1;
 
 if (isNaN(passwd) )
 { 
    document.getElementById("errorinsertar").innerHTML="contraseña incorrecta.";
    
    }
    
else if (isNaN(usuario)){document.getElementById("errorinsertar").innerHTML="contraseña incorrecta.";
}
  
    else if (passwd2==passwd )
{


    let usuario = 
    {
        idusuario: IDnuevo,
        usuario: document.getElementById("usuario").value,
        contraseña: passwd
   
    }
    const dataForInsert = {
    operation: "insert",
    table: "usuarios",
    object: usuario
                            };
const idImplementacion = "AKfycbzLAsjjFqw8EfDS6GgtvPwLOlm7aG-enQbwut3Z-kjip3kJYNl1Aw2c18_t5Em6qcejlA";

GoogleSheetDataBaseOperation(
    idImplementacion,
    dataForInsert,
    insertarMensajeError);
   
}
   

else{
    document.getElementById("errorinsertar").innerHTML=" ";
    document.getElementById("errorinsertar").innerHTML="contraseña incorrecta.";
}
}


function insertarMensajeError(response) {
    console.log(response);
}

