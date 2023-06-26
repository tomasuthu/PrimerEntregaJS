

function validarDatos() {

  const nameApe = document.getElementById("nameApe").value;
  const correo = document.getElementById("correo").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (nameApe.trim()  !== "" && subject.trim()  !== "" && correo.trim()  !== "" && message.trim()  !== "") {
    // console.log("DEBE COMPLETAR TODOS LOS DATOS PARA PODER REGISTRARSE.");} ||

    document.getElementById("contact-form").addEventListener("submit", function(event) {
      event.preventDefault(); 
    
        console.log("Nombre: " + nameApe);
        console.log("Curso: " + subject);
        console.log("Email: " + correo);
        console.log("Mensaje: " + message);
  
        document.getElementById("contact-form").reset()
  
  }
  
  );

  for (let Inc = 0; Inc < 5; Inc++) {
    // Se ejecuta 5 veces, con valores del 0 al 4.
    console.log('Gracias por inscribirse al curso de' + subject );
  }

 } else {console.log("DEBE COMPLETAR TODOS LOS DATOS PARA PODER REGISTRARSE.");}
  

      return;
    
  }

