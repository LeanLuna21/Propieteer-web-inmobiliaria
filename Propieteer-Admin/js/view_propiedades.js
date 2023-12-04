const propiedadesView = Vue.createApp({
  data() {
    return {
      propiedades: [],
      // si el backend esta corriendo local  usar localhost 5000(si no lo subieron a pythonanywhere)
       // si ya lo subieron a pythonanywhere
      error: false,
      /*atributos para el guardar los valores del formulario */
      ambientes: "",
      idPropiedad: 0,
      imagen: "",
      mail_contacto: "",
      descripcion: "",
      direccion: "",
      propietario: "",
      precio: 0,
      tel_contacto: "",
      provincia: "",
      url: "https://marconu2697.pythonanywhere.com/propiedades"
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(this.url);
          this.propiedades = data;
          console.log(data);
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },
    //  estos metodos hay que cambiarlos para la tabla vendedors
    eliminar(idPropiedad) {
      const url = this.url + "/" + idPropiedad;
      var options = {
        method: "DELETE",
      };
      fetch(url, options)
        .then((res) => res.text()) // or res.json()
        .then((res) => {
          alert("Registro Eliminado");
          location.reload(); // recarga el json luego de eliminado el registro
        });
    },

    grabar() {
      let propiedad = {
        ambientes: this.ambientes,
        descripcion: this.descripcion,
        direccion: this.direccion,
        imagen: this.imagen,
        mail_contacto: this.mail_contacto,
        precio: this.precio,
        propietario: this.propietario,
        provincia: this.provincia,
        tel_contacto: this.tel_contacto,
        // agrear los campos de la tabla (datos)
      };
      var options = {
        body: JSON.stringify(propiedad),
        method: "POST",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
      };
      fetch(this.url, options)
        .then(function () {
          alert("Registro grabado");
          window.location.href = "./prop_admin.html"; // recarga base donde se ven las tablas
        })
        .catch((err) => {
          console.error(err);
          alert("Error al Grabar"); // puedo mostrar el error tambien
        });
    },
  },
  created() {
    this.fetchData(this.url);
  },
}).mount("#view_propiedades");
