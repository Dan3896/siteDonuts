const btnLogin = document.getElementById('btnLogin');
const btnFechar = document.getElementById('btnFechar');

btnLogin.onclick = function(){
    login.showModal();
}

btnFechar.onclick = function(){
    login.close();
}

const login = document.getElementById('login');
const formLogin = document.querySelector('#login form');

let dadosUsuarios = [
        { nome: "user", email: "email@email.com", senha: "123" },
];

formLogin.addEventListener('submit', (evento) => {
    evento.preventDefault();

    let msgErro = document.querySelector('.erro');
    if(msgErro){
        login.removeChild(msgErro);
    }

    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    dadosUsuarios.forEach(item =>{
        if(email === item.email && senha === item.senha){

            sessionStorage.setItem('usuarioLogado', 'true');
            sessionStorage.setItem('nomeUsuario', item.nome);

            window.location.href="./admin/form_veiculos.html";
        }
    });
    

    let usuarioLogado = sessionStorage.getItem('usuarioLogado');

    if(!usuarioLogado){        
        erro = document.createElement('p');
        erro.classList.add('erro');
        erro.innerText = 'Login ou senha inválido';
        login.insertBefore(erro, login.firstChild);
        document.querySelector('#login form').reset();
    }
});