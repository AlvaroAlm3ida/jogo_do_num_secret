let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatório();
let tentativas = 1;
//let titulo = document.querySelector('h1'); //ele seleciona a linha 22 do index.
//titulo.innerHTML = 'Jogo do número secreto'  ;      //vai dentro do HTML daquela variável

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';  //entre aspas simples é texto

// Esse código abaixo é uma versão um pouco melhorada utilizando de funções;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',
        {rate:1.2} ); // controla a velocidade de fala
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute()  {
    let chute = document.querySelector('input').value; //coleta o valor dentro do input

    if(chute==numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns, você acertou!!!!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Chapinha, você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');   // remove o atributo que esta na linha 28 do HTML que desativa o button
    }else{
        if(chute > numeroSecreto){
        exibirTextoNaTela('p', 'O número secreto é menor');
        }else{
                exibirTextoNaTela('p','O número secreto é maior');
        }
        tentativas ++;

        limparCampo();
    }

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';      //se não tiver nada entre aspas ele entende que deve ficar vazio.
}          
}                                                         // Função é um trecho de código que é responsável por uma determinada ação.
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';      //se não tiver nada entre aspas ele entende que deve ficar vazio.
}

function gerarNumeroAleatório(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;      // Verificação para ver se foi atingido o número máximo.
    if(quantidadeDeElementosNaLista == numeroLimite){          
        listaDeNumerosSorteados = [];         
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
            return gerarNumeroAleatório();  //Método de recursão na qual uma função se chama novamente ao final; função que chama a própria função no final
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);  //Pega o numero e coloca ao final da lista
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function reiniciarJogo() {
    numeroSecreto=gerarNumeroAleatório();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);   // o botão Novo jogo sera desabilitado após reiniciar o jogo
}                                                                        