document.addEventListener('DOMContentLoaded', function() {
    iniciarapp();
});

function iniciarapp() {
    creargaleria();
    scrollnav();
    navegacionfija();
}

function navegacionfija() {
    const barra = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');

    window.addEventListener('scroll', function() {
        if (sobreFestival.getBoundingClientRect().bottom < 0) {
            barra.classList.add('fijo');
        } else {
            barra.classList.remove('fijo');
        }
    });
}

function scrollnav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a')

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const seccionSroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionSroll);
            seccion.scrollIntoView({ behavior: "smooth" });
        });
    });
}

function creargaleria() {
    const galeria = document.querySelector('.galeria-imagenes');
    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <img loading="lazy" width="200" height="200" src="img/thumb/${i}.jpg" alt="galeria">
        `;
        imagen.onclick = function() {
            mostrarImagen(i);
        }
        galeria.appendChild(imagen);
    }

}

function mostrarImagen(id) {
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
            <img loading="lazy" width="900" height="500" src="img/grande/${id}.jpg" alt="galeria">
        `;
    // crear la imegen
    const overlay = document.createElement('div');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick = function() {
            const body = document.querySelector('body');
            body.classList.remove('fijar-body');
            overlay.remove();
        }
        // crear el boton de cerrar 

    const cerrarModal = document.createElement('p');
    cerrarModal.classList.add('btn-cerrar');
    cerrarModal.textContent = 'X';
    overlay.appendChild(cerrarModal);
    cerrarModal.onclick = function() {
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }

    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}