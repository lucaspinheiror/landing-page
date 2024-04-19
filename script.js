function menuAbrir(){
    const menu = document.getElementById('navigation')

    menu.classList.toggle('abrir')
} 

function fecharMenuMobile() {
    const larguraTela = window.innerWidth;

    const pontoDeRuptura = 1439;
    
    if (larguraTela > pontoDeRuptura) {
        var menu = document.getElementById('navigation');
        
        if (menu) {
            menu.classList.remove('abrir');
        }
    }
}

window.addEventListener('resize', fecharMenuMobile);