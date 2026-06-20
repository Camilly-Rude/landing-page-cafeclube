// =========================================
// BOTÃO PARTICIPAR (index.html)
// =========================================

const botao = document.getElementById("btnParticipar");

if (botao) {

    botao.addEventListener("click", function () {

        alert(
            "Obrigado pelo interesse! Em breve você poderá participar do nosso clube."
        );

    });

}


// =========================================
// GALERIA (galeria.html)
// =========================================

const fotos = document.querySelectorAll(".foto");

if (fotos.length > 0) {

    fotos.forEach(foto => {

        foto.addEventListener("mouseover", () => {

            foto.style.boxShadow =
                "0 0 20px rgba(107,24,49,0.5)";

        });

        foto.addEventListener("mouseout", () => {

            foto.style.boxShadow =
                "0 0 10px rgba(0,0,0,0.15)";

        });

    });

}

// =========================================
// FORMULÁRIO - CLUBE DO LIVRO + SESSÃO DE FILME
// =========================================

// Seleciona qualquer formulário da página (livro ou filme)
const formInscricao = document.querySelector("form");

if (formInscricao) {

    formInscricao.addEventListener("submit", function (event) {

        // impede recarregar a página
        event.preventDefault();

        // pega os campos (mesmos ids nas duas páginas)
        const nome = document.getElementById("nome");
        const email = document.getElementById("email");

        // validação básica obrigatória
        if (!nome.value || !email.value) {

            alert("⚠️ Preencha nome e e-mail antes de enviar.");

            return;
        }

        // mensagem de sucesso
        alert("✅ Inscrição realizada com sucesso! Em breve entraremos em contato.");

        // limpa o formulário
        formInscricao.reset();

    });

}

// =========================================
// QUIZ (quiz.html)
// =========================================

const formulario = document.getElementById("quizForm");
const resultado = document.getElementById("resultado");

if (formulario) {

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        // CAPTURA DAS RESPOSTAS
        
        const atracao = document.querySelector('input[name="atracao"]:checked');
        const livro = document.querySelector('input[name="livro"]:checked');
        const filme = document.querySelector('input[name="filme"]:checked');
        const bebida = document.querySelector('input[name="bebida"]:checked');
        const periodo = document.querySelector('input[name="periodo"]:checked');

        // VALIDAÇÃO
        
        if (!atracao || !livro || !filme || !bebida || !periodo) {

            resultado.innerHTML =
                "<p>⚠️ Por favor, responda todas as perguntas.</p>";

            return;
        }

        // PERFIL PRINCIPAL

        let perfil = "";

        if (atracao.value === "livro") {
            perfil = "📚 Explorador de Histórias";

        } else if (atracao.value === "filme") {
            perfil = "🎬 Cinéfilo do Café";

        } else if (atracao.value === "cafe") {
            perfil = "☕ Amante de Café";

        } else {
            perfil = "🤝 Social e Comunicativo";
        }

        // RESULTADO FINAL
        
        resultado.innerHTML = `
            <h2>${perfil}</h2>
            <p>Você combina com experiências do Café Clube!</p>
            <p><strong>Livro:</strong> ${livro.value}</p>
            <p><strong>Filme:</strong> ${filme.value}</p>
            <p><strong>Bebida:</strong> ${bebida.value}</p>
            <p><strong>Período:</strong> ${periodo.value}</p>
        `;

    });

}