const firebaseConfig = {
    apiKey: "AIzaSyAAe9Oa_l5qjJ2yNUH_2tPd7A8Cg6a6vuE",
    authDomain: "crud-97343.firebaseapp.com",
    projectId: "crud-97343",
    storageBucket: "crud-97343.appspot.com",
    messagingSenderId: "157051861934",
    appId: "1:157051861934:web:d78c50d52c4d1e76a7263f"
  };

const openModal = document.getElementById('openRegisterModal')
const modal = document.getElementById('modal')
const closeModal = document.getElementById('closeRegisterModal')
const registerForm = document.getElementById('register-form')

firebase.initializeApp(firebaseConfig);
const contactRef = firebase.database().ref('Contacts')

const showRegisterModal = () => {
    modal.classList.toggle('is-active')
}

openModal.addEventListener('click', showRegisterModal)
closeModal.addEventListener('click', showRegisterModal)

registerForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const nombre = registerForm['nombre'].value
    const apellidoPaterno = registerForm['apePat'].value
    const apellidoMaterno = registerForm['apeMat'].value
    const telefono = registerForm['cel'].value
    const correoElectronico = registerForm['email'].value
    const descripcion = registerForm['desc'].value

    const registerContact = contactRef.push()
    registerContact.set({
        Uid: registerContact.path.pieces_[1],
        Nombre: nombre,
        Apellido_Paterno: apellidoPaterno,
        Apellido_Materno: apellidoMaterno,
        telefono: telefono,
        Correo_Electronico: correoElectronico,
        Descripcion: descripcion
    })
    showRegisterModal()
})