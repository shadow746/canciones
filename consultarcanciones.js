function consultarperfil(){
    const urlParams = new URLSearchParams(window.location.search);
    const idusuario = urlParams.get("id");
    const dataForSelect = {
        operation: "select",
        table: "perfil",
        key: idusuario
    };

    const idImplementacion = "AKfycbzLAsjjFqw8EfDS6GgtvPwLOlm7aG-enQbwut3Z-kjip3kJYNl1Aw2c18_t5Em6qcejlA";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarfoto);
        
}  

function consultarfoto (response){
    console.log(response);

    let divimagen = document.createElement("div");
    divimagen.className="circulo";

    let imagene = document.createElement("img");
    imagene.setAttribute("src", "perfiles/" + response.value.perfiles);
    imagene.setAttribute("onclick", "clickSobreperfil(" + response.value.idusuario + ")");

    divimagen.append(imagene);
    document.getElementById("divimagen").append(divimagen);


}


function consultarcancion() {
    const dataForSelect = {
        operation: "select",
        table: "canciones"
    };

    const idImplementacion = "AKfycbzLAsjjFqw8EfDS6GgtvPwLOlm7aG-enQbwut3Z-kjip3kJYNl1Aw2c18_t5Em6qcejlA";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarInfoDeCancion);
}


function consultarInfoDeCancion(response) {
    console.log(response);

    let divcanciones = document.createElement("div");
    divcanciones.className = "contenedor_cancion";


    let divprimero =document.createElement("p");
    divprimero.className = "bor";


    let insertar =document.getElementById("insert");
        insertar.setAttribute("href", "insertarCancion.html");



        
        let actualizar =document.getElementById("actualiza");
        actualizar.setAttribute("href", "update.html");

        

    
    for (let i = 0; i < response.values.length; i++) {
 


        let divCancion = document.createElement("div");
        divCancion.className = "cancion";
        divCancion.setAttribute("onclick", "clickSobrecancion(" + response.values[i].ID + ")");

     
        let h1Titulo = document.createElement("h1");
        h1Titulo.innerHTML = response.values[i].titulo; 

        divCancion.append(h1Titulo);

        let h4cantante = document.createElement("h4");
        h4cantante.innerHTML = "cantante: " + response.values[i].cantante;
        divCancion.append(h4cantante);

        



        let divimagen = document.createElement("img");
        divimagen.setAttribute("src", "imagen/" + response.values[i].imagen);

        divCancion.append(divimagen);


        let enlace = document.createElement("a");
        enlace.setAttribute("onclick", "clickSobreletra(" + response.values[i].ID + ")");
        enlace.innerHTML = "info y letra";

        let enlace2 = document.createElement("a");
        enlace2.setAttribute("onclick", "clickSobreborrar(" + response.values[i].ID + ")");
        enlace2.innerHTML = "borrar";
    

        let parrafoParaElEnlace = document.createElement("p");
        let parrafoParaElEnlace2 = document.createElement("p");

        parrafoParaElEnlace.append(enlace);
        parrafoParaElEnlace2.append(enlace2);

        divCancion.append(parrafoParaElEnlace);
        divCancion.append(parrafoParaElEnlace2);

        divcanciones.append(divCancion);

        

}




    document.getElementById("resultado").append(divcanciones);
}


function clickSobreperfil(id){
   
    const dataForSelect = {
        operation: "select",
        table: "perfil",
        key: id
    };

    const idImplementacion = "AKfycbzLAsjjFqw8EfDS6GgtvPwLOlm7aG-enQbwut3Z-kjip3kJYNl1Aw2c18_t5Em6qcejlA";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        clickSobreperfilterminado);

     
}

function clickSobreperfilterminado(response){
    console.log(response);
    let divpersona =document.createElement("div");
    divpersona.className="persona";

        let pnombre = document.createElement("p");
        pnombre.innerHTML = "usuario : " + response.value.usuario; 
        divpersona.append(pnombre);

        let gmail = document.createElement("p");
        gmail.innerHTML = "tu gmail-facebook es: " + response.value.gmailfacebook;
        divpersona.append(gmail);

        let fecha = document.createElement("p");
        fecha.innerHTML = "fecha de nacimiento : " + response.value.fechanacimiento;
        divpersona.append(fecha);



    document.getElementById("gestionusuario").append(divpersona);
}

function clickSobreletra(id){
    const dataForSelect = 
        {
        operation: "select",
        table: "canciones",
        key: id
        };

    const idImplementacion = "AKfycbzLAsjjFqw8EfDS6GgtvPwLOlm7aG-enQbwut3Z-kjip3kJYNl1Aw2c18_t5Em6qcejlA";

    GoogleSheetDataBaseOperation(
    idImplementacion,
    dataForSelect,
    clickSobreletraterminado);
}

function clickSobreletraterminado (response){
    
    console.log(response);
    let divinfo = document.createElement("p");
    divinfo.innerHTML = "informacion: " + response.value.info;
    let divletra = document.createElement("p");
    divinfo.className="letra";
    divletra.className="letra";

    divletra.innerHTML = "letra: " + response.value.letra;
    document.getElementById("letra").append(divinfo);
    document.getElementById("letra").append(divletra);

}




function clickSobreborrar(id){
    const dataForSelect = 
        {
        operation: "delete",
        table: "canciones",
        key: id
        };

    const idImplementacion = "AKfycbzLAsjjFqw8EfDS6GgtvPwLOlm7aG-enQbwut3Z-kjip3kJYNl1Aw2c18_t5Em6qcejlA";
    document.getElementById("error").innerHTML = "Esperando resultado...";
    document.getElementById("message").innerHTML = "Esperando resultado...";

    GoogleSheetDataBaseOperation(
    idImplementacion,
    dataForSelect,
    clickSobreborrarterminado);

    function clickSobreborrarterminado (response){
    
        document.getElementById("error").innerHTML = response.error;
        document.getElementById("message").innerHTML = response.message;    
    
    }
}


function clickSobrecancion(id) {


    const dataForSelect = {
        operation: "select",
        table: "canciones",
        key: id
    };

    const idImplementacion = "AKfycbzLAsjjFqw8EfDS6GgtvPwLOlm7aG-enQbwut3Z-kjip3kJYNl1Aw2c18_t5Em6qcejlA";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        reproducirterminado);

    
}

function reproducirterminado (response){
    
    console.log(response);
    let audio1 = document.createElement("source");
        audio1.setAttribute("src", "ficherosDeCanciones/" + response.value.cancion);
        audio1.type="audio/mpeg";
    document.getElementById("miaudio").append(audio1);
}

consultarperfil();
consultarcancion();