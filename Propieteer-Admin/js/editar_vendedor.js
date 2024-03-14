console.log(location.search);     // lee los argumentos pasados a este formulario
// location.search.substr(12)  // producto_update.html?id=1

// console.log(location.search); // reads the arguments passed to this form
const params = new URLSearchParams(location.search);
const id = params.get('idVendedor'); // assuming the URL is like editarVendedor.html?idVendedor=1
console.log(id);

const { createApp } = Vue
createApp({
    data() {
      return {
        apellido:"",
        idVendedor:0,
        descripcion:"",
        imagen:"",
        mail:"",
        matricula:"",
        nombre:"",
        profesion:"", 
        sueldo:0,
        telefono:0,
        url:'https://leanluna.pythonanywhere.com/vendedores' + id,
       }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => {
                    console.log(response);
                    return response.json();
                })
                .then(data => {
                    console.log('API Response:', data);
                    if (Object.keys(data).length === 0) {
                        // Handle empty response, e.g., display a message
                        console.log('Empty response received');
                    } else {
                        console.log(data)
                        this.idVendedor = data.idVendedor
                        this.apellido = data.apellido
                        this.nombre = data.nombre
                        this.matricula = data.matricula
                        this.profesion = data.profesion
                        this.descripcion = data.descripcion
                        this.mail = data.mail
                        this.telefono = data.telefono
                        this.sueldo = data.sueldo
                        this.imagen = data.imagen
                    }
                })
                .catch(err => {
                    console.error(err)
                    this.error = true
                })
        },
        modificar() {
            let vendedor = {
                apellido: this.apellido,
                nombre: this.nombre,
                matricula: this.matricula,
                profesion: this.profesion,
                descripcion: this.descripcion,
                mail: this.mail,
                telefono: this.telefono,
                sueldo: this.sueldo,
                imagen: this.imagen
            }
            var options = {
                body: JSON.stringify(vendedor),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./vendedores.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#appeditar1')