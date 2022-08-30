const html = document.querySelector('html')
const check = document.querySelector('#checkbox')

check.addEventListener('change', function() {
    html.classList.toggle('dark')
})


let Nome = window.document.getElementById('Nome')
let Email = document.querySelector('#Email')
let Mensagem = document.querySelector('#Mensagem')
let Mapa = document.querySelector('#Mapa')

let NomeOk = false
let EmailOk = false
let MensagemOk = false

Nome.style.width = '100%'
Email.style.width = '100%'

function validaNome() {
    let txt = document.querySelector('#txtNome')
   
    if(Nome.value.length < 3) {
    txtNome.innerHTML = 'Nome Inválido'
    txtNome.style.color = 'red'
   } else {
    txtNome.innerHTML = 'Aceito!'
    txtNome.style.color = 'green'
    NomeOk = true
}
}

function validaEmail() {
    let txt = document.querySelector('#txtEmail')
   
    if(Email.value.indexOf('@') == -1 || Email.value.indexOf('.') == -1) {
    txtEmail.innerHTML = 'Email Inválido'
    txtEmail.style.color = 'red'
   } else {
    txtEmail.innerHTML = 'Aceito!'
    txtEmail.style.color = 'green'
    EmailOk = true
}
}


function validaMensagem() {
    let txt = document.querySelector('#txtMensagem')
   
    if(Mensagem.value.length <= 20) {
    txtMensagem.innerHTML = 'Mensagem muito curta!'
    txtMensagem.style.color = 'red'
   } else {
    txtMensagem.style.display = 'none' 
    MensagemOk = true  
}
}

function Enviar() {
    if (NomeOk == true && EmailOk == true && MensagemOk == true) {
        alert('Agradecemos a sua mensagem!')
    } else {
        alert('Preencha todos os campos')
    }
}

function mapaZoom() {
    Mapa.style.width = '800px'
    Mapa.style.length = '600px'

}

function mapaNormal() {
    Mapa.style.width = '400px'
    Mapa.style.length = '300px'
    
}
