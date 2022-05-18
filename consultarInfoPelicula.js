function consultarInfoDePelicula() {

    const urlParams = new URLSearchParams(window.location.search);
    const idPelicula = urlParams.get("id");

    const dataForSelect = {
        operation: "select",
        table: "canciones",
        key: idPelicula
    };

    const idImplementacion = "AKfycbyHxIZzQMQ0QBqAizNZ4rnIepEcMD3u8JGhzmpnmK56W14gphIKPfR5eEC2fIRo8Sq1ZA";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarInfoDePeliculaTerminado);
}

function consultarInfoDePeliculaTerminado(response) {
    document.getElementById("titulo").innerHTML = response.value.Titulo + "(" + response.value.Anio + ")";
    document.getElementById("sinopsis").innerHTML = response.value.info;
    document.getElementById("imagen").setAttribute("src", "imágenes/" + response.value.Imagen);
    document.getElementById("letra").innerHTML = response.value.letra;
   

}

consultarInfoDePelicula();