/* formulario clientes*/

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registroForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    // Crear un objeto para almacenar los datos
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    fetch("http://localhost:4000/clientes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // Manejar la respuesta del servidor (si es necesario)
        console.log(data);

        // Limpiar los campos del formulario
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});


/*
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registroForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const nomMarca = formData.get("nomMarca"); // Obtener el valor del campo

    if (nomMarca) {
      const data = {
        nomMarca: nomMarca,
      };

      fetch("http://localhost:4000/marcas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          // Manejar la respuesta del servidor (si es necesario)
          console.log(data);

          // Limpiar los campos del formulario
          form.reset();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      alert("El campo Nombre Marca es obligatorio.");
    }
  });
});
*/



//IMPORTANTE: PARA ESTABLECER QUE RUTAS PUEDEN USAR CORS
/*
const corsOptions = {
  origin: 'http://localhost:3000', // Reemplaza esto con la URL de tu frontend
  methods: 'GET,POST',
};

app.use(cors(corsOptions));*/
