var pacientes = document.querySelectorAll('.paciente');

var tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener("dblclick", function(event){

   // event.target.remove(); ... isso remove especificamente oq clicar, e nao o pai
   // entao usamos ... 

// esta fadeOut é uma classe add no css com opacity e transition
   event.target.parentNode.classList.add("fadeOut")

   //setTimeout fala p js esperar p realizar acao e o time é em milisec
   setTimeout(function(){
       event.target.parentNode.remove();
   }, 500);
});


// pacientes.forEach(function(paciente){
//      paciente.addEventListener("dblclick", function(){
//        console.log("Fui clicado com duplo click!");
//        this.remove();
//      }) 

// });