const email = document.getElementById("email");
const password = document.getElementById("password");
const botonLogin = document.getElementById("botonLogin")

const emails = ["admin@compu-tech.com", "ventas@compu-tech.com", "tecnicos@compu-tech.com"]
const passwords = ["admin123", "elMasBonitoDelBarrio", "jKL743_"]

botonLogin.addEventListener("click", () => {
    if (emails.indexOf(email.value) === passwords.indexOf(password.value)) {
        window.location.href = "negocio.html";
    };
});