# jogo_do_num_secret
	README.md
Explicando e resumindo cada parte do código apresentado.

alert = cria um alerta na prompt ;

let = Espaço na memória para armazenamento ;

mensagens e textos no js é para utilizar aspas simples '';

prompt = cria uma caixa;

arrays = Nos permite guardar elementos em forma de fila;

ParseInt() = Converte um argumento de string e retorna um numero inteiro da raiz ou base especifica;

Math.random() = Função do Javascript que retorna um número pseudo aleatório em um intervalo >0<1;

Document.querySelector('h1') = ele seleciona oque esta no campo do html com esse titulo;

Inner.HTML = Dentro do javascript posso escrever no HTML;

function nome(parametros){
console.log('Hello Word!');
}

Return = retorna algo que foi colocado nas linhas de cima do código;

value = coleta somente o valor 

Hoisting = Permite que você execute funções antes das suas 'elevações' declarações. Na pratica, inicialmente as declarações
de funções são colocadas na memória durante a fase de compilação.

Hoisting NÃO é indicado em VAR;
Em Let aparece mensagem de erro;

Document.getElementById = Vai no HTML e pega oque estiver nele com base no ID 

RemoveAttribute = Remove o atributo de uma determinada função ou html 
SetAttribute = Coloca um atributo novo 
	Ex: Tenho um botão no HTML com o id reiniciar:
			Document.getElementById ('Reiniciar').removeAttribute('Disable')  // Remove o atributo
					
		Document.getElementById('Reiniciar').SetAttribute (disable;true)  //o botão que foi desabilitado volta a se habilitado


Tofixed() = Método que converte um número para string e também arredonda a string para um número específico de casas decimais. Para especificar basta colocar entre parênteses

Math.Pi é a propriedade de dados estáticos que representa a razão entre circunferências de um círculo e seu diâmetro aproximadamente 3,14159.

INCLUDES = Verifica se os elementos já estão na lista se estiver é verdadeiro e deve ser atribuído uma causa e se não for é falso e pode ser atribuído uma causa
obs: para cria-lo utiliza a mesma estrutura do IF.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
						VARIÁVEIS.

Utilização de VAR: é melhor utilizar quando o código for menos abrangente, quando for utilizado em um pequeno trecho de código.
 Pode ser utilizado mesmo antes de sua declação.
 
LET é para ser utilizado em escopo de bloco e só pode ser utilizado após sua declaração.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
						ARRAYS = LISTAS
Nos permite guardar elementos em forma de fila, o primeiro elemento da lista sempre vai ter o índice 0
índice = posição do elemento da lista

	
	EX:
		let cores = ['amarelo','vermelho','azul'];

		console.log(cores);
	Cores.push('verde')  //inserção
	Push = adiciona o item no final da lista
	
	Cores.pop()  //Retira o elemento do final da lista

	Console.log(cores.length)  //Verificar o tamanho da lista que nesse caso a saída seria 3
	Length = Tamanho

	var ultimo = cores[cores.length-1];  // Mostra o último dado da lista
------------------------------------------------------------------------------------------------------------------------------
					OPERADORES TERNÁRIOS
Melhor método caso precise de um código que retorne 2 valores, duas possibilidades

		Ex: let palavraPessoas = quantidadeDePessoas == 1 ? "Pessoa" : "Pessoas"

	Ex com valores: function encontrarMaior(a,b) {
			return a>b ? a : b;
}

	let maiorNumero = encontrarMaior(15,9);
console.log(maiorNumero);                                    // o valor retornado será o 15;
					
