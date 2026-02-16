function mostrarSeccion(id) {
    document.querySelector('.contenido-principal').style.display = 'block';
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(sec => sec.classList.remove('activa'));
    document.getElementById(id).classList.add('activa');
}
