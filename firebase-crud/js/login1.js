//los getElementById se utilizan para obtener el valor de lo que se almacene en la id y en javascript se usa
//para guardarlos en una variable o constante
const form = document.getElementById("form")
const username = document.getElementById("usuario");
const contraseña = document.getElementById("contraseña");
//Esta funcion fue agregada para evitar que la pagina se recarge al presionar 'Ingresar'
form.addEventListener('submit', function(event){
    event.preventDefault()
    let users = Array (
        {
            usuario: username.value,
            contraseña: contraseña.value
        }
    )
    //localStorage y sessionStorage son propiedades que acceden al objeto (storage) y almacenan datos de manera local
    //como el localStorage solo obtiene datos String se usa el comando JSON.stringify para convertir todo el array en un string
    localStorage.setItem('user',JSON.stringify(users))
    //Redireccion a una pagina, tambien se puede usar location.assign('')
    location.href='agenda.html'
})
