
function update() {
    let idGoogleSheet = "AKfycbzLAsjjFqw8EfDS6GgtvPwLOlm7aG-enQbwut3Z-kjip3kJYNl1Aw2c18_t5Em6qcejlA";
    let key           = document.getElementById("key").value;
    let columnName1   = "usuario";
    let columnValue1  = document.getElementById("columnValue1").value;
    let columnName2   = "contraseña"
    let columnValue2  = document.getElementById("columnValue2").value;
    let columnName3   = "gmailfacebook"
    let columnValue3  = document.getElementById("columnValue3").value;
    let columnName4   = "perfiles"
    let columnValue4  = document.getElementById("columnValue4").value;
    let columnName5   = "fechanacimiento"
    let columnValue5  = document.getElementById("columnValue5").value;
    


    const newRow = {};

    if (columnName1) {
        newRow[columnName1] = columnValue1;
    }

    if (columnName2) {
        newRow[columnName2] = columnValue2;
    }

    if (columnName3) {
        newRow[columnName3] = columnValue3;
    }
    if (columnName4) {
        newRow[columnName4] = columnValue4;
    }
    if (columnName5) {
        newRow[columnName5] = columnValue5;
    }
    
    const dataForSelect = {
        operation: "update",
        table: "perfil",
        key: key,
        object: newRow
    };
    

    document.getElementById("error").innerHTML = "Esperando resultado...";
    document.getElementById("message").innerHTML = "Esperando resultado...";

    GoogleSheetDataBaseOperation(
        idGoogleSheet,
        dataForSelect,
        updateFinished);
}

function updateFinished(response) {
    document.getElementById("error").innerHTML = response.error;
    document.getElementById("message").innerHTML = response.message;
}