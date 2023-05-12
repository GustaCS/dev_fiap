document.querySelector("#salvar").addEventListener("click",cadastrar)

function cadastrar(){
    const nome  = document.querySelector('#nome').value
    const preco  = document.querySelector('#preco').value
    const marca  = document.querySelector('#marca').value
    const tipo = document.querySelector('#tipo_produto').value
    const imagem = "./img/"+marca+".png"

    const modal = bootstrap.Modal.getInstance(document.querySelector('#exampleModal'))

    const tarefa = {
        nome,
        preco,
        marca,
        tipo,
        imagem
    }

    if(!validar(tarefa.nome,document.querySelector("#nome")))return
    if(!validar(tarefa.preco,document.querySelector("#preco")))return

    document.querySelector("#tarefas").innerHTML += createCard(tarefa)

    modal.hide()
}

function validar(valor,campo){
    //clean code
    if(valor==""){
        campo.classList.add("is-invalid")
        campo.classList.remove("is-valid")
        return false
    }

    campo.classList.remove("is-invalid")
    campo.classList.add("is-valid")
    return true
}
function apagar(botao){
    botao.parentNode.parentNode.parentNode.remove()
}
function createCard(tarefa){
    return `
    <div class="col-lg-3 col-md-12">
    <div class="card">
        <div class="card-header">
        ${tarefa.nome}
        </div>
        <div class="card-body">
          <div class="text-center">
            <img src="${tarefa.imagem}" class="card-img-top" alt="...">
          </div>
            <p class="card-text">R$ ${tarefa.preco}</p>
            <p class="float-start"><span class="badge text-bg-light">${tarefa.marca}</span></p>
            <p> <span class="badge text-bg-dark">${tarefa.tipo}</span></p>
            <a href="#" class="btn btn-success" title="marcar como concluida">
            <i class="bi bi-check-lg"></i>
            </a>
            <a  onClick ="apagar(this)" href="#" class="btn btn-danger" title="apagar tarefa">
            <i class="bi bi-trash"></i>
            </a>
        </div>
    </div>
    </div>`//template literals
}

