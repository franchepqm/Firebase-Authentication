//ingresar en el head del login.html

<script type="module" src="firebaseconect.js"></script>
<script type="module" src="login.js"></script>


import { ManageAccount } from './firebaseconect.js';

document.getElementById("formulario-sesion").addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const account = new ManageAccount();
  account.authenticate(email, password);
  
});

console.log('Formulario de Inicio de Sesión');
