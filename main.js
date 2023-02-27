function ativa () {
    document.querySelector('nav').classList('.dropdown-lista--ativa');
}

document.querySelector('.dropdown').onclick = function () {
    ativa();
}