
let input = document.getElementById('inputTarefa');

let btnAdd = document.getElementById('btn-add');

let main = document.getElementById('areaLista');

let contador = 0;

function addTarefa() {

    let valorInput = input.value;

    if ((valorInput !== null) && (valorInput !== "") && (valorInput !== undefined)) {
        ++contador;
        let novoItem = ` <div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="fa-regular fa-circle"></i>
        </div>

        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}

        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="fa-solid fa-trash" style="color: white;"></i>Deletar</button>

         </div>
       </div>`;

        main.innerHTML += novoItem;

        input.value = "";
        input.focus();
    }

}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var icone = document.getElementById("icone_" + id);

    item.classList.toggle('clicado');
    icone.classList.toggle('fa-circle');
    icone.classList.toggle('fa-circle-check');
}


function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

input.addEventListener("keyup", function (event) {
    //Se teclar enter (13)
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})














