// Mapeia os elementos da lista <ul>
const listaItens = document.querySelectorAll('ul li');

// Objeto para armazenar os valores associados aos itens da lista
const valoresGuardados = {};

// Adiciona um evento de clique a cada item da lista
listaItens.forEach((item) => {
    item.addEventListener('click', () => {
        // Pede ao usuário para inserir o valor associado ao item
        let valor = prompt('Digite o valor associado a ' + item.textContent + ':');

        // Converte o valor para um número
        valor = parseFloat(valor);

        // Verifica se o valor é um número válido
        if (!isNaN(valor)) {
            // Armazena o valor associado ao item no objeto
            valoresGuardados[item.textContent] = valor;
            alert('Valor ' + valor + ' guardado para ' + item.textContent);
        } else {
            alert('Por favor, insira um valor numérico válido.');
        }
    });
});

// Função para visualizar os valores guardados
function visualizarValores() {
    let mensagem = 'Valores Guardados:\n';
    for (let item in valoresGuardados) {
        mensagem += item + ': ' + valoresGuardados[item] + '\n';
    }
    alert(mensagem);
}

function visualizarValoresGuardados() {
    let mensagem = 'Valores Guardados:\n';
    for (let item in valoresGuardados) {
        mensagem += item + ': ' + valoresGuardados[item] + '\n';
    }
    alert(mensagem);
}

function resetarValoresGuardados() {
    valoresGuardados = {}; // Reinicia o objeto para um novo objeto vazio
    alert('Valores guardados foram resetados.');
}


