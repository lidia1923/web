
document.querySelector('#menuResponsivo p').addEventListener('click', function(){
   
    var etiqueta= document.getElementById('menuDesplegable');
    var classEtiqueta= etiqueta.className;
    
    if(classEtiqueta=='hideMenu'){
        etiqueta.classList.remove('hideMenu');
        etiqueta.classList.add('showMenu');
        this.innerHTML='Hide Menú';
    }else{
        etiqueta.classList.remove('showMenu');
        etiqueta.classList.add('hideMenu');
        this.innerHTML='Show Menú';
        
    }
});
