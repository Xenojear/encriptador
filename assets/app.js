const botonEncriptar = document.querySelector(".botonEncriptar");
const botonDesencriptar = document.querySelector(".botonDesencriptar");
const textoEncriptado = document.querySelector('.textoEncriptado');
const botonCopiar = document.querySelector('.botonCopiar');
const regla = document.querySelector('.regla');

(() => {
    botonEncriptar.addEventListener('click', encriptarTexto);
    botonDesencriptar.addEventListener('click', desencriptarTexto);
    textoEncriptado.addEventListener('click', copiarTexto);

})()

function encriptarTexto() {

    let textoIngresado = document.querySelector("#textoEncriptador").value;
    if (removerAcentos(textoIngresado)) {
        return
    }

    let encriptado = textoIngresado.replace(/a/mg, "ai")
        .replace(/e/mg, "enter")
        .replace(/i/mg, "imes")
        .replace(/o/mg, "ober")
        .replace(/u/mg, "ufat");

    mostrarHTML(encriptado)
    document.querySelector("#textoEncriptador").value = '';
}

function desencriptarTexto() {
    let texto = document.querySelector("#textoEncriptador").value;
    texto = texto.toLowerCase();
    let textoEncriptado = texto.replace(/enter/mg, 'e');
    textoEncriptado = textoEncriptado.replace(/imes/mg, 'i');
    textoEncriptado = textoEncriptado.replace(/ai/mg, 'a');
    textoEncriptado = textoEncriptado.replace(/ober/mg, 'o');
    textoEncriptado = textoEncriptado.replace(/ufat/mg, 'u');
    mostrarHTML(textoEncriptado)
    document.querySelector("#textoEncriptador").value = '';
}

function copiarTexto() {
    const textoEncriptado = document.querySelector('.textoEncriptado textarea');
    textoEncriptado.select();
    document.execCommand('copy');
}

function mostrarHTML(encriptado) {
    let npc=document.getElementById("npc");
    npc.src = "assets/img/npc-con-signo-de-exclamacion.png"
    textoEncriptado.innerHTML = `
        <h2 id="tituloMensaje">${"El texto se ha encriptado con éxito."}</h2>
        <textarea class="resultado">${encriptado}</textarea>
        <button class="botonCopiar">Copiar</button>
        `
}

function removerAcentos(textoIngresado) {
    if (textoIngresado.normalize("NFD").replace(/[\u0300-\u036f]/g, "") !== textoIngresado) {
            alert("¡No se deben usar acentos! Vuelva a intentarlo")
    };

    if (textoIngresado !== textoIngresado.toLowerCase()) {
            alert("¡No se deben usar mayúsculas! Vuelva a intentarlo")
    };
    return false
}
