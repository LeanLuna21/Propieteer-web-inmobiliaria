
hdr = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Propieteer - ADMIN</title>
    <link rel="stylesheet" href="/Propieteer-Inmobiliaria/CSS/styles.css">
    <link rel="stylesheet" href="/Propieteer-Inmobiliaria/CSS/show-data.css">
    <link rel="stylesheet" href="/Propieteer-Admin/CSS/admin-styles.css">
    <link rel="shortcut icon" href="/Propieteer-Inmobiliaria/resources/real-estate2.png" type="image/x-icon">
    <!-- ATRIBUTED TO: <a href="https://www.flaticon.es/iconos-gratis/bienes-raices" title="bienes raíces iconos">Bienes raíces iconos creados por Vector Valley - Flaticon</a> -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner:wght@400;500;600;700&family=Ms+Madi&family=Sacramento&family=Wix+Madefor+Display:wght@500;700&family=Ysabeau+SC:wght@500;600;800&display=swap&family=AR+One+Sans:wght@400;500;700&display=swap&family=Quicksand:wght@300;600&display=swap" rel="stylesheet" rel=" stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
`
nav = `
    <nav class="show-info">
    <h1 id="feedback"> Propieteer - Admininistración </h1>
    <ul class="views-container">
        <li class="menu">
            <a class="line" href="../home.html"> HOME </a>
        </li>
        <li class="menu">
            <a class="line" href="propiedades.html"> PROPIEDADES </a>
        </li>
        <li class="menu">
            <a class="line" href="vendedores.html"> VENDEDORES </a>
        </li>
    </ul>
    </nav>
`
ftr = `
    <img id="footerImagen" src="/Propieteer-Inmobiliaria/resources/logo.png" alt="PROPIETEER LOGO"
                title="Home Page">
    <ul class="footer-contacto">
        <li>Av. Siempre Viva 1553</li>
        <li>1234-5678/ 11-9876-5432</li>
        <li><a href="mailto:propieteer@gmail.com">propieteer@gmail.com</a></li>
    </ul>
    <ul class="redes-container">
        <li><a href="https://www.instagram.com" target="_blank"><img
                    src="/Propieteer-Inmobiliaria/resources/instagram.svg" alt="propieteer instagram"
                    class="redes"></a></li>
        <li><a href="https://www.facebook.com" target="_blank"><img
                    src="/Propieteer-Inmobiliaria/resources/square-facebook.svg" alt="propieteer facebook"
                    class="redes"></a></li>
        <li><a href="https://www.twitter.com" target="_blank"><img
                    src="/Propieteer-Inmobiliaria/resources/twitter.svg" alt="propieteer twitter" class="redes"></a>
        </li>
        <li><a href="https://api.whatsapp.com/send?phone=11674158639121&text=Hola!%20Me%20gustaría%20hacer%20unar%20consulta%20%F0%9F%98%8A"
                target="_blank"><img src="/Propieteer-Inmobiliaria/resources/whatsapp.svg" alt="propieteer whatsapp"
                    class="redes"></a>
        </li>
    </ul>
    <p class="copy">Todos los derechos reservados RoMaFeLe INC 2023</p>
    <p>Sitio desarrollado por Romina Gargano, Marco Nuñez, Federica Taborda y Leando Luna - estudiantes Codo a Codo
        2023</p>
`
document.querySelector("head").innerHTML = hdr
document.querySelector("header").innerHTML = nav
document.querySelector("footer").innerHTML = ftr