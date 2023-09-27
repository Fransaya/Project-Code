const email = document.getElementById("email");
const password = document.getElementById("password");
const botonLogin = document.getElementById("botonLogin")

const emails = ["admin@compu-tech.com", "ventas@compu-tech.com", "tecnicos@compu-tech.com"]
const passwords = ["admin123", "elMasBonitoDelBarrio", "jKL743_"]
let emailEnvio=""
botonLogin.addEventListener("click", () => {
    if (emails.indexOf(email.value) === passwords.indexOf(password.value)) {
        window.parent.postMessage({email: email.value},"*");
        window.location.href = "negocio.html";
        console.log(`valor de email console index${emails.indexOf(email.value)}`);
        emailEnvio=email;
    };
});
/// FALTA VER CON COMO OBTENER EMAIL INGRESADO POR USUARIO, PARA DESPUES ENVIARLOS O PASARLO A PAGINA DE NOGICO
// EN CONSOLA NO ME MUESTRA NUNGUN VALOR DE EMAIL.
console.log(`valor de email a enviar: ${emailEnvio}`)
localStorage.setItem("email",emailEnvio);

