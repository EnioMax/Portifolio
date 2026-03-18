/* 
VALORES INICIAIS DE ACESSIBILIDADE
- Define tamanho padrão da fonte e limites mínimo e máximo.
*/
let tamanhoFonte = 16;
const tamanhoMinimo = 12;
const tamanhoMaximo = 24;


/*
GARANTE QUE O HTML ESTEJA CARREGADO ANTES DE EXECUTAR O JAVASCRIPT
*/
document.addEventListener("DOMContentLoaded", function () {

    /* CAPTURA DOS ELEMENTOS PRINCIPAIS */
    const formulario = document.getElementById("formularioContato");
    const campoNome = document.getElementById("nome");
    const campoEmail = document.getElementById("email");
    const campoMensagem = document.getElementById("mensagem");

    const botaoAumentar = document.getElementById("aumentarFonte");
    const botaoDiminuir = document.getElementById("diminuirFonte");


    /* 
    VALIDAÇÃO DE FORMULÁRIO
    - Impede recarregamento da página
    - Verifica campos obrigatórios
    - Valida formato de email
    */
    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        let nome = campoNome.value.trim();
        let email = campoEmail.value.trim();
        let mensagem = campoMensagem.value.trim();

        /* VERIFICA CAMPOS VAZIOS */
        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        /* VALIDAÇÃO DE EMAIL COM REGEX */
        const regexEmail = /\S+@\S+\.\S+/;

        if (!regexEmail.test(email)) {
            alert("Digite um email válido.");
            return;
        }

        /* SIMULA ENVIO */
        alert("Mensagem enviada com sucesso!");

        /* LIMPA FORMULÁRIO */
        formulario.reset();
    });


    /*
    CONTROLE DE ACESSIBILIDADE – AUMENTAR FONTE
    */
    botaoAumentar.addEventListener("click", function () {

        if (tamanhoFonte < tamanhoMaximo) {
            tamanhoFonte += 2;
            document.body.style.fontSize = tamanhoFonte + "px";
        }

    });

/*
    CONTROLE DE ACESSIBILIDADE – DIMINUIR FONTE
    */
    botaoDiminuir.addEventListener("click", function () {

        if (tamanhoFonte > tamanhoMinimo) {
            tamanhoFonte -= 2;
            document.body.style.fontSize = tamanhoFonte + "px";
        }

    });

});

