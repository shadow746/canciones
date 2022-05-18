
function login(){
  document.getElementById("errorinicio").innerHTML=" ";

  
  const dataForSelect = {
      operation: "select",
      table: "usuarios"
  };   



  GoogleSheetDataBaseOperation(
    idImplementacion,
      dataForSelect,
      LoginTerminado);
};

function LoginTerminado(response){
  console.log(response);

  for (let i = 0; i < response.values.length ; i++)
  {
      if ((document.getElementById("username").value == response.values[i].usuario) &&
      (document.getElementById("password").value == response.values[i].contraseña))
      {
                    window.location = "pcanciones.html?id=" + response.values[i].idusuario;
                    
      }
      
  
  else {
      document.getElementById("errorinicio").innerHTML="Usuario o contraseña incorrectos.";
      
  }
}

}