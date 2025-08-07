let numerosSorteados = [];
let tamanhoDoJogo = 50;
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);
let tentativas = 1;
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;


    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e ' + tamanhoDoJogo);

    document.getElementById('reiniciar').setAttribute('disabled', true);    
}

exibirMensagemInicial();
mudar();

function verificarChute(){
    let chute = document.querySelector('input').value

    if(chute == numeroSecreto){
        let palavra = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1', 'Acertoouuuu');
        exibirTextoNaTela('p', `Descobriu em ${tentativas} ${palavra}`);

        document.getElementById('reiniciar').removeAttribute('disabled');

    }else if(chute > numeroSecreto){
        exibirTextoNaTela('p', 'O número secreto é menor.');
    }else{
        exibirTextoNaTela('p', 'O número secreto é maior');
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    console.log(numerosSorteados)
    let numeroEscolhido = parseInt(Math.random() * tamanhoDoJogo + 1);
    if(numerosSorteados.length == tamanhoDoJogo){
        alert('Não existem mais números, fim do jogo.');
    }else if(numerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
}

