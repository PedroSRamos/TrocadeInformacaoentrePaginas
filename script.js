const senha = 'abc123'
const log = 'admin'

const start = () => {
    document.getElementById("button").onclick = checkNulls
    document.getElementById("formulario").onsubmit = checkLogin
}

const checkLogin = () => {
    document.getElementById("mensagem").innerHTML = ''
    event.preventDefault()
    const senha = document.getElementById("senha").value
    const login = document.getElementById("login").value
    if (senha === senha && login === log) {
        console.log("login")
        window.location.href = 'pagina.html'
    } else {
        document.getElementById("mensagem").innerHTML = 'Usuário/Senha inválidos!'
    }
    document.getElementById("senha").value = ''
}

const checkNulls = () => {
    const senha = document.getElementById("senha").value
    const login = document.getElementById("login").value
    if (!senha && !login) {
        document.getElementById("mensagem").innerHTML = 'Campo Usuário e senha são obrigatórios!'
    } else if (!login) {
        document.getElementById("mensagem").innerHTML = 'Campo de Usuário deve ser preenchido!'
    } else if (!senha) {
        document.getElementById("mensagem").innerHTML = 'Campo de Senha deve ser preenchido!'
    }
}





start()