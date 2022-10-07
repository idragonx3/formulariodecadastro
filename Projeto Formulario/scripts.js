// Começo das variáveis
var campoErroEmail = document.getElementById("msgErroEmail");
var campoErroNome = document.getElementById("msgErroNome");
var campoErroSenha = document.getElementById("msgErroSenha");
var campoEmail = document.getElementById("email");
var formatoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var enviar_cadastro = document.getElementById("enviarCadastro");
var campoNome = document.getElementById("nome");
var campoSenha = document.getElementById("senha");
var email_validado = 0;
// Fim das variáveis

// Começo dos Event Listeners
campoEmail.addEventListener("blur", validarEmail);
campoNome.addEventListener("blur", validarNome);
campoSenha.addEventListener("blur", validarSenha);
enviar_cadastro.addEventListener("click", validarCampos);
// Fim dos Event Listeners

// Função que habilita o botão de enviar cadastro
enviar_cadastro.disabled = false;


// Função que valida o email com match e seta a variavel de validacao de email.

function validarEmail() {
    if (campoEmail.value.match(formatoEmail)) {
        campoErroEmail.textContent = "";
        enviar_cadastro.disabled = false;
        email_validado = 1;
    } else if(campoEmail.value.length == 0){
        campoErroEmail.textContent = "O campo é obrigatório";
        enviar_cadastro.disabled = true;
    } 
    else {
        campoErroEmail.textContent = "Insira um email válido. Ex: email@email.com.br";
        enviar_cadastro.disabled = true;
        email_validado = 0;

}
}
//função que valida se o campo nome tem + de uma letra.

function validarNome() {
    if (campoNome.value.length == 0) {
        campoErroNome.textContent = "O campo nome é obrigatório";
        enviar_cadastro.disabled = true;
    } else {
        campoErroNome.textContent = "";
        enviar_cadastro.disabled = false;
    }
}
//função que valida se o campo senha tem mais de uma letra.

function validarSenha() {
    if (campoSenha.value.length == 0) {
        campoErroSenha.textContent = "O campo senha é obrigatório";
        enviar_cadastro.disabled = true;
    } else {
        campoErroSenha.textContent = "";
        enviar_cadastro.disabled = false;
    }
}
//função que valida se todos os campos estão preenchidos corretamente e informa o log de cadastro efetuado.

function validarCampos() {
    if (campoNome.value.length == 0) {
        validarNome();
    } else if (campoSenha.value.length == 0) {
        validarSenha();
    } else if (email_validado == 0) {
        validarEmail();
    } else {
        alert("Seu cadastro foi realizado com sucesso.")
    }

}

