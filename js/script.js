$( function() {

  $('.mobile h3').click(function(){
    $('.mobile ul').slideToggle();
  })

  //Anivação
  
  // var titulo = $('.bg .content h1');
  // function typeWrite(elemento) { 
  //   const textoArray = elemento.html().split('');
  //   elemento.html('');
  //   textoArray.forEach((letra,index) => {
  //     setTimeout(() => {
  //       elemento.innerHTML += letra
  //     }, 80 * index);
  //   })
  //   // console.log(textoArray);
  //  }
  //  typeWrite(titulo);
 
} )

var titulo = document.querySelector('.content h1');
function typeWrite(elemento) { 
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra,index) => {
      setTimeout(() => {
        elemento.innerHTML += letra
      }, 100 * index);
  })
  // console.log(textoArray);
}
typeWrite(titulo)


