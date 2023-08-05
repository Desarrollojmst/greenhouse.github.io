
document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registrationForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const userList = document.getElementById("users");
	const nombreInput = document.getElementById("nombre");
	const apellidoInput = document.getElementById("apellido");

    registrationForm.addEventListener("submit", (event) => {
        event.preventDefault();

   
		const nombre = nombreInput.value;
		const apellido = apellidoInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;

       
        const listItem = document.createElement("li");
        listItem.textContent = `Nombres:${nombre}, Apellidos:${apellido}, Correo: ${email}, Contraseña: ${password}`;

      
        userList.appendChild(listItem);

   
		nombreInput.value = "";
		apellidoInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";
		
		
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const contentContainer = document.querySelector(".content");

  
    function loadPageContent(pageUrl) {
        fetch(pageUrl)
            .then(response => response.text())
            .then(html => {
                contentContainer.innerHTML = html;
            })
            .catch(error => {
                console.error("Error al cargar el contenido: ", error);
            });
    }

   
    const currentPage = window.location.pathname;
    if (currentPage === "/index.html" || currentPage === "/") {
        loadPageContent("index.html");
    } else if (currentPage === "/quienes_somos.html") {
        loadPageContent("quienes_somos.html");
    }


});


document.addEventListener("DOMContentLoaded", () => {
    const jobSearchForm = document.getElementById("jobSearchForm");
    const jobSearchResult = document.getElementById("jobSearchResult");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const experienceInput = document.getElementById("experience");
    const resultText = document.getElementById("resultText");

    jobSearchForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Obtener los valores del formulario
        const name = nameInput.value;
        const email = emailInput.value;
        const experience = experienceInput.value;

        // Realizar una lógica de búsqueda ficticia (puedes personalizarla según tus necesidades)
        let jobResult = "¡Felicitaciones! Has encontrado el empleo perfecto para ti.";

        // Mostrar el resultado de la búsqueda
        jobSearchForm.style.display = "none";
        jobSearchResult.style.display = "block";
        resultText.textContent = jobResult;
    });
});
