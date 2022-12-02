const form = document.getElementById('form-agenda');
const nomesClientes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha (){

    const inputNomeClientes = document.getElementById('nome-cliente');
    const inputTelefones = document.getElementById('tel-cliente');

    if (nomesClientes.includes(inputNomeClientes.value)){
        alert(`O nome: ${inputNomeClientes.value} já foi inserido`);
    } else {
        nomesClientes.push(inputNomeClientes.value);
        telefones.push(inputTelefones.value);
        
        let linha = '<tr>';
        linha += `<td>${inputNomeClientes.value}</td>`;
        linha += `<td>${inputTelefones.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNomeClientes.value = '';
    inputTelefones.value = '';
}

function atualizaTabela (){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}