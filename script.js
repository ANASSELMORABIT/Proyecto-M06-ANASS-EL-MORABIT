// ANASS EL MORABIT

//M06 - Proyecto UF1


window.onload = () => {
    // Crear tarjetas
    crearTarjetas(filosofos)

    // Crear handlers para los botones de control
    let botonCrearTarjeta = document.querySelector('.create-btn');
    botonCrearTarjeta.addEventListener('click',crearNuevaTarjeta);

    let botonOrdenarAz = document.querySelectorAll('.sort-btn')[0];
    botonOrdenarAz.addEventListener('click',ordenarNombreAZ);

    let botonOrdenarZa = document.querySelectorAll('.sort-btn')[1];
    botonOrdenarZa.addEventListener('click',ordenarNombreZA);

    let botonGuardarTarjetas = document.querySelector('.save-btn');
    botonGuardarTarjetas.addEventListener('click',guardarTarjetas);

    let botonCargarTarjetas = document.querySelector('.load-btn');
    botonCargarTarjetas.addEventListener('click',cargarTarjetas);
}

function crearTarjetas(filosofos) {
    filosofos.forEach((filosofo) => {
        // Creamos tarjeta vacía
        let tarjeta = document.createElement('div');
        tarjeta.classList.add('card');
        // Creamos imagen
        let imagen = document.createElement('img');
        imagen.src = filosofo.imagen;
        imagen.alt = `Foto de ${filosofo.nombre}`;
        imagen.classList.add("photo");
        tarjeta.append(imagen);

        // Creamos caja de informacion
        let info = document.createElement('div');
        info.classList.add('card-info');
        tarjeta.append(info);
        // Creamos título
        let titulo = document.createElement('h3');
        titulo.classList.add('nombre');
        titulo.innerHTML = filosofo.nombre;
        info.append(titulo);
        // Creamos fila de información (info-row)
        let filaInfo = document.createElement('div');
        filaInfo.classList.add('info-row');
        info.append(filaInfo);

        // Añadimos info del país a filaInfo

        let ingoPais = document.createElement('div');
        ingoPais.classList.add('info-pais');
        filaInfo.append(ingoPais);

        let bandera = document.createElement('img');
        bandera.src = filosofo.pais.bandera;
        bandera.alt = `Bandera de ${filosofo.pais.nombre}`;
        ingoPais.append(bandera);

        let nombrePais = document.createElement('span');
        nombrePais.classList.add('pais');
        nombrePais.innerHTML = filosofo.pais.nombre;

        ingoPais.append(nombrePais);

        
        
        
        // Añadimos info de la corriente a filaInfo

        let ingresoCorriente = document.createElement('div');
        ingresoCorriente.classList.add('info-corriente');
        filaInfo.append(ingresoCorriente);

        let corrientevacio = document.createElement('span');
        corrientevacio.innerHTML = 'Corriente: ';
        ingresoCorriente.append(corrientevacio);

        let corriente = document.createElement('span');
        corriente.classList.add('corriente');
        corriente.innerHTML = filosofo.corriente;
        ingresoCorriente.append(corriente);


        // Añadimos info del arma a filaInfo

        let ingresoArma = document.createElement('div');
        ingresoArma.classList.add('info-arma');
        filaInfo.append(ingresoArma);

        let armaVacio = document.createElement('span');
        armaVacio.innerHTML = 'Arma: ';
        ingresoArma.append(armaVacio);

        let arma = document.createElement('span');
        arma.classList.add('arma');
        arma.innerHTML = filosofo.arma;
        ingresoArma.append(arma);
        

        // Añadimos caja de habilidades
        let habilidades = document.createElement('div');
        habilidades.classList.add('skills');
        info.append(habilidades);
        // Añadimos una a una las habilidades
        for (let infoHabilidad of filosofo.habilidades) {

            // Añadimos una caja de habilidad
            let habilidad = document.createElement('div');
            habilidad.classList.add('skill');
            habilidades.append(habilidad);
            
            // Añadimos contenido caja de habilidad

            // 1.Icono de habilidad
            // let icono = document.createElement('img');
            // icono.src = 'https://via.placeholder.com/16';
            // icono.alt = `Icono de ${infoHabilidad}`;
            // habilidad.append(icono);

            
            // 2.Etiqueta de habilidad
            let etiqueta = document.createElement('span');
            etiqueta.classList.add('skill-name');
            etiqueta.innerHTML = infoHabilidad.habilidad;
            habilidad.append(etiqueta);
            
            // 2.Barra de habilidad
            let barra = document.createElement('div');
            barra.classList.add('skill-bar');
            habilidad.append(barra);

            let nivel = document.createElement('div');
            nivel.classList.add('level');
            nivel.style.width = `${(infoHabilidad.nivel/4)*100}%`; 
            barra.append(nivel);
            
        }

        
        let botonEliminar = document.createElement('div');  // Creamos el botón para borrar la tarjeta, y asignamos el event listener a la función eliminarTarjeta
        botonEliminar.classList.add('botonEliminar');
        botonEliminar.innerHTML = '&#x2716';
        botonEliminar.addEventListener('click', () => eliminarTarjeta(tarjeta));
        tarjeta.append(botonEliminar);

        // Añadimos tarjeta creada al contenedor de tarjetas
        let contenedor = document.querySelector('.cards-container');
        contenedor.append(tarjeta);
    })
}

