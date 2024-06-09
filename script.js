const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    const username = document.getElementById('Username');
    const nombre = document.getElementById('Nombre');
    const fechaNacimiento = document.getElementById('FechaNacimiento');
    event.preventDefault();

    if(username.value === '' && nombre.value === '' && !fechaNacimiento.value ){
        alert('Ninguno de los campos requeridos es valido');
    }else if (username.value === '') {
        alert('fallo la validacion: El campo Username está vacío');
    } else if (nombre.value === '') {
        alert('fallo la validacion: El campo Nombre está vacío');
    } else if (!fechaNacimiento.value) {
        alert('fallo la validacion: El campo Fecha Nacimiento está vacío');
    } else {
        const fechaNacimientoDate = new Date(fechaNacimiento.value);
        const hoy = new Date();
        
        const edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
        const mes = hoy.getMonth() - fechaNacimientoDate.getMonth();
        const dia = hoy.getDate() - fechaNacimientoDate.getDate();
        
        // Verificar si la persona tiene al menos 18 años
        if (edad > 18 || (edad === 18 && (mes > 0 || (mes === 0 && dia >= 0)))) {
            alert('Formulario enviado correctamente');
            // Limpiar los campos después de una validación exitosa
            username.value = '';
            nombre.value = '';
            fechaNacimiento.value = '';
        } else {
            alert('Debes ser mayor de edad (al menos 18 años) para registrarte');
        }
    }
});




/* const test = document.querySelector('#FechaNacimiento');
const juego = document.getElementById('#Nombre');

console.log(test);
console.log((juego.textContent)); */