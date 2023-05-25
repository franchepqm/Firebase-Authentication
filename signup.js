//ingresar en el head del signup.html
<script type="module" src="signup.js"></script>

import { ManageAccount } from './firebaseconect.js';

document.getElementById("formulario-crear").addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const account = new ManageAccount();
  account.register(email, password);

});

console.log('Formulario de Registro');