function eliminarTarjeta(tarjeta) {
    tarjeta.remove();
}
function ordenarNombreAZ() {
    let tarjetas = Array.from(document.querySelectorAll('.card'));
    let tarjetasOrdenadas = tarjetas.sort((tarjetaA, tarjetaB) => {
        let nombre1 = tarjetaA.querySelector('h3').innerHTML;
        let nombre2 = tarjetaB.querySelector('h3').innerHTML;
        return nombre1.localeCompare(nombre2);
    });

    

    // Eliminar totes les targetes de l'array 'tarjeta'
    tarjetas.forEach(tarjeta => tarjeta.remove());


    // Afegir 'tarjetasOrdenadas' al contenidor de cards
    let contenedor = document.querySelector('.cards-container');
    tarjetasOrdenadas.forEach(tarjeta => contenedor.append(tarjeta));


    
    


}

function ordenarNombreZA() {
    let tarjetas = Array.from(document.querySelectorAll('.card'));
    let tarjetasOrdenadas = tarjetas.sort((tarjetaA, tarjetaB) => {
        let nombre1 = tarjetaA.querySelector('h3').innerHTML;
        let nombre2 = tarjetaB.querySelector('h3').innerHTML;
        return nombre2.localeCompare(nombre1);
    });

    // Eliminar totes les targetes de l'array 'tarjeta'
    tarjetas.forEach(tarjeta => tarjeta.remove());


    // Afegir 'tarjetasOrdenadas' al contenidor de cards
    let contenedor = document.querySelector('.cards-container');
    tarjetasOrdenadas.forEach(tarjeta => contenedor.append(tarjeta));

}

const habilidadesNombres = ["Sabiduría", "Oratoria", "Lógica", "Innovación"];

function crearNuevaTarjeta(event) {
    event.preventDefault();
    let nuevoFilosofo = {};
    nuevoFilosofo.nombre = document.querySelector('.create-card-form .nombre').value;
    nuevoFilosofo.imagen = document.querySelector('.create-card-form .foto').value;
    nuevoFilosofo.pais = {
        nombre: document.querySelector('.create-card-form .pais').value,
        bandera: document.querySelector('.create-card-form .bandera').value,
    };

    nuevoFilosofo.corriente = document.querySelector('.create-card-form .corriente').value;
    nuevoFilosofo.arma = document.querySelector('.create-card-form .arma').value;
    nuevoFilosofo.habilidades = [];
    const habilidadesInputs = document.querySelectorAll('.create-card-form .skills');
    habilidadesInputs.forEach((input, index) => {
        nuevoFilosofo.habilidades.push({
            
            habilidad: habilidadesNombres[index], 
            nivel: input.value,
        });
    });

    // Limpiar el formulario después de crear la tarjeta
    let Formulario = document.querySelector('.create-card-form');
    Formulario.querySelector('.nombre').value = '';
    Formulario.querySelector('.foto').value = '';
    Formulario.querySelector('.pais').value = '';
    Formulario.querySelector('.bandera').value = '';
    Formulario.querySelector('.corriente').value = '';
    Formulario.querySelector('.arma').value = '';
    Formulario.querySelectorAll('.skills').forEach(skill => skill.value = '');

    crearTarjetas([nuevoFilosofo]);
}



