function insertarCancion() {

    let cancion = {
        ID: document.getElementById("ID").value,
        titulo: document.getElementById("titulo").value,
        genero: document.getElementById("genero").value,
        cantante: document.getElementById("cantante").value,
        info: document.getElementById("info").value,
        letra: document.getElementById("letra").value,
        imagen: document.getElementById("imagen").value,
        cancion: document.getElementById("cancion").value
        
    };

    const dataForInsert = {
        operation: "insert",
        table: "canciones",
        object: cancion
    };

    const idImplementacion = "AKfycbzLAsjjFqw8EfDS6GgtvPwLOlm7aG-enQbwut3Z-kjip3kJYNl1Aw2c18_t5Em6qcejlA";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForInsert,
        insertarcancionTerminado);
}

function insertarcancionTerminado(response) {
    console.log(response);
}


insertarCancion();