function parsearTarjetas(tarjetas) {
    let filosofosParseados = [];
    for (let tarjeta of tarjetas) {
        let filosofo = {};
        
        // Extraer nombre e imagen
        filosofo.nombre = tarjeta.querySelector('.nombre')?.innerHTML || '';
        filosofo.imagen = tarjeta.querySelector('.photo')?.src || '';


        const infoPaisDiv = tarjeta.querySelector('.info-pais');
        
        // Extraer país y bandera
        let paisNombre = tarjeta.querySelector('.pais')?.innerHTML || '';
        let banderaSrc = infoPaisDiv?.querySelector('img')?.src || '';
        filosofo.pais = {
            nombre: paisNombre,
            bandera: banderaSrc,
        };

        // Extraer corriente y arma
        filosofo.corriente = tarjeta.querySelector('.corriente')?.innerHTML || '';
        filosofo.arma = tarjeta.querySelector('.arma')?.innerHTML || '';
        
        // Extraer habilidades
        filosofo.habilidades = [];
        let habilidadesDom = tarjeta.querySelectorAll('.skill');

        
        
        habilidadesDom.forEach(habilidad => {
            let nombreHabilidad = habilidad.querySelector('.skill-name')?.innerHTML || '';
            let nivelHabilidad = habilidad.querySelector('.level')?.style.width || '0%';
            // Convertir el porcentaje de nivel en un valor entre 0 y 4
            let nivel = parseInt(nivelHabilidad) / 25 || 0;

            filosofo.habilidades.push({
                habilidad: nombreHabilidad,
                nivel: nivel,
            });
        });

        filosofosParseados.push(filosofo);
    }

    
    return filosofosParseados;
}

function guardarTarjetas() {
    let tarjetas = Array.from(document.querySelectorAll('.card'));

    
    let tarjetasParseadas = parsearTarjetas(tarjetas);
    localStorage.setItem('tarjetas', JSON.stringify(tarjetasParseadas));
}


function cargarTarjetas() {
    // Obtener contenedor de las tarjetas
    let ContenidoTarjetas = document.querySelector('.cards-container');

    // Verificar si hay tarjetas guardadas en localStorage
    let tarjetasGuardadas = localStorage.getItem('tarjetas');

    if (tarjetasGuardadas) {
        // Si hay tarjetas guardadas, limpiamos el contenido actual y las cargamos
        ContenidoTarjetas.innerHTML = ''; // Limpia el contenedor
        let tarjetasParseadas = JSON.parse(tarjetasGuardadas); // Parseamos las tarjetas
        crearTarjetas(tarjetasParseadas); // Crea las tarjetas a partir del array guardado
    } else {
        // Si no hay tarjetas guardadas, mostramos un mensaje opcional (opcional)
        console.log("No hay tarjetas guardadas en localStorage");
    }
}

const filosofos = [
    {
        nombre: "Platón",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Plato_Pio-Clemetino_Inv305.jpg/1200px-Plato_Pio-Clemetino_Inv305.jpg",
        pais: {
            nombre: "Grecia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/640px-Flag_of_Greece.svg.png"
        },
        corriente: "Idealismo",
        arma: "Dialéctica",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 4
        },
        {
            habilidad: "Oratoria",
            nivel: 4
        },
        {
            habilidad: "Lógica",
            nivel: 3
        },
        {
            habilidad: "Innovación",
            nivel: 4
        }
        ]
    },
    {
        nombre: "Aristóteles",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXUwy_fFGOJ2vwOMpwtJPyXc9HVb06HSRsbembn7IPKq6D1YitIra2WFM4Gu2rm6yHRs&usqp=CAU",
        pais: {
            nombre: "Grecia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/640px-Flag_of_Greece.svg.png"
        },
        corriente: "Naturalismo",
        arma: "Lógica",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 4
        },
        {
            habilidad: "Oratoria",
            nivel: 3
        },
        {
            habilidad: "Lógica",
            nivel: 4
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Descartes",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/800px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
        pais: {
            nombre: "Francia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png"
        },
        corriente: "Racionalismo",
        arma: "Meditación",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 3
        },
        {
            habilidad: "Lógica",
            nivel: 2
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Kant",
        imagen: "https://i.pinimg.com/736x/20/89/7f/20897f915acb5124893a278c395382ed.jpg",
        pais: {
            nombre: "Alemania",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png"
        },
        corriente: "Trascendentalismo",
        arma: "Crítica",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 2
        },
        {
            habilidad: "Lógica",
            nivel: 3
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Hume",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFZYg2MiOQSXbkBvFP-T3vW9pnhLW5qDioA&s",
        pais: {
            nombre: "Escocia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/640px-Flag_of_Scotland.svg.png"
        },
        corriente: "Empirismo",
        arma: "Escepticismo",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 3
        },
        {
            habilidad: "Lógica",
            nivel: 3
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Arendt",
        imagen: "https://efeminista.com/wp-content/uploads/2021/09/Arendt-Hannah-1-e1576158475623.jpg",
        pais: {
            nombre: "Alemania",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png"
        },
        corriente: "Fenomenología",
        arma: "Parresía",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 2
        },
        {
            habilidad: "Lógica",
            nivel: 2
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    }
]